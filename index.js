const display = document.getElementById('display')
const rocket = document.getElementById('rocket')



// *********** You can use .toString to get a format like this: Fri Nov 25 2022 13:40:27
// const liftOffTime = new Date('December 31 2022 18:00').toString()
// const currentTime = new Date().toString()

const displayDays = document.querySelector('.days')
const displayHours = document.querySelector('.hours')
const displayMinutes = document.querySelector('.minutes')
const displaySeconds = document.querySelector('.seconds')


function paint() {
  const liftOffTime = new Date('December 31 2022 10:00')
  const currentTime = new Date()

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

  // console.log(days, hours, minutes, seconds);
}

setInterval(() => {
  paint()
}, 1000);