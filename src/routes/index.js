import express from "express";
import professionals from "./professionalRoutes.js"
import companies from "./companyRoutes.js"
import positions from "./positionRoutes.js"




const routes = (app) => {
    app.route('/').get((req, res) => {
      res.status(200).send({titulo: "WorkSpace"})
    })


    app.use(
        express.json(),
        professionals,
        companies,
        positions
      )
  }



  export default routes
  

 