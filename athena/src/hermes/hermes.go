package hermes

import (
	"encoding/json"
	"io/ioutil"
	"net/http"

	_ "github.com/lib/pq"
)

var connectionBase = "http://hermes:3000/"

type HermesStop struct {
	StopID        string `json:"stop_id"`
	StopCode      string `json:"stop_code"`
	StopName      string `json:"stop_name"`
	StopDesc      string `json:"stop_desc"`
	StopLat       string `json:"stop_lat"`
	StopLon       string `json:"stop_lon"`
	ZoneID        string `json:"zone_id"`
	StopURL       string `json:"stop_url"`
	LocationType  string `json:"location_type"`
	ParentStation string `json:"parent_station"`
}

func GetGTFSStops() map[string]HermesStop {

	var m map[string]HermesStop

	resp, _ := http.Get(connectionBase + "mta/stops")
	defer resp.Body.Close()

	contents, _ := ioutil.ReadAll(resp.Body)

	json.Unmarshal(contents, &m)

	return m
}

func GetGTFSStop(stopId string) map[string]HermesStop {

	var m map[string]HermesStop

	resp, _ := http.Get(connectionBase + "mta/stops/" + stopId)
	defer resp.Body.Close()

	contents, _ := ioutil.ReadAll(resp.Body)

	json.Unmarshal(contents, &m)

	return m
}

type HermesStopSchedule struct {
	RouteID       string `json:"routeId"`
	Delay         string `json:"delay"`
	ArrivalTime   int    `json:"arrivalTime"`
	DepartureTime int    `json:"departureTime"`
}

type HermesStopSchedules struct {
	N []HermesStopSchedule
	S []HermesStopSchedule
}

func GetGTFSSchedules() map[string]HermesStopSchedules {

	var m map[string]HermesStopSchedules

	resp, _ := http.Get(connectionBase + "mta/schedules/635")
	defer resp.Body.Close()

	contents, _ := ioutil.ReadAll(resp.Body)

	json.Unmarshal([]byte(contents), &m)

	return m
}
