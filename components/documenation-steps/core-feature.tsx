import Article from "../article";

const codeSnippet = `const replaceString = ( 
  input: any,
  replaceRegExp: RegExp,
  replaceWith: string
): any => {
  if (typeof input === "string") {
    return input.replace(replaceRegExp, replaceWith);
  }

  for (let [key, value] of Object.entries(input)) {
    if (value === null) {
      continue;
    }

    if (typeof value === "object" && !Object.keys(value).length) {
      continue;
    }

    if (Array.isArray(value) && value.length === 0) {
      continue;
    }

    if (typeof value === "string") {
      input[key] = value?.replace(replaceRegExp, replaceWith);
    }

    if (typeof value === "object" && !Array.isArray(value)) {
      input[key] = replaceString(input[key], replaceRegExp, replaceWith);
      continue;
    }

    if (Array.isArray(value)) {
      for (let val in value) {
        input[key][val] = replaceString(value[val], replaceRegExp, replaceWith);
      }
    }
  }

  return input;
};`;

const CoreFeature = () => {
  return (
    <Article title="Core Feature">
      <>
        <pre>
          <code>{`const replaceString = ( 
  input: any,
  replaceRegExp: RegExp,
  replaceWith: string
): any => {
  if (typeof input === "string") {
    return input.replace(replaceRegExp, replaceWith);
  }

  for (let [key, value] of Object.entries(input)) {
    if (value === null) {
      continue;
    }

    if (typeof value === "object" && !Object.keys(value).length) {
      continue;
    }

    if (Array.isArray(value) && value.length === 0) {
      continue;
    }

    if (typeof value === "string") {
      input[key] = value?.replace(replaceRegExp, replaceWith);
    }

    if (typeof value === "object" && !Array.isArray(value)) {
      input[key] = replaceString(input[key], replaceRegExp, replaceWith);
      continue;
    }

    if (Array.isArray(value)) {
      for (let val in value) {
        input[key][val] = replaceString(value[val], replaceRegExp, replaceWith);
      }
    }
  }

  return input;
};`}</code>
        </pre>
      </>
    </Article>
  );
};

export default CoreFeature;
