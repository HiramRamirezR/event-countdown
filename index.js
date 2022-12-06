const display = document.getElementById('display')
const rocket = document.getElementById('rocket')
const fire = document.querySelector('.fire')
const date = document.querySelector('#date')
const time = document.querySelector('#time')
const btn = document.querySelector('.btn')
const audio = new Audio('audio/rocket.mp3');

// *********** You can use .toString to get a format like this: Fri Nov 25 2022 13:40:27
// const liftOffTime = new Date('December 31 2022 00:00').toString()
// const currentTime = new Date().toString()

btn.addEventListener('click', () => {
  start()
})

const displayDays = document.querySelector('.days')
const displayHours = document.querySelector('.hours')
const displayMinutes = document.querySelector('.minutes')
const displaySeconds = document.querySelector('.seconds')


function paint() {
  // const liftOffTime = new Date('November 26 2022 20:54') // Meter la fecha a mano
  const liftOffTime = new Date(`${date.value} ${time.value}`) // Meter la fecha con inputs
  const currentTime = new Date()
  if (date.value === '' && time.value === '') {
    liftOffTime = new Date('November 26 2023 20:54')
  }

  let diff = liftOffTime - currentTime
  const days = Math.floor(diff / (1000*60*60*24))
  diff -= days * (1000*60*60*24)
  const hours = Math.floor(diff / (1000*60*60))
  diff -= hours * (1000*60*60)
  const minutes = Math.floor(diff / (1000*60))
  diff -= minutes * (1000*60)
  const seconds = Math.floor(diff / 1000)
  diff -= seconds * 1000


  displayDays.textContent = days
  displayHours.textContent = hours
  displayMinutes.textContent = minutes
  displaySeconds.textContent = seconds

  if (days == 0 && hours == 0 && minutes == 0 && seconds == 0 || days < 0) {
    display.remove()
    audio.play()

    fire.classList.remove('fire1')
    fire.classList.add('fire2')
    rocket.classList.add('fly')
  }
}

function start() {
  setInterval(() => {
    paint()
  }, 1000);
}
