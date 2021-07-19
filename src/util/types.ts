export interface ApiData {
  id: number;
  name: string;
  description: string;
  phone: string;
  image: string;
  email: string;
  address: {
    number: string;
    street: string;
    zip: string;
    city: string;
    country: string;
  };
}

export interface ApiResponse {
  data: ApiData[];
}
