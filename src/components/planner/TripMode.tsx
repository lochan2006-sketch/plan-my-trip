type TripModeProps = {
  tripMode: "known" | "suggest";
  setTripMode: React.Dispatch<
    React.SetStateAction<"known" | "suggest">
  >;
};

export default function TripMode({
  tripMode,
  setTripMode,
}: TripModeProps) {
  return (
    <div className="md:col-span-2">
      <p className="mb-3 font-medium text-gray-700">
        How would you like to plan your trip?
      </p>

      <div className="flex flex-col gap-3 md:flex-row md:gap-8">
        <label className="flex cursor-pointer items-center">
          <input
            type="radio"
            checked={tripMode === "known"}
            onChange={() => setTripMode("known")}
            className="mr-2"
          />

          I already know my destination
        </label>

        <label className="flex cursor-pointer items-center">
          <input
            type="radio"
            checked={tripMode === "suggest"}
            onChange={() => setTripMode("suggest")}
            className="mr-2"
          />

          Suggest a destination for me ✨
        </label>
      </div>
    </div>
  );
}