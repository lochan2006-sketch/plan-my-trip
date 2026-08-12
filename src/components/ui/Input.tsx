type InputProps = {
  label: string;
  id: string;
  name: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
  label,
  id,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
}: InputProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block font-medium text-gray-700"
      >
        {label}
      </label>

      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full rounded-lg border border-gray-300 p-3 text-gray-900 placeholder:text-gray-500 transition focus:border-indigo-500 focus:outline-none"
      />
    </div>
  );
}