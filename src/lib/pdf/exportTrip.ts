import jsPDF from "jspdf";
import { TripResponse } from "@/types/ai";

export function exportTripPDF(trip: TripResponse) {
  const doc = new jsPDF();

  // Title
  doc.setFontSize(24);
  doc.setTextColor(79, 70, 229);
  doc.text("ATLAS", 20, 20);

  doc.setFontSize(12);
  doc.setTextColor(100);
  doc.text("Travel Smarter with AI", 20, 28);

  // Divider
  doc.setDrawColor(220);
  doc.line(20, 35, 190, 35);

  let y = 48;

  doc.setFontSize(16);
  doc.setTextColor(30);

  doc.text(`Destination: ${trip.destination}`, 20, y);

  y += 10;

  doc.text(`Starting City: ${trip.startingCity}`, 20, y);

  y += 10;

  doc.text(`Budget: ${trip.budget}`, 20, y);

  y += 10;

  doc.text(`Travelers: ${trip.travelers}`, 20, y);

  y += 10;

  doc.text(`Duration: ${trip.days} Days`, 20, y);

  y += 20;

  doc.setFontSize(18);
  doc.setTextColor(79, 70, 229);
  doc.text("Recommended Stay", 20, y);

  y += 10;

  doc.setFontSize(14);
  doc.setTextColor(50);

  doc.text(trip.hotel.name, 20, y);

  y += 8;

  doc.text(trip.hotel.price, 20, y);

  y += 18;

  doc.setFontSize(18);
  doc.setTextColor(79, 70, 229);

  doc.text("Transport", 20, y);

  y += 10;

  doc.setFontSize(14);
  doc.setTextColor(50);

  doc.text(trip.transport, 20, y);

  y += 20;

  doc.setFontSize(18);
  doc.setTextColor(79, 70, 229);

  doc.text("Itinerary", 20, y);

  y += 12;

  doc.setFontSize(13);
  doc.setTextColor(40);

  trip.itinerary.forEach((day) => {
    doc.setFont("helvetica", "bold");

    doc.text(`Day ${day.day}`, 20, y);

    y += 8;

    doc.setFont("helvetica", "normal");

    day.activities.forEach((activity) => {
      doc.text(`• ${activity}`, 28, y);

      y += 7;
    });

    y += 6;
  });

  doc.setFont("helvetica", "bold");

  doc.setFontSize(18);
  doc.setTextColor(79, 70, 229);

  doc.text("Packing Checklist", 20, y);

  y += 10;

  doc.setFontSize(13);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(40);

  trip.packingTips.forEach((item) => {
    doc.text(`✓ ${item}`, 25, y);

    y += 7;
  });

  doc.save(`${trip.destination}-Trip.pdf`);
}