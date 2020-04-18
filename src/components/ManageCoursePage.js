import React from "react";
import { Prompt } from "react-router-dom";

function ManageCoursePage(props) {
  return (
    <>
      <h2>Manage Course</h2>
      <Prompt
        when={true}
        message="Esta seguro que desea salir de esta paguina??"
      />
      <p>{props.match.params.slug}</p>
    </>
  );
}

export default ManageCoursePage;
