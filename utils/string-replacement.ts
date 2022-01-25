export default class StringReplaceUtils {
  public static replaceString = (
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
        continue;
      }

      if (typeof value === "object" && !Array.isArray(value)) {
        input[key] = StringReplaceUtils.replaceString(
          input[key],
          replaceRegExp,
          replaceWith
        );
        continue;
      }

      if (Array.isArray(value)) {
        for (let val in value) {
          input[key][val] = StringReplaceUtils.replaceString(
            value[val],
            replaceRegExp,
            replaceWith
          );
        }
      }
    }

    return input;
  };

  public static createStringReqExp = (value: string): RegExp => {
    return new RegExp(value, "g");
  };
}
