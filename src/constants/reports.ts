import { ReportDict, Product } from "../types";

export const reports: ReportDict[] = [
  {
    id: "report-one",
    name: "Report One",
    product: Product.RealSight
  },
  {
    id: "report-locationLevel-timeGrouping",
    name: "Report Location Level, TimeGrouping",
    product: Product.RealSight,
    hasLocationLevel: true,
    hasTimeGrouping: true
  },
  {
    id: "report-timeGrouping",
    name: "Report TimeGrouping",
    product: Product.RealSight,
    hasTimeGrouping: true
  },
  {
    id: "report-locationLevel",
    name: "Report Location level",
    product: Product.RealSight,
    hasLocationLevel: true
  },
  {
    id: "report-one",
    name: "Report One",
    product: Product.VitalSight
  },
  {
    id: "report-locationLevel-timeGrouping",
    name: "Report Location Level, TimeGrouping",
    product: Product.VitalSight,
    hasLocationLevel: true,
    hasTimeGrouping: true
  },
  {
    id: "report-timeGrouping",
    name: "Report TimeGrouping",
    product: Product.VitalSight,
    hasTimeGrouping: true
  },
  {
    id: "report-locationLevel",
    name: "Report Location level",
    product: Product.VitalSight,
    hasLocationLevel: true
  },
  {
    id: "report-one",
    name: "Report One",
    product: Product.VenueVitalics
  },
  {
    id: "report-locationLevel-timeGrouping",
    name: "Report Location Level, TimeGrouping",
    product: Product.VenueVitalics,
    hasLocationLevel: true,
    hasTimeGrouping: true
  },
  {
    id: "report-timeGrouping",
    name: "Report TimeGrouping",
    product: Product.VenueVitalics,
    hasTimeGrouping: true
  },
  {
    id: "report-locationLevel",
    name: "Report Location level",
    product: Product.VenueVitalics,
    hasLocationLevel: true
  }
];
