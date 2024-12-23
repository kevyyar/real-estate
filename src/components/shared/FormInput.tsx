import { FieldError, UseFormRegister } from "react-hook-form";
import { InquiryFormData } from "../../types/inquiry";

interface FormInputProps {
  label: string;
  name: keyof InquiryFormData;
  register: UseFormRegister<InquiryFormData>;
  error?: FieldError;
  type?: "text" | "email" | "number" | "select";
  options?: readonly string[];
  placeholder?: string;
  className?: string;
}

const FormInput = ({
  label,
  name,
  register,
  error,
  type = "text",
  options,
  placeholder,
  className = "",
}: FormInputProps) => {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <label htmlFor={name} className="text-sm font-medium text-gray-700">
        {label}
      </label>

      {type === "select" ? (
        <select
          id={name}
          {...register(name)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select {label}</option>
          {options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          id={name}
          placeholder={placeholder}
          {...register(name)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        />
      )}

      {error && <span className="text-sm text-red-600">{error.message}</span>}
    </div>
  );
};

export default FormInput;
