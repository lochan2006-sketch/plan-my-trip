import Input from "../ui/Input";

type TripPreferencesProps = {
  formData: {
    budget: string;
    travelers: string;
    days: string;
    interests: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function TripPreferences({
  formData,
  handleChange,
}: TripPreferencesProps) {
  return (
    <>
      <Input
        label="💰 Budget Per Person (₹)"
        id="budget"
        name="budget"
        type="number"
        placeholder="5000"
        value={formData.budget}
        onChange={handleChange}
      />

      <Input
        label="👥 Number of Travelers"
        id="travelers"
        name="travelers"
        type="number"
        placeholder="4"
        value={formData.travelers}
        onChange={handleChange}
      />

      <Input
        label="📅 Number of Days"
        id="days"
        name="days"
        type="number"
        placeholder="3"
        value={formData.days}
        onChange={handleChange}
      />

      <Input
        label="🎯 Interests"
        id="interests"
        name="interests"
        placeholder="Nature, Adventure, Food"
        value={formData.interests}
        onChange={handleChange}
      />
    </>
  );
}