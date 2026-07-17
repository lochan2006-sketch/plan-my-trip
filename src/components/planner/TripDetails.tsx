import Input from "../ui/Input";

type TripDetailsProps = {
  tripMode: "known" | "suggest";
  formData: {
    startingCity: string;
    destination: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function TripDetails({
  tripMode,
  formData,
  handleChange,
}: TripDetailsProps) {
  return (
    <>
      <Input
        label="📍 Starting City"
        id="startingCity"
        name="startingCity"
        placeholder="Delhi"
        value={formData.startingCity}
        onChange={handleChange}
      />

      {tripMode === "known" && (
        <Input
          label="🗺️ Destination"
          id="destination"
          name="destination"
          placeholder="Jaipur"
          value={formData.destination}
          onChange={handleChange}
        />
      )}
    </>
  );
}