import ICityController, {City} from "./ICityController";

export class CityController implements ICityController {

    async getAllCities(): Promise<City[]> {
        const cities : any = await import("./data");
        return cities.default;
    }

}