const domBuilder = () => {
  document.querySelector('#app').innerHTML = `
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Get Weather Info</h1>
        <p class="lead">Enter a Location Below to Get Current Weather</p>
        <div class="mb-3">
          <label for="weather-location-input" class="form-label">Location</label>
          <input type="text" class="form-control" id="weather-location-input" placeholder="Enter a City">
        </div>
        <button type="button" class="btn btn-primary" id="weather-location-submit">Submit</button>
      </div>
    </div>
  `;
};

export default domBuilder;
