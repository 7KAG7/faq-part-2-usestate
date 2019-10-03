import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"

import LauncherShow from "./LauncherShow"

const LauncherList = (props) => {
  const [launchers, setLaunchers] = useState([])
  useEffect(() => {
  fetch("/api/v1/launchers")
  .then(response => {
    if (response.ok) {
      return response;
    } else {
      let errorMessage = `${response.status} (${response.statusText})`,
       error = new Error(errorMessage);
      throw(error);
    }
  })
  .then(response => response.json())
  .then(body => {
    setLaunchers(body)
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`));
}, [])

  const launcherList = launchers.map((launcher) => {
    return(
      <li key={launcher.id}>
        <Link to={`/launcher/${launcher.id}`}>{launcher.name}</Link>
      </li>
    )
  })

  return(
    <div>
      <ul>
        {launcherList}
      </ul>
    </div>
  )
}

export default LauncherList;
