interface InputComponent {
  label: string;
  id: string;
  type: string;
  register: any;
  name: string;
  errorMsg?: string | undefined;
}

const Input = ({
  label,
  id,
  type,
  errorMsg,
  register,
  name,
}: InputComponent) => {
  return (
    <div className="flex w-full flex-col my-2">
      <label className="" htmlFor={id}>
        {label}
      </label>
      <input
        className={`border h-10 rounded-xl pl-2 ${
          errorMsg ? "border-red-700" : "border-gray-500"
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