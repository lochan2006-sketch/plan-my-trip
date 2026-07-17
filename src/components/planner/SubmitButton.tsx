import Button from "../ui/Button";

type SubmitButtonProps = {
  isSubmitting?: boolean;
};

export default function SubmitButton({
  isSubmitting = false,
}: SubmitButtonProps) {
  return (
    <div className="md:col-span-2">
      <Button
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Generating Trip..." : "✨ Generate My Trip"}
      </Button>
    </div>
  );
}