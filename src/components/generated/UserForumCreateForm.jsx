/* eslint-disable */
"use client";
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createUserForum } from "./graphql/mutations";
const client = generateClient();
export default function UserForumCreateForm(props) {
  const {
    clearOnSuccess = true,
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
    forumTopic: "",
    postContent: "",
    postDate: "",
  };
  const [uuid, setUuid] = React.useState(initialValues.uuid);
  const [forumTopic, setForumTopic] = React.useState(initialValues.forumTopic);
  const [postContent, setPostContent] = React.useState(
    initialValues.postContent
  );
  const [postDate, setPostDate] = React.useState(initialValues.postDate);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setUuid(initialValues.uuid);
    setForumTopic(initialValues.forumTopic);
    setPostContent(initialValues.postContent);
    setPostDate(initialValues.postDate);
    setErrors({});
  };
  const validations = {
    uuid: [{ type: "Required" }],
    forumTopic: [],
    postContent: [],
    postDate: [],
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
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
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
          forumTopic,
          postContent,
          postDate,
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
            query: createUserForum.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "UserForumCreateForm")}
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
              forumTopic,
              postContent,
              postDate,
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
        label="Forum topic"
        isRequired={false}
        isReadOnly={false}
        value={forumTopic}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uuid,
              forumTopic: value,
              postContent,
              postDate,
            };
            const result = onChange(modelFields);
            value = result?.forumTopic ?? value;
          }
          if (errors.forumTopic?.hasError) {
            runValidationTasks("forumTopic", value);
          }
          setForumTopic(value);
        }}
        onBlur={() => runValidationTasks("forumTopic", forumTopic)}
        errorMessage={errors.forumTopic?.errorMessage}
        hasError={errors.forumTopic?.hasError}
        {...getOverrideProps(overrides, "forumTopic")}
      ></TextField>
      <TextField
        label="Post content"
        isRequired={false}
        isReadOnly={false}
        value={postContent}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uuid,
              forumTopic,
              postContent: value,
              postDate,
            };
            const result = onChange(modelFields);
            value = result?.postContent ?? value;
          }
          if (errors.postContent?.hasError) {
            runValidationTasks("postContent", value);
          }
          setPostContent(value);
        }}
        onBlur={() => runValidationTasks("postContent", postContent)}
        errorMessage={errors.postContent?.errorMessage}
        hasError={errors.postContent?.hasError}
        {...getOverrideProps(overrides, "postContent")}
      ></TextField>
      <TextField
        label="Post date"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={postDate && convertToLocal(new Date(postDate))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              uuid,
              forumTopic,
              postContent,
              postDate: value,
            };
            const result = onChange(modelFields);
            value = result?.postDate ?? value;
          }
          if (errors.postDate?.hasError) {
            runValidationTasks("postDate", value);
          }
          setPostDate(value);
        }}
        onBlur={() => runValidationTasks("postDate", postDate)}
        errorMessage={errors.postDate?.errorMessage}
        hasError={errors.postDate?.hasError}
        {...getOverrideProps(overrides, "postDate")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
