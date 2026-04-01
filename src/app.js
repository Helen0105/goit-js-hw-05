
// import { alert, notice, info, success, error, defaultModules } from '@pnotify/core/dist/PNotify.js';
// import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
// import '@pnotify/core/dist/BrightTheme.css';
// import "@pnotify/core/dist/PNotify.css"
// defaultModules.set(PNotifyMobile, {});

// const btnRef = document.querySelector(".btn");
// btnRef.addEventListener("click", ()=>{
//     success({

// text: 'дякую',

// delay: 200,

// });
// })

import { alert, notice, info, success, error, defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/BrightTheme.css';
import "@pnotify/core/dist/PNotify.css";


defaultModules.set(PNotifyMobile, {});

const keys = ['f', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
let currentKeyIndex = 0;

const clickRef = document.querySelector('.current-click');
const btnRef = document.querySelector('.new-game');

function next() {
  if (clickRef) {
    clickRef.textContent = keys[currentKeyIndex];
  }
}

next();

window.addEventListener('keydown', (event) => {
  const pressed = event.key.toLowerCase();
  const target = keys[currentKeyIndex];

  if (pressed === target) {
    currentKeyIndex++;

    if (currentKeyIndex < keys.length) {
      next();
      success({
        text: 'Правильно. Далі',
        delay: 500
      });
    } else {
      success({
        text: 'Вітаю. Ви пройшли всю гру',
        delay: 2000
      });
      currentKeyIndex = 0;
      next();
    }
  } else {
    if (event.key.length === 1) { 
      error({
        title: 'Помилка!',
        text: `Натисніть "${target}"`,
        delay: 1000
      });
    }
  }
});





// import Chart from 'chart.js/auto';
// const ctx = document.getElementById('myChart');

// const chartData = {
//   labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
//   datasets: [
//     {
//       label: "Продажі за останній місяць",
//       data: [150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350],
//       backgroundColor: "#2196f3",
//       borderColor: "#2196f3",
//       borderWidth: 1,
//     },
//   ],
// };
// const salesChart = new Chart();

import Chart from 'chart.js/auto';

const ctx = document.getElementById('myChart');

const chartData = {
  labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
  datasets: [
    {
      label: "Продажі за останній місяць",
      data: [150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350],
      backgroundColor: "#2196f3",
      borderColor: "#2196f3",
      borderWidth: 1,
      tension: 0.1 
    },
  ],
};

const config = {
  type: "line",
  data: chartData, 
  options: {
    responsive: true
  }
};

if (ctx) {
  const myChart = new Chart(ctx, config);
}