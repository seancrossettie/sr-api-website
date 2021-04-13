const domBuilder = () => {
  document.querySelector('#app').innerHTML = `
    <div id="form"></div>
    <div id="cards"></div>
  `;
};

export default domBuilder;
