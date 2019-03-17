export class Address {
  // region Attributes
  streetNumber: number;
  apartment: string;
  streetName: string;
  city: string;
  province: string;
  postalCode: string;
  country: string;
  // endregion

  // region Default Methods
  constructor(args?) {
    if (args) {
      this.streetNumber = args.streetNumber;
      this.apartment = args.apartment;
      this.streetName = args.streetName;
      this.city = args.city;
      this.province = args.province;
      this.postalCode = args.postalCode;
      this.country = args.country;
    }
  }
  // endregion
}
