import { connect } from "mongoose";

export const dbConnect = () => {
  connect(process.env.MongoDB_url)
    .then((data) => {
      console.log(" db connection succesfull ");
    })
    .catch((err) => {
      console.log(err);
    });
};
