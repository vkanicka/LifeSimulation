const o = (input) => {
  console.log(input)
}

const spacing = '5px 20px';
const backgroundColor1 = '#697A21'
const textColor1 = '#FFB8DE'
const fontFam1 = 'Avenir Next'
const borderRadius = '30px'

const backgroundColor2 = '#5C5D67';
const textColor2 = '#D0DB97';

const pp = (input) => {

  const styles = `
  padding: ${spacing};
  background-color: ${backgroundColor1};
  color: ${textColor1};
  font-size: 2em;
  font-family: ${fontFam1};
  border-radius: ${borderRadius};
  border: solid;
  border-width: 1px;`

  console.log(`%c${input}`, styles)
}

const p = (input) => {

  const styles = `
  padding: ${spacing};
  background-color: ${backgroundColor2};
  color: ${textColor2};
  font-size: 2em;
  font-family: ${fontFam1};
  border-radius: ${borderRadius};
  border: solid;
  border-width: 1px;`

  console.log(`%c${input}`, styles)
}

const rando = (min, max) => {
  randomSelection = Math.floor(Math.random()*(max-min+1)+min)
  return randomSelection
}

const repeatAction = (functionName, reps) => {
  for (let i=0;i<reps;i++) {functionName()}}

const randomizeColor=()=>{
  return `rgb(${rando(150,255)},${rando(100,255)},${rando(0,255)}`
}

const jobMarket = {
  barista: {
    title: 'Coffee Barista',
    id: 'barista',
    pay: 400,
    happiness: -5,
    skills: 1,
    time: 8,
    xp: 0
  },
  manager: {
    title: 'Coffee Shop Manager',
    id: 'manager',
    pay: 610,
    happiness: -8,
    skills: 1,
    time: 8,
    xp: 5
  },
  dataEntry: {
    title: 'Part-Time Data Entry Specialist',
    id: 'dataEntry',
    pay: 250,
    happiness: -8,
    skills: 1,
    time: 4,
    xp: 10
  },
  seniorDataEntry: {
    title: 'Part-Time Data Entry Associate',
    id: 'seniorDataEntry',
    pay: 300,
    happiness: -1,
    skills: 1,
    time: 4,
    xp: 15
  },
  juniorDev: {
    title: 'Junior Software Developer',
    id: 'juniorDev',
    pay: 1250,
    happiness: +1,
    skills: 1,
    time: 8,
    xp: 20
  },
  midDev: {
    title: 'Mid Level Software Developer',
    id: 'midDev',
    pay: 1731,
    happiness: +5,
    skills: 1,
    time: 8,
    xp: 25
  },
  seniorDev: {
    title: 'Senior Software Developer',
    id: 'seniorDev',
    pay: 2308,
    happiness: +10,
    skills: 1,
    time: 8,
    xp: 30
  },
  cto: {
    title: 'CTO',
    id: 'cto',
    pay: 10416,
    happiness: +5,
    skills: 1,
    time: 8,
    xp: 35
  }
}

const store =  {

}

const learningLibrary = {

}

const exerciseLibrary = {
  level1: {name: 'Free Beginner Yoga Video', points: 5}
}

const people = {

}

const relaxation =  {

}


const game = {

  avatar: {
      perf: {
          wealth: 0,
          social: 0,
          health: 20,
          happiness: 0,
          skills: 0
      },
      inventory:{

      },

      job: jobMarket.barista,
      getJob: (jobTitle)=>{
        game.avatar.job = jobMarket[jobTitle]
        $('#jobTitleDisplay').text(`Job: ${game.avatar.job.title}`)
        $('#jobPayDisplay').text(`Pay: $${game.avatar.job.pay}/wk`)
      },
      getPromotion: ()=>{
        if(game.avatar.job.title !='CTO') {
          if(game.avatar.perf.skills === jobMarket[Object.keys(jobMarket)[Object.keys(jobMarket).indexOf(game.avatar.job.id)+1]].xp) {game.avatar.getJob(( jobMarket[Object.keys(jobMarket)[Object.keys(jobMarket).indexOf(game.avatar.job.id)+1]]).id)
          alert(`Congrats! You've been promoted to ${game.avatar.job.title}!`)}
        }
      },

      relationships:{

      },

      exerciseLevel: exerciseLibrary.level1,

      skills: {

      },
      milestones: {

      }
  },
  phone: {
    clock: {
      hour: 7,
      amPM: 'AM'
    },
    calendar: {
      week: 1,
      year: 1,
      newWeek: () => {
        game.phone.calendar.week +=1
        $('#week').text(`Week ${game.phone.calendar.week} Year ${game.phone.calendar.year}`)
        game.phone.clock.hour = 7
        game.phone.clock.amPM = 'AM'
        $('#time').text(`${game.phone.clock.hour}:00 ${game.phone.clock.amPM}`)
        game.avatar.perf.health+=5
        game.avatar.perf.happiness+=5
      },
      checkIfWeekShouldEnd: () => { // what happens if user attempts activity that would go past midnight -- need a function for phone to check if enough time, or plan if stayed up too late
        if(game.phone.clock.hour === 12 && game.phone.clock.amPM === 'PM') {
          game.phone.calendar.newWeek()}
      }
    },
    incrementClock:(hours) => { // move this under clock!!!
      game.phone.clock.hour+=hours
      if (game.phone.clock.hour>12) {game.phone.clock.hour-=12; if (game.phone.clock.amPM == 'AM') {game.phone.clock.amPM = 'PM'} else {game.phone.clock.amPM='AM'}}
      $('#time').text(`${game.phone.clock.hour}:00 ${game.phone.clock.amPM}`)
    },
    updateMeters: () => {
      $('#wealthMeter').attr('value',game.avatar.perf.wealth)
      $('#socialMeter').attr('value',game.avatar.perf.social)
      $('#healthMeter').attr('value',game.avatar.perf.health)
      $('#happinessMeter').attr('value',game.avatar.perf.happiness)
      $('#skillsMeter').attr('value',game.avatar.perf.skills)

      $('#bankAccountDisplay').text(`Bank Account: $${game.avatar.perf.wealth}`)
      $('#workXPDisplay').text(`WorkXP: ${game.avatar.perf.skills}`)
    },
    work: ()=>{
      game.avatar.perf.wealth+=game.avatar.job.pay
      game.avatar.perf.happiness+=game.avatar.job.happiness
      game.avatar.perf.skills+=game.avatar.job.skills
      game.phone.incrementClock(8)
      game.phone.updateMeters()
      setTimeout(function(){game.avatar.getPromotion()},100)

    },
    shop: ()=>{

      game.phone.updateMeters()
    },
    learn: ()=>{
      game.avatar.perf.skills+=1
      game.phone.incrementClock(1)

      game.phone.updateMeters()
    },
    exercise: ()=>{
      game.avatar.perf.health+=game.avatar.exercises.level1.health
      game.avatar.perf.wealth+=game.avatar.exercises.level1.cost
      game.avatar.perf.happiness+=game.avatar.exercises.level1.happiness
      game.phone.incrementClock(1)
      game.phone.updateMeters()
    },
    socialize: ()=>{
      game.avatar.perf.social+=5
      game.avatar.perf.happiness+=5
      game.phone.incrementClock(2)
      game.phone.updateMeters()
    },
    relax: ()=>{
      game.phone.calendar.newWeek()
      game.phone.updateMeters()
    }
  }
}


//JQUERY SETUP
$(() => {
  game.phone.updateMeters()
  $('#workButton').on('click',game.phone.work)
  $('#shopButton').on('click',game.phone.shop)
  $('#learnButton').on('click',game.phone.learn)
  $('#fitButton').on('click',game.phone.exercise)
  $('#socialButton').on('click',game.phone.socialize)
  $('#relaxButton').on('click',game.phone.relax)

  game.avatar.getJob('barista')




  });


//____________________________________________________________________
//    | |    | ||   |     ||   |   ||  |        *|*    *O***  | |  |
//    | ❅    | ||   |     ||   *   |*  |    *    |      *o    | *  |
//    |      | *|   |     *|       *       .o.   *            *    |
//    *       |  |   *     |             .*oOo*.         |         *
//           |  &          *               .o.          -*-       .O.
//           |                              *            |         o
//           <
//
//
//____________________________________________________________________
