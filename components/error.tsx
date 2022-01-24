interface ErrorProps {
  code: number;
  text: string;
}

const Error = ({ code, text }: ErrorProps) => {
  return (
    <div>
      <span>
        ERROR {code}: {text}
      </span>
      <button>Close</button>
    </div>
  );
};

export default Error;
