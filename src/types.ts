export interface formDataType {
  name : string,
  email : string , 
  whatsapp : number | string,
  message : string,
}

export interface RequiredFields {
  [key: string]: boolean;
}

// export interface FormFields {
//   name?: string;
//   price?: string;
//   condition: string;
//   brand: string;
//   year: string;
//   body: string;
//   axle: string;
//   mileage: string;
//   productionPeriod: string;
//   engineType: string;
//   model: string;
//   color: string;
//   transmissionType?: string;
//   seatingCapacity?: string;
//   engineCapacity?: string;
//   warranty?: string; 
//   description?: string; 
// }
export interface FormFields {
  name?: string;
  price?: number | null;
  condition?: string;
  brand?: string;
  year?: number | null;
  body?: string;
  axle?: number | null;
  mileage?: number | null;
  productionPeriod: string;
  engineType: string;
  model: string;
  color: string;
  transmissionType?: string;
  seatingCapacity?: number | null;
  engineCapacity?: number | null;
  warranty?: number | null; 
  description?: string; 
}

export interface User{
  ID : number,
  NAME : string,
  EMAIL : string,
  WHATSAPP_NUMBER : string,
  MESSAGE : string,
}

export interface Product{
  ID     : number ,
  IMAGE1 : string,
  IMAGE2 : string,
  NAME? : string,
  PRICE? : number,
  BRAND : string,
  YEAR : number,
  CONDITION_OF_TRUCK : string,
  AXLE : number,
  BODY : string,
  MILEAGE_L_PER_100KM : number,
  PRODUCTION_PERIOD : string,
  ENGINE_TYPE :string,
  TRANSMISSION_TYPE? : string,
  WARRANTY? : number,
  SEATING_CAPACITY? : number,
  ENGINE_CAPACITY? : number,
  MODEL : string,
  COLOR : string,
}    

export interface Truck {
  ID: number;
  NAME: string;
}

export interface TeamMember {
  name: string;
  imageSrc: string;
}

export interface FormFieldProps {
  id: string;
  name: string;
  type?: string;
  value: string;
  placeholder: string;
  label: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  isTextArea?: boolean;
}

export  interface TruckData {
  NAME?: string,
  PRICE?: number,
  CONDITION_OF_TRUCK: string,
  BRAND: string,
  YEAR: number,
  BODY: string,
  AXLE : number,
  MILEAGE_L_PER_100KM: number,
  PRODUCTION_PERIOD: string,
  ENGINE_TYPE: string,
  MODEL : string,
  COLOR : string,
  TRANSMISSION_TYPE?: string,
  SEATING_CAPACITY?: number,
  ENGINE_CAPACITY: number;
  WARRANTY?: number,
  DESCRIPTION?: string,
}
