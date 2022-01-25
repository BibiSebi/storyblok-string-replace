import { useEffect, useRef } from "react";

interface UserFeedbackProps {
  response: Response;
}

interface Response {
  text: string;
  code: number;
}

const UserFeedback = ({ response }: UserFeedbackProps) => {
  const userFeedbackEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!userFeedbackEl.current) {
      return;
    }
    if (response) {
      userFeedbackEl.current.style.display = "flex";
    } else {
      userFeedbackEl.current.style.display = "none";
    }
  }, [response]);

  return (
    response && (
      <div ref={userFeedbackEl} role="alert">
        <span
          className={`${
            response.code === 200 ? "text-green-500" : "text-red-500"
          }`}
        >
          Response {response.code}: {response.text}
        </span>
      </div>
    )
  );
};

export default UserFeedback;
