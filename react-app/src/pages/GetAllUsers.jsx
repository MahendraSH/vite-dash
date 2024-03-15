import React from "react";
import DynamicTable from "@/components/table-components/DynamicTable";
import { useGetAllUsersQuery } from "@/app/features/userApiSlice";

const GetAllUsers = () => {
  const { data, isLoading, isError, error } = useGetAllUsersQuery();
  const tableColumns = [
    {
      header: "index",
      field: "index",
      type: "number",
    },

    {
      header: "heading",
      field: "heading",
      type: "text",
    },
    {
      header: "Description",
      field: "description",
      type: "text",
    },
    {
      header: "Created At",
      field: "createdAt",
      type: "date",
    },
    {
      header: "View Form ",
      field: "link",
      type: "link",
    },
  ];
  if (isError)
    return (
      <div>
        <h1>Error Occured</h1>
        <pre>{JSON.stringify(error)}</pre>
      </div>
    );
  console.log(data);

  return (
    <div>
      {isLoading ? (
        <div> loading ... </div>
      ) : (
        <TableWarper tableHeading={"All the Forms"} tableDiscription={"All the Forms "}>
          <DynamicTable
            tableColumns={tableColumns}
            tableData={data?.users.map((item, index) => ({
              index: index + 1,
              ...item,
              link: "/user/" + item._id,
            }))}
            Search={{ searchFields: ["heading"] }}
            isFormTable={true}
          />
        </TableWarper>
      )}
    </div>
  );
};

export default GetAllUsers;
