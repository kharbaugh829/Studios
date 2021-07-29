function getData() {
  fetch("https://handlers.education.launchcode.org/static/astronauts.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      renderBios(data);
    });
}

//Function should return a component displaying an astronaut's bio
function AstronautBios(astronaut) {
  return (
    <div className="astronaut">
      <div className="bio">
        <h3>{astronaut.firstname}{astronaut.lastname}</h3>
        <ul>
          <li>Hours in space: {astronaut.hoursInSpace}</li>
          <li>Active: {astronaut.active.toString()}</li>
          <li>Skills: {astronaut.skills.join(", ")}</li>
        </ul>
      </div>
      <img className="avatar" src={astronaut.picture} />
    </div>
  );
}

// Function should render all astronaut bios
function renderBios(data) {
  const astronautBios = [];

  for (let i = 0; i < data.length; i++){
    astronautBios.push(AstronautBios(data[i]));
  };
  const root = document.getElementById("root");
  const container = <div className="container">{astronautBios}</div>;
  ReactDOM.render(container, root);
  //The AstronautBios component should be repeated to display bios for all
  //astronaunts in the returned data object.
  
 
  
  //Then attach to the 'root' div!
}

getData();
