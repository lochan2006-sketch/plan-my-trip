type AlertProps = {
  children: React.ReactNode;
};

export default function Alert({
  children,
}: AlertProps) {
  return (
    <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-red-700">
      {children}
    </div>
  );
}