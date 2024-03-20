import React from "react";
import DynamicTable from "@/components/table-components/DynamicTable";
import { useGetAllUsersQuery } from "@/app/features/userApiSlice";
import { Skeleton } from "@mui/material";
import HeadingNav from "@/components/heading-nav";

const GetAllUsers = () => {
  const { data, isError, isLoading, error } = useGetAllUsersQuery();

  const onHandleEdit = async (id) => {
    console.log(id);
  };
  const onDeleteConform = async (id) => {
    console.log(id);
  };
  const tableColumns = [
    {
      header: "index",
      field: "index",
      type: "number",
    },

    {
      header: "FirstName",
      field: "firstName",
      type: "text",
    },
    {
      header: "LastName",
      field: "lastName",
      type: "text",
    },
    { header: "Email", field: "email", type: "text" },
    {
      header: "Created At",
      field: "createdAt",
      type: "date",
    },
  ];
  if (isError)
    return (
      <div>
        <h1>Error Occured</h1>
        <pre>{JSON.stringify(error)}</pre>
      </div>
    );

  return (
    <div>
      <HeadingNav
        navLinks={[
          {
            link: "/",
            label: "Dashboard",
          },
          {
            link: "/users",
            label: "Users",
          },
        ]}
      />
      {isLoading ? (
        <div>
          {" "}
          <Skeleton variant="rectangular" width={"100%"} height={500} />{" "}
        </div>
      ) : (
        <DynamicTable
          tableColumns={tableColumns}
          tableData={data?.users.map((item, index) => ({
            index: index + 1,
            ...item,
          }))}
          Search={{ searchFields: ["firstName", "lastName"] }}
          isFormTable={true}
          label="User"
          deleteLabelName="User"
          onDeleteConform={onDeleteConform}
          onHandleEdit={onHandleEdit}
        />
      )}
    </div>
  );
};

export default GetAllUsers;
