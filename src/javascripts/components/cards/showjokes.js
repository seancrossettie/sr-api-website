const showJokes = (jokeObject) => {
  document.querySelector('#joke-cards').innerHTML += `
  <div class="card m-2" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Category: ${jokeObject.type}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${jokeObject.setup}</li>
      <li class="list-group-item">${jokeObject.punchline}</li>
    </ul>
  </div>
  `;
};

export default showJokes;
