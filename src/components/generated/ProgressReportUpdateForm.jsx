/* eslint-disable */
"use client";
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getProgressReport } from "./graphql/queries";
import { updateProgressReport } from "./graphql/mutations";
const client = generateClient();
export default function ProgressReportUpdateForm(props) {
  const {
    id: idProp,
    progressReport: progressReportModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    uuid: "",
    reportDate: "",
    reportDetails: "",
  };
  const [uuid, setUuid] = React.useState(initialValues.uuid);
  const [reportDate, setReportDate] = React.useState(initialValues.reportDate);
  const [reportDetails, setReportDetails] = React.useState(
    initialValues.reportDetails
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = progressReportRecord
      ? { ...initialValues, ...progressReportRecord }
      : initialValues;
    setUuid(cleanValues.uuid);
    setReportDate(cleanValues.reportDate);
    setReportDetails(cleanValues.reportDetails);
    setErrors({});
  };
  const [progressReportRecord, setProgressReportRecord] = React.useState(
    progressReportModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getProgressReport.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getProgressReport
        : progressReportModelProp;
      setProgressReportRecord(record);
    };
    queryData();
  }, [idProp, progressReportModelProp]);
  React.useEffect(resetStateValues, [progressReportRecord]);
  const validations = {
    uuid: [{ type: "Required" }],
    reportDate: [],
    reportDetails: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          uuid,
          reportDate: reportDate ?? null,
          reportDetails: reportDetails ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateProgressReport.replaceAll("__typename", ""),
            variables: {
              input: {
                id: progressReportRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "ProgressReportUpdateForm")}
      {...rest}
    >
      <TextField
        label="Uuid"
        isRequired={true}
        isReadOnly={false}
        value={uuid}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uuid: value,
              reportDate,
              reportDetails,
            };
            const result = onChange(modelFields);
            value = result?.uuid ?? value;
          }
          if (errors.uuid?.hasError) {
            runValidationTasks("uuid", value);
          }
          setUuid(value);
        }}
        onBlur={() => runValidationTasks("uuid", uuid)}
        errorMessage={errors.uuid?.errorMessage}
        hasError={errors.uuid?.hasError}
        {...getOverrideProps(overrides, "uuid")}
      ></TextField>
      <TextField
        label="Report date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={reportDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uuid,
              reportDate: value,
              reportDetails,
            };
            const result = onChange(modelFields);
            value = result?.reportDate ?? value;
          }
          if (errors.reportDate?.hasError) {
            runValidationTasks("reportDate", value);
          }
          setReportDate(value);
        }}
        onBlur={() => runValidationTasks("reportDate", reportDate)}
        errorMessage={errors.reportDate?.errorMessage}
        hasError={errors.reportDate?.hasError}
        {...getOverrideProps(overrides, "reportDate")}
      ></TextField>
      <TextField
        label="Report details"
        isRequired={false}
        isReadOnly={false}
        value={reportDetails}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uuid,
              reportDate,
              reportDetails: value,
            };
            const result = onChange(modelFields);
            value = result?.reportDetails ?? value;
          }
          if (errors.reportDetails?.hasError) {
            runValidationTasks("reportDetails", value);
          }
          setReportDetails(value);
        }}
        onBlur={() => runValidationTasks("reportDetails", reportDetails)}
        errorMessage={errors.reportDetails?.errorMessage}
        hasError={errors.reportDetails?.hasError}
        {...getOverrideProps(overrides, "reportDetails")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || progressReportModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || progressReportModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
