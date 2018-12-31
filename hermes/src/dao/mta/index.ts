import * as Mta from 'mta-gtfs';

const mta = new Mta({
  key: '0c72057b7c37fe924aa8d124ad54e396', // only needed for mta.schedule() method
  feed_id: 1                  // optional, default = 1
});

export const getStop = async (stopId?: number): Promise<hermes.stopResponse> => {
  return mta.stop(stopId).then((stop: hermes.GTFSStop|hermes.stopResponse): hermes.stopResponse => {
    return (!stopId ? stop : {[stopId]: stop}) as hermes.stopResponse;
  });
}

export const getSchedule = async (stopId: number) => {
  return mta.schedule(stopId).then((res: hermes.stopScheduleResponse) => {
    return res.schedule;
  });
}
