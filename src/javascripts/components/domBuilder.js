const domBuilder = () => {
  document.querySelector('#app').innerHTML = `
    <div id="navbar"></div>
    <div id="form"></div>
    <div id="cards"></div>
  `;
};

export default domBuilder;
