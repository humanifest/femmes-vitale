/* eslint-disable */
"use client";
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getSupportGroup } from "./graphql/queries";
import { updateSupportGroup } from "./graphql/mutations";
const client = generateClient();
export default function SupportGroupUpdateForm(props) {
  const {
    id: idProp,
    supportGroup: supportGroupModelProp,
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
    groupName: "",
    groupDescription: "",
    membershipDate: "",
  };
  const [uuid, setUuid] = React.useState(initialValues.uuid);
  const [groupName, setGroupName] = React.useState(initialValues.groupName);
  const [groupDescription, setGroupDescription] = React.useState(
    initialValues.groupDescription
  );
  const [membershipDate, setMembershipDate] = React.useState(
    initialValues.membershipDate
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = supportGroupRecord
      ? { ...initialValues, ...supportGroupRecord }
      : initialValues;
    setUuid(cleanValues.uuid);
    setGroupName(cleanValues.groupName);
    setGroupDescription(cleanValues.groupDescription);
    setMembershipDate(cleanValues.membershipDate);
    setErrors({});
  };
  const [supportGroupRecord, setSupportGroupRecord] = React.useState(
    supportGroupModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getSupportGroup.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getSupportGroup
        : supportGroupModelProp;
      setSupportGroupRecord(record);
    };
    queryData();
  }, [idProp, supportGroupModelProp]);
  React.useEffect(resetStateValues, [supportGroupRecord]);
  const validations = {
    uuid: [{ type: "Required" }],
    groupName: [],
    groupDescription: [],
    membershipDate: [],
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
          groupName: groupName ?? null,
          groupDescription: groupDescription ?? null,
          membershipDate: membershipDate ?? null,
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
            query: updateSupportGroup.replaceAll("__typename", ""),
            variables: {
              input: {
                id: supportGroupRecord.id,
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
      {...getOverrideProps(overrides, "SupportGroupUpdateForm")}
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
              groupName,
              groupDescription,
              membershipDate,
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
        label="Group name"
        isRequired={false}
        isReadOnly={false}
        value={groupName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uuid,
              groupName: value,
              groupDescription,
              membershipDate,
            };
            const result = onChange(modelFields);
            value = result?.groupName ?? value;
          }
          if (errors.groupName?.hasError) {
            runValidationTasks("groupName", value);
          }
          setGroupName(value);
        }}
        onBlur={() => runValidationTasks("groupName", groupName)}
        errorMessage={errors.groupName?.errorMessage}
        hasError={errors.groupName?.hasError}
        {...getOverrideProps(overrides, "groupName")}
      ></TextField>
      <TextField
        label="Group description"
        isRequired={false}
        isReadOnly={false}
        value={groupDescription}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uuid,
              groupName,
              groupDescription: value,
              membershipDate,
            };
            const result = onChange(modelFields);
            value = result?.groupDescription ?? value;
          }
          if (errors.groupDescription?.hasError) {
            runValidationTasks("groupDescription", value);
          }
          setGroupDescription(value);
        }}
        onBlur={() => runValidationTasks("groupDescription", groupDescription)}
        errorMessage={errors.groupDescription?.errorMessage}
        hasError={errors.groupDescription?.hasError}
        {...getOverrideProps(overrides, "groupDescription")}
      ></TextField>
      <TextField
        label="Membership date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={membershipDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uuid,
              groupName,
              groupDescription,
              membershipDate: value,
            };
            const result = onChange(modelFields);
            value = result?.membershipDate ?? value;
          }
          if (errors.membershipDate?.hasError) {
            runValidationTasks("membershipDate", value);
          }
          setMembershipDate(value);
        }}
        onBlur={() => runValidationTasks("membershipDate", membershipDate)}
        errorMessage={errors.membershipDate?.errorMessage}
        hasError={errors.membershipDate?.hasError}
        {...getOverrideProps(overrides, "membershipDate")}
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
          isDisabled={!(idProp || supportGroupModelProp)}
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
              !(idProp || supportGroupModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
