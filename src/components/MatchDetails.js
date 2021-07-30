import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { GETAllParticipants } from "../api/apiParticipants";

const MatchDetails = () => {
  console.log("MATCH DETAILS");
  axios({
    url: "https://api.challonge.com/v2/tournaments/https%3A%2F%2Fchallonge.com%2Fmumble_nero/matches.json",
    method: "GET",
    data: null,
    headers: {
      "Content-Type": "application/vnd.api+json",
      Accept: "application/json",
      "Authorization-Type": "v1",
      Authorization: "jOTnC6gR0LRSXPAF5ukbzMIWP51OPVQqVqIjXBYt",
      //   url: "https://challonge.com/mumble_nero",
    },
  })
    .then((res) => console.log(res))
    .catch((error) => console.log(error));

  return (
    <>
      <div>
        <h1>Match Details</h1>
      </div>
    </>
  );
};

export default MatchDetails;
