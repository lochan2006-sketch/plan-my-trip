export interface Destination {
  name: string;
  transport: string;

  hotel: {
    name: string;
    price: string;
  };

  attractions: string[];
  adventure: string[];
  food: string[];
  packing: string[];
}