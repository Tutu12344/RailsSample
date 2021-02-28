import React, { Fragment } from "react";

export const Foods = ({ match }) => {
  return (
    <Fragment>
      フード一覧
      <p>{match.params.restaurantsId}</p>
    </Fragment>
  );
};
