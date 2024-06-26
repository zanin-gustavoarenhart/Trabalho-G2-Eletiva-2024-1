const apiKey = '64ed82577ced7f69cb1687f0ce536131';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

document.getElementById('search-button').addEventListener('click', () => {
  const city = document.getElementById('city-input').value;
  fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric&lang=pt`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Cidade não encontrada');
      }
      return response.json();
    })
    .then(data => {
      const weatherContainer = document.getElementById('weather-container');
      weatherContainer.innerHTML = `
        <div class="weather-item">Temperatura: ${data.main.temp} °C</div>
        <div class="weather-item">${data.weather[0].description}</div>
        <div class="weather-item"><img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Ícone do Clima"></div>
      `;
    })
    .catch(error => {
      alert(error.message);
    });
});