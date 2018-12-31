declare namespace hermes {
  export interface GTFSStop {
    stop_id: string;
    stop_code: string;
    stop_name: string;
    stop_desc: string;
    stop_lat: string;
    stop_lon: string;
    zone_id: string;
    stop_url: string;
    location_type: string;
    parent_station: string;
  }

  export interface stopResponse {
    [stopId: number]: GTFSStop
  }

  export interface GTFSStopSchedule {
    routeId: string;
    delay: any;
    arrivalTime: number;
    departureTime: number;
  }

  export interface stopScheduleResponse {
    schedule: {
      [stopId: number]: GTFSStopSchedule;
    }
  }
}
