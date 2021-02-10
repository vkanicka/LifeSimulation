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

  avatar: {
      perf: {
          wealth: 0,
          social: 0,
          health: 20,
          happiness: 6,
          study: 0,

          workXP: 0,
          exerciseXP: 0,
          socialXP:0,
          studyXP:0
      },
      moodImages: {
        default: 'https://i.imgur.com/fkCNTjU.png',
        sad:'https://i.imgur.com/azfboBa.png',
        happy: 'https://i.imgur.com/NCsLg5m.png',
        relaxed: 'https://i.imgur.com/0GHECUi.png'
      },
      updateImg: (state)=>{
        if(typeof(state)!='undefined'){
            state=state
        }
        else if (game.avatar.perf.happiness<=5) {
            state='sad'
        }
        else {
          state='default'
        }
        $('#avatar').attr('src',game.avatar.moodImages[state])

        //change image

      },
      inventory:{

      },

      job: 'unemployed',
      getJob: (jobTitle)=>{
        game.avatar.job = game.jobMarket[jobTitle]
        $('#jobTitleDisplay').text(`Job: ${game.avatar.job.title}`)
        $('#jobPayDisplay').text(`Pay: $${game.avatar.job.pay}/day`)
      },
      getPromotion: ()=>{
        if(game.avatar.job.title !='CTO') {
          if(game.avatar.perf.workXP === game.jobMarket[Object.keys(game.jobMarket)[Object.keys(game.jobMarket).indexOf(game.avatar.job.id)+1]].workXP) {game.avatar.getJob((game.jobMarket[Object.keys(game.jobMarket)[Object.keys(game.jobMarket).indexOf(game.avatar.job.id)+1]]).id)
          game.avatar.updateImg('happy')
          if(typeof(game.avatar.job.img)!='undefined') {game.memoryWall.updateMemoryWall(game.avatar.job.img,game.avatar.job.frame)}
          alert(`Congrats! Alita has been promoted to ${game.avatar.job.title}!`)}
        }
      },

      exerciseLevel: (''),
      getExerciseLevel: (levelNumber)=>{
        game.avatar.exerciseLevel = game.exerciseLibrary[levelNumber]
      },
      socialLevel:'',
      getSocialLevel: (levelNumber)=>{
        game.avatar.socialLevel = game.socialLibrary[levelNumber]

      },
      studyLevel: '',
      getStudyLevel: (levelNumber)=>{
        game.avatar.studyLevel = game.studyLibrary[levelNumber]
      },
      studyLevel: '',
      getStudyLevel: (levelNumber)=>{
        game.avatar.studyLevel = game.studyLibrary[levelNumber]
      },


      walkIn: () => {
        $thisAvatar = $('#avatar')
        $thisAvatar.css({'left':'400px','transition':'3s','steps':('3', 'jump-start')})},
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
      $('#studyMeter').attr('value',game.avatar.perf.study)

      $('#bankAccountDisplay').text(`Bank Account: $${game.avatar.perf.wealth}`)
      $('#workXPDisplay').text(`WorkXP: ${game.avatar.perf.workXP}`)
    },

    checkRequirement: (action) => { // loop through each? or call each function
      // check if avatar perf stat meets avatar action level requirement
          const avatarWants = game.avatar[`${action}Level`]
            o(avatarWants)
          // $
          if (game.avatar.perf['wealth'] < avatarWants.cost) {
            alert(`Alita does not have the $${avatarWants.cost} needed for ${avatarWants.name}.`)
            return false
          } else {return true}



      // $


      // social
      // health
      // happiness
      // study
      // time

    },
    work: ()=>{
      if(game.avatar.perf.happiness<=5) {alert(`Alita is too depressed to work.`)}
      else if (game.avatar.perf.health <=5) {alert(`Alita isn't feeling physically well enough to work.`)}
      else {
          game.avatar.perf.wealth+=game.avatar.job.pay
          game.avatar.perf.happiness+=game.avatar.job.happiness
          game.avatar.perf.workXP+=1
          game.phone.incrementClock(game.avatar.job.time)
          game.phone.updateMeters()
          game.avatar.updateImg()
          setTimeout(function(){game.avatar.getPromotion()},100)
      }
    },
    shop: ()=>{

      game.phone.updateMeters()
      game.avatar.updateImg()
    },
    study: ()=>{
      if (game.phone.checkRequirement('study')) {
        p(`has enough $`)
        if (game.avatar.perf.happiness < 0|| game.avatar.perf.social < 0|| game.avatar.perf.health < 0) {
          o(game.avatar.perf)
          alert(`Alita can't concentrate on study anything right now. Try to help her feel better.`)
        } else {
            p(`This educational course is going to cost $${game.avatar.studyLevel.cost}`)
            game.avatar.perf.study+=game.avatar.studyLevel.study
            game.avatar.perf.wealth-=game.avatar.studyLevel.cost
            game.avatar.perf.studyXP+=1
            game.phone.incrementClock(1)
            game.phone.updateMeters()
            game.avatar.updateImg()
            if(game.avatar.perf.studyXP%5===0) {
              p(`Alita completed a ${game.avatar.studyLevel.name}!`)
              if(typeof(game.avatar.studyLevel.img)!='undefined') {game.memoryWall.updateMemoryWall(game.avatar.studyLevel.img,game.avatar.studyLevel.frame)}
              game.avatar.studyLevel=game.studyLibrary[game.avatar.studyLevel.level+1]
            }
        }
      }
    },
    exercise: ()=>{
      if(game.avatar.perf.social <=0) {alert(`Alita is lonely. She can't motivate herself to exercise.`)}
      else if (game.avatar.perf.health <=5) {alert(`Alita is not feeling physically well enough to work out right now.`)}
      else {
        p(`This exercise is going to cost $${game.avatar.exerciseLevel.cost}`)
        game.avatar.perf.health+=game.avatar.exerciseLevel.health
        game.avatar.perf.wealth-=game.avatar.exerciseLevel.cost
        game.avatar.perf.happiness+=game.avatar.exerciseLevel.happiness
        game.avatar.perf.exerciseXP+=1
        game.phone.incrementClock(2)
        game.phone.updateMeters()
        game.avatar.updateImg()

        if(game.avatar.perf.exerciseXP%3===0) {
          p(`Alita mastered ${game.avatar.exerciseLevel.name}!`)
          if(typeof(game.avatar.exerciseLevel.img)!='undefined') {game.memoryWall.updateMemoryWall(game.avatar.exerciseLevel.img,game.avatar.exerciseLevel.frame)}
          game.avatar.exerciseLevel=game.exerciseLibrary[game.avatar.exerciseLevel.level+1]
        }
      }
    },
    socialize: ()=>{
      if(game.avatar.perf.health<=5) {alert(`Alita is not feeling phsyically well enough to socialize.`)}
      else {
        p(`This social activity is going to cost $${game.avatar.socialLevel.cost}`)
        p(game.avatar.socialLevel.name)
        game.avatar.perf.social+=game.avatar.socialLevel.social
        game.avatar.perf.happiness+=game.avatar.socialLevel.happiness
        game.avatar.perf.wealth-=game.avatar.socialLevel.cost
        game.avatar.perf.health+=game.avatar.socialLevel.health
        game.avatar.perf.socialXP+=1
        game.phone.incrementClock(2)
        game.phone.updateMeters()
        if(typeof(game.avatar.socialLevel.img)!='undefined') {game.memoryWall.updateMemoryWall(game.avatar.socialLevel.img,game.avatar.socialLevel.frame)}
        game.avatar.socialLevel=game.socialLibrary[game.avatar.socialLevel.level+1]
        game.avatar.updateImg()
      }
    },
    relax: ()=>{
      game.phone.calendar.newDay()
      game.phone.updateMeters()
      game.avatar.updateImg('relaxed')
    }
  },
  jobMarket: {
    barista: {
      title: 'Coffee Barista',
      id: 'barista',
      pay: 400/5,
      happiness: -5,
      study: 1,
      time: 8,
      workXP: 0

    },
    manager: {
      title: 'Coffee Shop Manager', // add photo - maybe
      id: 'manager',
      pay: 610/5,
      happiness: -8,
      study: 1,
      time: 8,
      workXP: 5,
      img: 'coffeeShop',
      frame:1,
      preReq: 'Business Management Online Course'
    },
    dataEntry: {
      title: 'Data Entry Specialist',
      id: 'dataEntry',
      pay: 250/5,
      happiness: -8,
      study: 1,
      time: 8,
      workXP: 10
    },
    seniorDataEntry: {
      title: 'Data Entry Associate',
      id: 'seniorDataEntry',
      pay: 300/5,
      happiness: -12,
      study: 1,
      time: 8,
      workXP: 15,
      preReq:'Excel Online Course'
    },
    juniorDev: {
      title: 'Junior Software Developer', // add photo
      id: 'juniorDev',
      pay: 1250/5,
      happiness: -5,
      study: 1,
      time: 8,
      workXP: 20,
      preReq:'Coding Bootcamp'
    },
    midDev: {
      title: 'Mid Level Software Developer',
      id: 'midDev',
      pay: 1731/5,
      happiness: -4,
      study: 1,
      time: 8,
      workXP: 25
    },
    seniorDev: {
      title: 'Senior Software Developer',
      id: 'seniorDev',
      pay: 2308/5,
      happiness: -3,
      study: 1,
      time: 8,
      workXP: 30,
      preReq:"Bachelor's Degree in Computer Science"
    },
    cto: {
      title: 'CTO', // add photo
      id: 'cto',
      pay: 10416/5,
      happiness: -20,
      study: 1,
      time: 8,
      workXP: 35,
      preReq:'MBA'
    }
  },
  store : {
    // 0: {level:0, name:'bicycle',cost:500,img:''},
    // 1: {level:1, name: 'laptop',cost:1200,img:''},
    // 2: {level: 2: name: ''}

  },

  studyLibrary: {
    0: {level: 0, name: 'Business Management Online Course',cost:400/5,study:15/5},
    1: {level:1, name: 'Excel Online Course',cost:50/5,study:10/5},
    2: {level:2, name: 'Coding Bootcamp',cost:15000/5,study:25/5},
    3: {level:3, name: "Bachelor's Degree in Computer Science",cost:100000/5,study:25/5},
    4: {level:3,name:"MBA", cost:150000/5, study:25/5}
  },

  exerciseLibrary: {
    0: {level: 0, name: 'Walking to the Park', health: 1, happiness: 1, cost: 0, social: 0, img:'park',frame:6},
    1: {level: 1, name: 'Free Beginner Yoga Videos', health: 2, happiness: 2, cost: 5, social: 0}, // add photo
    2: {level: 2, name: 'Free Basic Strength Training Videos', health: 3, happiness: 3, cost: 0, social: 0},
    3: {level: 3, name: '5K Running Plan App', health: 5, happiness: 5, cost: 5, social: 0}, // add photo
    4: {level: 4, name: 'Intermediate Yoga Video Subscription', health: 5, happiness: 5, cost: 0, social: 0},
    5: {level: 5, name: 'Intermediate Strength Training Video Subscription', health: 5, happiness: 5, cost: 0, social: 0},
    6: {level: 6, name: '10k Running Plan App', health: 5, happiness: 5, cost: 0, social: 0},
    7: {level: 7, name: 'Advanced Yoga Class Subscription', health: 5, happiness: 5, cost: 0, social: 0},
    8: {level: 8, name: 'Advanced Strength Training Video Subscription', health: 5, happiness: 5, cost: 0, social: 0}, // add photo
    9: {level: 9, name: 'Half Marathon Running Plan App', health: 5, happiness: 5, cost: 0, social: 0},
    10: {level: 10, name: 'Aerial Silks Yoga', health: 5, happiness: 5, cost: 0, social: 0}, // add photo
    11: {level: 11, name: 'High Intensity Interval Training', health: 5, happiness: 5, cost: 0, social: 0},
    12: {level: 12, name: 'Marathon Running Plan App', health: 5, happiness: 5, cost: 0, social: 0} // add photo
  },

  socialLibrary: {
    0: {level: 0, social: 2, happiness:10, cost:0, health:0, name: 'Feeling overwhelmed, Alita called her mom, Lily, for advice. Her mom was supportive and encouraging.'}, // if buildout text screen - show mom texting her braver than you believe quote image
    1: {level: 1, social: 8, happiness:5, cost: 10, health:1, img:'bocce',frame:2, name: 'Alita ventured out to a social bocce ball meetup. It was pretty fun.'},
    2: {level: 2, social: 2, happiness:-5, cost: 0, health:0, name: 'Alita chatted on a dating app. Meh.'},
    3: {level: 3, social: 50, happiness:50, cost: -25, health:0, img:'murderMystery',frame:4, name: 'Alita went to a murder mystery game meetup. It was so much fun! She made a new friend: Savannah. Alita and Savannah teamed up and guessed the murderer first. They each won $75.'}, //add photo to wall
    4: {level: 4, social: 5, happiness:10, cost:10, health:8,img:'yoga1',frame:7, name: 'Alita went to a yoga class with Savannah. They got to know each other better, and realized how much they have in common.'},
    5: {level: 5, social: 50, happiness:0, cost:200, health: -40, img:'party',frame:3, name: "Alita went to a party with Savannah. They stayed out very late. Alita is now too tired and hungover to do anything. Take it easy today."},
    6: {level: 6, social: 25, happiness:30, cost:0, health:0, img:'falco',frame:5, name: 'Alita made a new friend at work: Falco. They both love coding.'},
    7: {level: 7, social: 25, happiness:50, cost:300, health:10,img:'dog',frame:8, name: 'Alita adopted a dog: Charlie!'}, // add photo
    8: {level: 8, social: 10, happiness:10, cost:0, health:0, name: 'Alita and Falco went to a coding meetup group together.'},
    9: {level: 9, social: 15, happiness:15, cost:0, health:20, name: 'Alita took Charlie to the dog park.'},
    10: {level: 10, social: 25, happiness:20, cost:0, health:0, name: 'Savannah introduced Alita to a new friend: Sherlock.'},
    11: {level: 11, social: 20, happiness:30, cost:50, health:0, name: 'Alita and Falco entered a coding competition as a team.'}, // add photo
    12: {level: 12, social: 50, happiness:50, cost:0, health:0, name: 'Alita and Sherlock started dating.'}, // add photo
    13: {level: 13, social: 15, happiness:20, cost:50, health:0, name: 'Alita and Sherlock went to the movies.'},
    14: {level: 14, social: 45, happiness:30, cost:200, health:0, name: 'Alita and Sherlock went on a romantic dinner date.'}, // add photo
    15: {level: 15, social: 20, happiness:15, cost:40, health:0, name: 'Alita and Sherlock hangout at a brewery with live music.'},
    16: {level: 16, social: 100, happiness:100, cost:0, health:0, name: 'Sherlock proposed to Alita after hiking to a waterfall! Awww'}, // add photo
    17: {level: 17, social: 100, happiness:100, cost:20000, health:0, img:'wedding',frame:2, name: 'Alita and Sherlock got married.'}, // add photo
    18: {level: 18, social: 100, happiness:100, cost:10000, health:0, name: 'Alita and Sherlock went on a honeymoon to Italy.'}, // add photo
    19: {level: 19, social: 50, happiness:100, cost:500, health:-50, name: 'Alita and Sherlock had a baby: Lily.'}, // add photo
    20: {level: 20, social: 10, happiness:15, cost:0, health:10, name: 'Alita and Sherlock took Lily and Charlie to the park.'}
  },

  relaxation: {

  },
  memoryWall: {
    updateMemoryWall: (event,frameNum) => {
      $(`#frame${frameNum}`).attr('src',game.memoryWall[event])
    },
    park: 'https://i.imgur.com/pzZcnWS.png',
    bocce: 'https://i.imgur.com/Mjh43LD.png',
    murderMystery: 'https://i.imgur.com/P6zZ5OS.png',
    coffeeShop: 'https://i.imgur.com/y5Lys00.png',
    yoga1: 'https://i.imgur.com/9AYCIeJ.jpg',
    party: 'https://i.imgur.com/W079Z9a.jpg',
    falco: 'https://i.imgur.com/VQrfCNf.jpg',
    dog: 'https://i.imgur.com/OmEs0al.jpg',
    wedding: 'https://i.imgur.com/qTBJnUw.png',


  }

}


//JQUERY SETUP
$(() => {
  game.phone.updateMeters()
  $('#workButton').on('click',game.phone.work)
  $('#shopButton').on('click',game.phone.shop)
  $('#studyButton').on('click',game.phone.study)
  $('#fitButton').on('click',game.phone.exercise)
  $('#socialButton').on('click',game.phone.socialize)
  $('#relaxButton').on('click',game.phone.relax)

  game.avatar.getJob('barista')
  game.avatar.getExerciseLevel(0)
  game.avatar.getSocialLevel(0)
  game.avatar.getStudyLevel(0)
  game.avatar.updateImg()
  game.avatar.walkIn()





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
