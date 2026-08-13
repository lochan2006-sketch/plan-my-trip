import jsPDF from "jspdf";
import { TripResponse } from "@/types/ai";

export function exportTripPDF(trip: TripResponse) {
  const doc = new jsPDF();

  const left = 20;
  const contentWidth = 170;
  const pageBottom = 275;

  let y = 20;

  // -----------------------------
  // Helpers
  // -----------------------------

  const checkPage = (spaceNeeded = 15) => {
    if (y + spaceNeeded > pageBottom) {
      doc.addPage();
      y = 20;
    }
  };

  const addWrappedText = (
    text: string,
    x: number,
    fontSize = 11,
    maxWidth = contentWidth
  ) => {
    doc.setFontSize(fontSize);

    const lines = doc.splitTextToSize(
      text,
      maxWidth
    );

    lines.forEach((line: string) => {
      checkPage(7);

      doc.text(line, x, y);
      y += 6;
    });
  };

  const addSectionTitle = (title: string) => {
    checkPage(20);

    y += 4;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(17);
    doc.setTextColor(79, 70, 229);

    doc.text(title, left, y);

    y += 10;
  };

  // -----------------------------
  // Header
  // -----------------------------

  doc.setFont("helvetica", "bold");
  doc.setFontSize(25);
  doc.setTextColor(79, 70, 229);

  doc.text("ATLAS", left, y);

  y += 8;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.setTextColor(100);

  doc.text(
    "Travel Smarter with AI",
    left,
    y
  );

  y += 8;

  doc.setDrawColor(220);
  doc.line(left, y, 190, y);

  y += 13;

  // -----------------------------
  // Trip Summary
  // -----------------------------

  doc.setFont("helvetica", "bold");
  doc.setFontSize(19);
  doc.setTextColor(30);

  addWrappedText(
    trip.destination,
    left,
    19
  );

  y += 2;

  doc.setFont("helvetica", "normal");
  doc.setTextColor(70);

  addWrappedText(
    `Starting City: ${trip.startingCity}`,
    left
  );

  addWrappedText(
    `Budget / Person: ${trip.budget}`,
    left
  );

  addWrappedText(
    `Travelers: ${trip.travelers}`,
    left
  );

  addWrappedText(
    `Duration: ${trip.days} Days`,
    left
  );

  // -----------------------------
  // Hotel
  // -----------------------------

  addSectionTitle("Recommended Stay");

  doc.setFont("helvetica", "bold");
  doc.setTextColor(40);

  addWrappedText(
    trip.hotel.name,
    left
  );

  doc.setFont("helvetica", "normal");
  doc.setTextColor(90);

  addWrappedText(
    trip.hotel.price,
    left
  );

  // -----------------------------
  // Transport
  // -----------------------------

  addSectionTitle("Recommended Transport");

  doc.setFont("helvetica", "normal");
  doc.setTextColor(50);

  addWrappedText(
    trip.transport,
    left
  );

  // -----------------------------
  // Itinerary
  // -----------------------------

  addSectionTitle("Your Itinerary");

  trip.itinerary.forEach((day) => {
    checkPage(25);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(15);
    doc.setTextColor(79, 70, 229);

    doc.text(
      `Day ${day.day}`,
      left,
      y
    );

    y += 9;

    day.activities.forEach(
      (activity, index) => {
        checkPage(30);

        // Activity number + title
        doc.setFont(
          "helvetica",
          "bold"
        );
        doc.setFontSize(12);
        doc.setTextColor(35);

        addWrappedText(
          `${index + 1}. ${activity.title}`,
          left + 5,
          12,
          160
        );

        doc.setFont(
          "helvetica",
          "normal"
        );
        doc.setTextColor(90);

        if (activity.time) {
          addWrappedText(
            `Time: ${activity.time}`,
            left + 10,
            10,
            155
          );
        }

        if (activity.location) {
          addWrappedText(
            `Location: ${activity.location}`,
            left + 10,
            10,
            155
          );
        }

        if (activity.duration) {
          addWrappedText(
            `Duration: ${activity.duration}`,
            left + 10,
            10,
            155
          );
        }

        if (activity.cost) {
          addWrappedText(
            `Estimated Cost: ${activity.cost}`,
            left + 10,
            10,
            155
          );
        }

        y += 4;
      }
    );

    y += 5;
  });

  // -----------------------------
  // Packing
  // -----------------------------

  addSectionTitle("Packing Checklist");

  doc.setFont(
    "helvetica",
    "normal"
  );
  doc.setTextColor(50);

  trip.packingTips.forEach(
    (item) => {
      checkPage(10);

      addWrappedText(
        `- ${item}`,
        left + 5,
        11,
        160
      );
    }
  );

  // -----------------------------
  // Footer on every page
  // -----------------------------

  const totalPages =
    doc.getNumberOfPages();

  for (
    let page = 1;
    page <= totalPages;
    page++
  ) {
    doc.setPage(page);

    doc.setDrawColor(230);
    doc.line(
      left,
      285,
      190,
      285
    );

    doc.setFont(
      "helvetica",
      "normal"
    );
    doc.setFontSize(9);
    doc.setTextColor(140);

    doc.text(
      "Generated by ATLAS - Travel Smarter with AI",
      left,
      291
    );

    doc.text(
      `Page ${page} of ${totalPages}`,
      190,
      291,
      {
        align: "right",
      }
    );
  }

  // -----------------------------
  // Download
  // -----------------------------

  const safeDestination =
    trip.destination
      .replace(
        /[^a-z0-9]/gi,
        "-"
      )
      .replace(/-+/g, "-");

  doc.save(
    `${safeDestination}-ATLAS-Trip.pdf`
  );
}