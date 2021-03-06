import faker from "faker";
import { Mappable } from "./CustomMap";

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lon: number;
  };
  constructor() {
    this.name = faker.name.findName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lon: parseFloat(faker.address.longitude()),
    };
  }
  markerContent(): string {
    return `<h3><strong>Name : </strong>${this.name}</h3>`;
  }
}
