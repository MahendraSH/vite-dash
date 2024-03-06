import React, { useEffect, useState } from "react";

import DynamicForm from "@/components/form-components/DynamicForms";
import FormWrapper from "@/components/form-components/FormWarper";
import { Box } from "@mui/material";
import { useGetFormDataQuery } from "@/app/features/dataApiSlice";
import { useParams } from "react-router-dom";

const EmployeeForm = () => {
  const params = useParams();
  const { id } = params;
  const { data, isError, isSuccess, error } = useGetFormDataQuery({ id });
  if (isError) {
    return <pre>{JSON.stringify(error)}</pre>;
  }
  if (isSuccess) {
    const formConfig = data;

    return (
      <Box>
        {formConfig && (
          <FormWrapper formHeading={formConfig["form-heading"]} formDescription={formConfig["form-description"]}>
            <DynamicForm formConfig={formConfig} />
          </FormWrapper>
        )}
      </Box>
    );
  }
};

export default EmployeeForm;
