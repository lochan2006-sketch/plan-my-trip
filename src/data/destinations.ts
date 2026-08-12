export type DestinationData = {
  name: string;
  slug: string;

  tagline: string;

  description: string;

  image: string;

  gallery: string[];

  rating: number;

  budgetRange: string;

  bestFor: string;

  bestSeason: string;

  transport: string;

  hotel: {
    name: string;
    price: string;
  };

  attractions: string[];

  adventure: string[];

  food: string[];

  packing: string[];
};

export const destinations: Record<string, DestinationData> = {
  manali: {
    name: "Manali",

    slug: "manali",

    tagline: "Adventure Paradise",

    description:
      "Snow-covered mountains, beautiful valleys and exciting adventure sports make Manali one of India's favourite travel destinations.",

    image: "/images/destinations/manali/hero.jpg",

    gallery: [
      "/images/destinations/manali/hero.jpg",
      "/images/destinations/manali/attraction-1.jpg",
      "/images/destinations/manali/attraction-2.jpg",
      "/images/destinations/manali/food.jpg",
    ],

    transport: "Volvo Bus",

    hotel: {
      name: "Zostel Manali",
      price: "₹1200/night",
    },

    attractions: [
      "Hadimba Temple",
      "Mall Road",
      "Old Manali",
      "Vashisht Temple",
    ],

    adventure: [
      "Paragliding",
      "River Rafting",
      "ATV Ride",
      "Solang Valley",
    ],

    food: [
      "Siddu",
      "Trout Fish",
      "Local Cafés",
      "Tibetan Momos",
    ],

    packing: [
      "Jacket",
      "Gloves",
      "Power Bank",
      "Comfortable Shoes",
    ],

    rating: 4.8,

    budgetRange: "₹7000 - ₹12000",

    bestFor: "Adventure",

    bestSeason: "March - June",
  },

  goa: {

    name: "Goa",
    slug: "goa",
    tagline: "Beach Paradise",
    description:
      "Golden beaches, vibrant nightlife and thrilling water sports make Goa India's favourite beach destination.",

    image: "/images/destinations/goa/hero.jpg",

    gallery: [
      "/images/destinations/goa/hero.jpg",
      "/images/destinations/goa/attraction-1.jpg",
      "/images/destinations/goa/attraction-2.jpg",
      "/images/destinations/goa/food.jpg",
    ],
    transport: "Flight",
    hotel: {
      name: "Zostel Goa",
      price: "₹1800/night",
    },
    attractions: [
      "Baga Beach",
      "Calangute Beach",
      "Fort Aguada",
      "Dona Paula",
    ],
    adventure: [
      "Jet Ski",
      "Parasailing",
      "Scuba Diving",
      "Banana Boat Ride",
    ],
    food: [
      "Goan Fish Curry",
      "Bebinca",
      "Seafood",
      "Beach Cafés",
    ],
    packing: [
      "Sunglasses",
      "Sunscreen",
      "Flip-Flops",
      "Water Bottle",
    ],
    rating: 4.9,

    budgetRange: "₹9000 - ₹15000",

    bestFor: "Beaches",

    bestSeason: "November - February",
  },

  jaipur: {
    name: "Jaipur",
    slug: "jaipur",

    tagline: "Royal Heritage",

    description:
      "Explore majestic forts, colourful markets and the royal history of Rajasthan.",

    image: "/images/destinations/jaipur/hero.jpg",
    gallery: [
      "/images/destinations/jaipur/hero.jpg",
      "/images/destinations/jaipur/attraction-1.jpg",
      "/images/destinations/jaipur/attraction-2.jpg",
      "/images/destinations/jaipur/food.jpg",
    ],
    transport: "Train",
    hotel: {
      name: "Zostel Jaipur",
      price: "₹1400/night",
    },
    attractions: [
      "Amber Fort",
      "Hawa Mahal",
      "City Palace",
      "Jal Mahal",
    ],
    adventure: [
      "Nahargarh Trek",
      "Hot Air Balloon",
    ],
    food: [
      "Dal Baati Churma",
      "Ghewar",
      "Pyaaz Kachori",
    ],
    packing: [
      "Cap",
      "Water Bottle",
      "Walking Shoes",
    ],
    rating: 4.7,

    budgetRange: "₹6000 - ₹10000",

    bestFor: "History",

    bestSeason: "October - March",
  },

  rishikesh: {
    name: "Rishikesh",
    slug: "rishikesh",

    tagline: "Yoga & Adventure",

    description:
      "Experience river rafting, yoga, camping and the peaceful banks of the Ganges.",

    image: "/images/destinations/rishikesh/hero.jpg",
    gallery: [
      "/images/destinations/rishikesh/hero.jpg",
      "/images/destinations/rishikesh/attraction-1.jpg",
      "/images/destinations/rishikesh/attraction-2.jpg",
      "/images/destinations/rishikesh/food.jpg",
    ],
    transport: "Bus",
    hotel: {
      name: "Live Free Hostel",
      price: "₹1100/night",
    },
    attractions: [
      "Laxman Jhula",
      "Ram Jhula",
      "Ganga Aarti",
    ],
    adventure: [
      "River Rafting",
      "Bungee Jumping",
      "Camping",
    ],
    food: [
      "Chotiwala Restaurant",
      "German Bakery",
    ],
    packing: [
      "Sports Shoes",
      "Water Bottle",
      "Power Bank",
    ],
    rating: 4.8,

    budgetRange: "₹5000 - ₹9000",

    bestFor: "Adventure",

    bestSeason: "September - April",
  },

  udaipur: {
    name: "Udaipur",
    slug: "udaipur",

    tagline: "City of Lakes",

    description:
      "Beautiful lakes, royal palaces and romantic sunsets make Udaipur unforgettable.",

    image: "/images/destinations/udaipur/hero.jpg",
    gallery: [
      "/images/destinations/udaipur/hero.jpg",
      "/images/destinations/udaipur/attraction-1.jpg",
      "/images/destinations/udaipur/attraction-2.jpg",
      "/images/destinations/udaipur/food.jpg",
    ],

    transport: "Train",
    hotel: {
      name: "Moustache Udaipur",
      price: "₹1300/night",
    },
    attractions: [
      "City Palace",
      "Lake Pichola",
      "Fateh Sagar",
    ],
    adventure: [
      "Boat Ride",
      "Cycling Tour",
    ],
    food: [
      "Dal Baati",
      "Kachori",
      "Rabdi",
    ],
    packing: [
      "Camera",
      "Cap",
      "Comfortable Shoes",
    ],
    rating: 4.8,

    budgetRange: "₹7000 - ₹11000",

    bestFor: "Lakes",

    bestSeason: "October - March",
  },
};