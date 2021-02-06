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

const game = {

  // if/where to add place of living - inventory or separate opject

  avatar: {
      perf: {
          wealth: 200,
          social: 0,
          health: 20,
          happiness: 5,
          skills: 200
      },
      inventory:{

      },
      job: {
        barista: {
          name: 'Coffee Barista',
          pay: 400,
          happiness: -5,
          skills: 10,
          time: 8
        },
        manager: {
          name: 'Coffee Shop Manager',
          pay: 610,
          happiness: -8,
          skills: 15,
          time: 8
        },
        dataEntry: {
          name: 'Part-Time Data Entry Specialist',
          pay: 250,
          happiness: -8,
          skills: 15,
          time: 4
        },
        seniorDataEntry: {
          name: 'Part-Time Data Entry Associate',
          pay: 300,
          happiness: -1,
          skills: 15,
          time: 4
        },
        juniorDev: {
          name: 'Junior Software Developer',
          pay: 1250,
          happiness: +1,
          skills: 25,
          time: 8
        },
        midDev: {
          name: 'Mid Level Software Developer',
          pay: 1731,
          happiness: +5,
          skills: 50,
          time: 8
        },
        seniorDev: {
          name: 'Senior Software Developer',
          pay: 2308,
          happiness: +10,
          skills: 75,
          time: 8
        },
        cto: {
          name: 'CTO',
          pay: 10416,
          happiness: +5,
          skills: 100,
          time: 8
        }
      },
      relationships:{

      },
      exercises:{
        level1: {
          name: 'Free Beginner Yoga Video',
          health: 5,
          cost: 0,
          happiness: 5
        }
      },
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
      day: 1,
      year: 1,
      newDay: () => {
        game.phone.calendar.day +=1
        $('#day').text(`Day ${game.phone.calendar.day} Year ${game.phone.calendar.year}`)
        game.phone.clock.hour = 7
        game.phone.clock.amPM = 'AM'
        $('#time').text(`${game.phone.clock.hour}:00 ${game.phone.clock.amPM}`)
        game.avatar.perf.health+=5
        game.avatar.perf.happiness+=5
      },
      checkIfDayShouldEnd: () => { // what happens if user attempts activity that would go past midnight -- need a function for phone to check if enough time, or plan if stayed up too late
        if(game.phone.clock.hour === 12 && game.phone.clock.amPM === 'PM') {
          game.phone.calendar.newDay()}
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
    },
    work: ()=>{
      game.avatar.perf.wealth+=game.avatar.job.pay
      game.avatar.perf.happiness+=game.avatar.job.happiness
      game.avatar.perf.skills+=game.avatar.job.skills
      game.phone.incrementClock(8)
      game.phone.updateMeters()
    },
    shop: ()=>{

      game.phone.updateMeters()
    },
    learn: ()=>{
      game.avatar.perf.skills+=100
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
      game.phone.calendar.newDay()
      game.phone.updateMeters()
    }
  },

  jobMarket: {

  },
  store: {

  },
  learningLibrary: {

  },
  exerciseLibrary: {
    level1: {name: 'Free Beginner Yoga Video',points: 5}

  },
  people: {

  },
  relaxation: {

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
