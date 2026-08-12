type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
};

export default function Button({
  children,
  type = "button",
  disabled = false,
  onClick,
  className = "",
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`w-full rounded-xl bg-indigo-600 py-4 font-semibold text-white transition duration-200 hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-indigo-400 ${className}`}
    >
      {children}
    </button>
  );
}