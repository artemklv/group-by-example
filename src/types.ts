export enum LocationLevel {
  Region = 2,
  Prefecture = 4,
  Dictrict = 5
}

export enum TimeGrouping {
  Day = "day",
  Week = "week",
  Month = "month"
}

export enum Product {
  RealSight = "REAC_SIGHT",
  VitalSight = "VITAL_SIGHT",
  VenueVitalics = "VENUE_VITALICS"
}

export type ProductDict = {
  id: Product;
  name: string;
};

export type ReportDict = {
  id: string;
  name: string;
  product: Product;
  hasLocationLevel?: boolean;
  hasTimeGrouping?: boolean;
};

export type GroupByForm = object & {
  step: number;
  name: string;
  product: Product;
  report: string;
  locationLevel: LocationLevel;
  timeGrouping: TimeGrouping;
};
