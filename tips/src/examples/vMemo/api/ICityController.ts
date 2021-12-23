export type City = {
    id: number;
    name: string;
    latitude: string;
    longitude: string;
    population: number;
    region: string;
};

export default interface ICityController {
    getAllCities() : Promise<City[]>;
};