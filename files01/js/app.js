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

  // if/wher to add place of living - inventory or separate opject

  avatar: {
      perf: {
          wealth: 200,
          social: 0,
          health: 20,
          happiness: 5,
          skills: 0
      },
      inventory:{

      },
      job: {
          name: 'Coffee Barista',
          pay: 10,
          happiness: -5,
          skills: 10
      },
      skills: {

      },
      milestones: {

      }
  },
  phone: {
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
      game.phone.updateMeters()
    },
    shop: ()=>{

      game.phone.updateMeters()
    },
    learn: ()=>{

      game.phone.updateMeters()
    },
    exercise: ()=>{

      game.phone.updateMeters()
    },
    socialize: ()=>{

      game.phone.updateMeters()
    },
    relax: ()=>{

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

  },
  people: {

  },
  relaxation: {

  }

}


//JQUERY SETUP
$(() => {

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
