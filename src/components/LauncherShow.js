import React, { useState, useEffect } from "react"

const LauncherShow = props => {
  const [launcher, setLauncher] = useState({})
  let launcherId = props.match.params.id

  useEffect(() => {
    fetch(`/api/v1/launcher/${launcherId}`)
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
          let fetchedLauncher = body
          setLauncher(fetchedLauncher)
        })
        .catch(error => console.error(`Error in fetch: ${error.message}`));
      }, [])

  return (
    <div className="launcher">
      <div>
        {launcher.name}
      </div>
      <div>
        {launcher.bio}
      </div>
    </div>
  )
}

export default LauncherShow
