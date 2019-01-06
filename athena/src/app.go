package main

import (
	"log"
	"models"
	"net/http"
	"os"
	"routes"

	"github.com/julienschmidt/httprouter"
	_ "github.com/lib/pq"
)

func main() {
	router := httprouter.New()

	db, err := models.NewDB("postgres://postgresql:docker@postgres/alexandria?sslmode=disable")
	if err != nil {
		log.Panic(err)
	}

	router.GET("/stops", routes.Stops(db))
	router.GET("/stops/sync", routes.Sync(db))
	router.GET("/schedules", routes.Schedules(db))

	// print env
	env := os.Getenv("APP_ENV")
	if env == "production" {
		log.Println("Running api server in production mode")
	} else {
		log.Println("Running api server in dev mode")
	}

	http.ListenAndServe(":8080", router)
}
