const weatherForm = () => {
  document.querySelector('#form').innerHTML = `
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
          <h1 class="display-4">Check Weather in Your Location</h1>
          <p class="lead">Enter a Location Below to Get Current Weather</p>
          <form id="weather-jumbotron-input">
            <div class="mb-3 form-group">
              <label for="weather-location-input" class="form-label"></label>
              <input type="text" class="form-control" aria-describedby="location" id="weather-location-input" placeholder="City, State, or Zip" required>
            </div>
          </form>
          <button type="button" class="btn btn-primary" id="weather-location-submit">Submit</button>
        </div>
      </div>
    </div>
    `;

  document.querySelector('#cards').innerHTML = '<div class="container d-flex flex-wrap" id="weather-cards"></div>';
};

export default weatherForm;
