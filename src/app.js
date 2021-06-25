const express = require("express");
//importing express framework
require("../src/db/connection");
const app = express();
//importing the database schema
const customerApi = require("./models/customer");
//assigning PORT
const port = process.env.PORT || 8000; 

app.use(express.json());
//admin sends the post request to store the data in database
//admin has to go on http://localhost:8000/customer to send 
//post request
app.post("/customer", async (req, res) => {
  try {
    const addingCustomerData = new customerApi(req.body);
    console.log(addingCustomerData);
    const addCustomer = await addingCustomerData.save();
    console.log(addingCustomerData);
    res.status(201).send(addCustomer);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(port, () => {
  console.log(`connection is live at port no ${port}`);
});
