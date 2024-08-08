/* eslint-disable */
"use client";
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getMenstrualHealthInsight } from "./graphql/queries";
import { updateMenstrualHealthInsight } from "./graphql/mutations";
const client = generateClient();
export default function MenstrualHealthInsightUpdateForm(props) {
  const {
    id: idProp,
    menstrualHealthInsight: menstrualHealthInsightModelProp,
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
    insight: "",
    date: "",
  };
  const [uuid, setUuid] = React.useState(initialValues.uuid);
  const [insight, setInsight] = React.useState(initialValues.insight);
  const [date, setDate] = React.useState(initialValues.date);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = menstrualHealthInsightRecord
      ? { ...initialValues, ...menstrualHealthInsightRecord }
      : initialValues;
    setUuid(cleanValues.uuid);
    setInsight(cleanValues.insight);
    setDate(cleanValues.date);
    setErrors({});
  };
  const [menstrualHealthInsightRecord, setMenstrualHealthInsightRecord] =
    React.useState(menstrualHealthInsightModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getMenstrualHealthInsight.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getMenstrualHealthInsight
        : menstrualHealthInsightModelProp;
      setMenstrualHealthInsightRecord(record);
    };
    queryData();
  }, [idProp, menstrualHealthInsightModelProp]);
  React.useEffect(resetStateValues, [menstrualHealthInsightRecord]);
  const validations = {
    uuid: [{ type: "Required" }],
    insight: [],
    date: [],
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
          insight: insight ?? null,
          date: date ?? null,
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
            query: updateMenstrualHealthInsight.replaceAll("__typename", ""),
            variables: {
              input: {
                id: menstrualHealthInsightRecord.id,
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
      {...getOverrideProps(overrides, "MenstrualHealthInsightUpdateForm")}
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
              insight,
              date,
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
        label="Insight"
        isRequired={false}
        isReadOnly={false}
        value={insight}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uuid,
              insight: value,
              date,
            };
            const result = onChange(modelFields);
            value = result?.insight ?? value;
          }
          if (errors.insight?.hasError) {
            runValidationTasks("insight", value);
          }
          setInsight(value);
        }}
        onBlur={() => runValidationTasks("insight", insight)}
        errorMessage={errors.insight?.errorMessage}
        hasError={errors.insight?.hasError}
        {...getOverrideProps(overrides, "insight")}
      ></TextField>
      <TextField
        label="Date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uuid,
              insight,
              date: value,
            };
            const result = onChange(modelFields);
            value = result?.date ?? value;
          }
          if (errors.date?.hasError) {
            runValidationTasks("date", value);
          }
          setDate(value);
        }}
        onBlur={() => runValidationTasks("date", date)}
        errorMessage={errors.date?.errorMessage}
        hasError={errors.date?.hasError}
        {...getOverrideProps(overrides, "date")}
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
          isDisabled={!(idProp || menstrualHealthInsightModelProp)}
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
              !(idProp || menstrualHealthInsightModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
