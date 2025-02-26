export interface FlightSearchCriteria {
  origin?: string;
  destination?: string;
  departureTime?:
    | {
        $gte: Date;
        $lte: Date;
      }
    | {
        $gt: Date;
      };
}
