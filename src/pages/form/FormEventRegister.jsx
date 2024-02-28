import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import DynamicForm from "@/components/form-components/DynamicForms";
import FormWrapper from "@/components/form-components/FormWarper";

const FormEventRegister = () => {
  const [formConfig, setFormConfig] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/event-register.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setFormConfig(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box>
      {formConfig && (
        <FormWrapper formHeading={formConfig["form-heading"]} formDescription={formConfig["form-description"]}>
          <DynamicForm formConfig={formConfig} />
        </FormWrapper>
      )}
    </Box>
  );
};

export default FormEventRegister;
