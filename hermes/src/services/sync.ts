import { getStop } from "../dao/mta";
import sequelize from "../sequelize";

const Stop = sequelize.models['Stop'];

const mapGtfsStopToStop = (gtfsStop: hermes.GTFSStop) => {
  return {
    stop_id: gtfsStop.stop_id,
    code: gtfsStop.stop_code,
    name: gtfsStop.stop_name,
    desc: gtfsStop.stop_desc,
    lat: gtfsStop.stop_lat,
    lon: gtfsStop.stop_lon,
    zone_id: gtfsStop.zone_id,
    url: gtfsStop.stop_url,
    location_type: gtfsStop.location_type,
    parent_station: gtfsStop.parent_station,
  }
}

export const setStops = () => {
  getStop().then((stops) => {
    for(const stop in stops) {
      Stop.build(mapGtfsStopToStop(stops[stop])).save();
    }
  })
};
