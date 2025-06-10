document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById('colorPopularityChart').getContext('2d');
  const chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Черный', 'Блонд', 'Русый', 'Шатен', 'Рыжий'],
      datasets: [{
        label: 'Популярность оттенков',
        data: [35, 25, 20, 15, 5],
        backgroundColor: '#f4b183'
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });

  // Ползунок выбора интенсивности
  const slider = document.getElementById('toneSlider');
  const output = document.querySelector('#toneSlider + p');

  slider.oninput = function() {
    output.textContent = "Интенсивность: " + this.value;
  };
});
