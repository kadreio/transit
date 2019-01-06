package routes

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"hermes"
	"net/http"

	"github.com/julienschmidt/httprouter"
)

func Stops(db *sql.DB) httprouter.Handle {
	return httprouter.Handle(func(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
		var js, _ = json.Marshal(hermes.GetGTFSStops())
		fmt.Fprintf(w, string(js))
	})
}

func Schedules(db *sql.DB) httprouter.Handle {
	return httprouter.Handle(func(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
		var js, _ = json.Marshal(hermes.GetGTFSSchedules())
		fmt.Fprintf(w, string(js))
	})
}

func Sync(db *sql.DB) httprouter.Handle {
	return httprouter.Handle(func(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
		fmt.Fprintf(w, "starting")
		// SyncStops(Env.db)
		fmt.Fprintf(w, "success")
	})
}
