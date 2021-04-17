const jokeForm = () => {
  document.querySelector('#form').innerHTML = '';
  document.querySelector('#cards').innerHTML = '';

  document.querySelector('#form').innerHTML = `
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Get a Random Joke</h1>
        <button type="button" class="btn btn-primary" id="joke-submit">Submit</button>
      </div>
    </div>
  `;

  document.querySelector('#cards').innerHTML = '<div class="container d-flex flex-wrap" id="joke-cards"></div>';
};

export default jokeForm;
