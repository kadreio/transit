import * as Mta from 'mta-gtfs';

interface stop {

}

interface stopSchedule {

}

interface stopScheduleResponse {

}

const mta = new Mta({
  key: '0c72057b7c37fe924aa8d124ad54e396', // only needed for mta.schedule() method
  feed_id: 1                  // optional, default = 1
});

export const getStop = async (stopId?: number) => {
  return mta.stop(stopId).then((stop: any) => {
    return !stopId ? stop : {[stopId]: stop};
  });
}

export const getSchedule = async (stopId: number) => {
  return mta.schedule(stopId);
}
