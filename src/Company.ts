import faker from "faker";
import { Mappable } from "./CustomMap";

export class Company implements Mappable {
  companyName: string;
  catchphrase: string;
  location: {
    lat: number;
    lon: number;
  };
  constructor() {
    (this.companyName = faker.company.companyName()),
      (this.catchphrase = faker.company.catchPhrase());
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lon: parseFloat(faker.address.longitude()),
    };
  }
  markerContent(): string {
    return `
    <div>
        <h1>Company name:${this.companyName}</h1>
        <h3>Company catchphrase ${this.catchphrase}</h3>
    </div>
    `;
  }
}
