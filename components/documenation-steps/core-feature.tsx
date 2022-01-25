import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
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
        <h3 className="text-2xl">Solution</h3>
        <p>
          In this example I used the tree search algorithm which goes trough
          each key of the json response and checks if the value is a string or
          not. This is possible via recursion.
        </p>

        <h3 className="text-2xl">Code</h3>

        <SyntaxHighlighter
          language="typescript"
          customStyle={{ background: "none" }}
          showLineNumbers
        >
          {codeSnippet}
        </SyntaxHighlighter>
      </>
    </Article>
  );
};

export default CoreFeature;
