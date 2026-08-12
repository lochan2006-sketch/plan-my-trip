import Button from "../ui/Button";

type SubmitButtonProps = {
  isSubmitting?: boolean;
};

export default function SubmitButton({
  isSubmitting = false,
}: SubmitButtonProps) {
  return (
    <div className="col-span-full pt-2">
      <Button
        type="submit"
        disabled={isSubmitting}
        className="rounded-2xl py-4 text-base font-bold shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5"
      >
        {isSubmitting ? "Generating Trip..." : "✨ Generate My Trip"}
      </Button>
    </div>
  );
}