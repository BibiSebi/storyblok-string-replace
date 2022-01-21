interface ErrorComponent {
  code: number;
  text: string;
}

const Error = ({ code, text }: ErrorComponent) => {
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
