package main

import (
	"database/sql"
	"log"

	_ "github.com/lib/pq"
)

type Stop struct {
	stopID string
}

func GetStops(db *sql.DB) *sql.Rows {
	rows, err := db.Query("SELECT stop_id, code FROM stops")

	if err != nil {
		log.Fatal(err)
	}
	return rows
}

func InsertStop(stop HermesStop, db *sql.DB) {
	db.Query("insert into stops (stop_id, code, name, description, lat, lon, zone_id, url, location_type, parent_station) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)", stop.StopID, stop.StopCode, stop.StopName, stop.StopDesc, stop.StopLat, stop.StopLon, stop.ZoneID, stop.StopURL, stop.LocationType, stop.ParentStation)
}

func SyncStops(db *sql.DB) {
	stops := GetGTFSStops()
	for _, v := range stops {
		InsertStop(v, db)
	}
}
