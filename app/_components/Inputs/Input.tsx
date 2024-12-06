import { useFormContext } from "react-hook-form";
import Label from "./Label";
import { classNames } from "@/app/_utils/classNames";

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name: string;
  label?: string;
  hint?: string;
}

const Input = ({
  name,
  label,
  hint,
  readOnly,
  ...rest
}: InputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = errors[name]?.message as string | undefined;

  return (
    <div>
      <Label
        name={name}
        label={label}
      />
      <input
        {...rest}
        {...register(name)}
        readOnly={readOnly}
        className={classNames(
          "block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6",
          label ? "mt-2" : "",
          readOnly ? "bg-gray-100" : "bg-white dark:bg-gray-900",
        )}
      />
      {!error && hint && (
        <p className="mt-2 text-sm text-gray-900 dark:text-gray-100">
          {hint}
        </p>
      )}
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default Input;
