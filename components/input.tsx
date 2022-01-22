interface InputComponent {
  label: string;
  id: string;
  type: string;
  errorMsg?: string | undefined;
}

const Input = ({ label, id, type, errorMsg, ...rest }: InputComponent) => {
  return (
    <div className="flex w-full flex-col my-2">
      <label className="" htmlFor={id}>
        {label}
      </label>
      <input
        className={`border h-10 rounded-xl ${
          errorMsg ? "border-red-700" : "border-gray-500"
        }`}
        type={type}
        id={id}
        {...rest}
      />
      {errorMsg && (
        <span role="alert" className="text-red-700">
          {errorMsg}
        </span>
      )}
    </div>
  );
};

export default Input;
