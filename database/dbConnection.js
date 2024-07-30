import { connect } from "mongoose";

const dbConnection = connect("mongodb://127.0.0.1:27017/Tripy").then(() => {
  console.log("Database is Connected Successfully.");
});

export default dbConnection;
