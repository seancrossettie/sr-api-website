const domBuilder = () => {
  document.querySelector('#app').innerHTML = `
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Get Weather Info</h1>
        <p class="lead">Enter a Location Below to Get Current Weather</p>
        <form>
          <div class="mb-3 form-group">
            <label for="weather-location-input" class="form-label">Location</label>
            <input type="text" class="form-control" aria-describedby="location" id="weather-location-input" placeholder="Enter a City" required>
          </div>
        </form>
        <button type="button" class="btn btn-primary" id="weather-location-submit">Submit</button>
      </div>
    </div>
    <div class="container d-flex flex-wrap" id="weather-cards"></div>
  `;
};

export default domBuilder;
