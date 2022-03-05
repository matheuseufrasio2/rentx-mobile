import { CarDTO } from "../../dtos/CarDTO";

export type RootStackParamList = {
  Home: {
    name: string;
  };
  CarDetails: {
    car: CarDTO;
  };
  Scheduling: {
    option: string;
  };
  SchedulingComplete: {
    option: string;
  };
  SchedulingDetails: {
    option: string;
  };
};