interface InputProps {
  label: string;
  id: string;
  type: string;
  register: any;
  name: string;
  errorMsg?: string | undefined;
}

const Input = ({ label, id, type, errorMsg, register, name }: InputProps) => {
  return (
    <div className="flex w-full flex-col my-2">
      <label className="" htmlFor={id}>
        {label}
      </label>
      <input
        autoComplete="on"
        className={`border h-10 rounded-xl pl-2 ${
          errorMsg ? "border-red-700" : "border-blue-400"
        }`}
        type={type}
        id={id}
        name={name}
        {...register(name, { required: `Please fill in the ${label}` })}
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
