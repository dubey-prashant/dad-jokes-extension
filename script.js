function getJoke() {
  document.getElementById('joke').innerText = 'Loading...';
  fetch('https://icanhazdadjoke.com/slack')
    .then((res) => res.json())
    .then((data) => {
      document.getElementById('joke').innerText = data.attachments[0].text;
      document.querySelector('button').style.display = 'block';
    });
}
getJoke(); // call getJoke first time
document.querySelector('button').addEventListener('click', getJoke); // getJoke on buttonClick
