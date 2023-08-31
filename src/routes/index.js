import express from "express";
import professionals from "./professionalRoutes.js"


const routes = (app) => {
    app.route('/').get((req, res) => {
      res.status(200).send({titulo: "WorkSpace"})
    })

    app.use(
        express.json(),
        professionals
      )
  }



  export default routes
  

 