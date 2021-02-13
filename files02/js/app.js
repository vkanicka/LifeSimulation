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


const game = {
  winGame:()=>{
      if (game.avatar.workLevel.name === 'Junior Software Developer') {
        if(!confirm(`Congrats you won the game! Would you like to keep on keeping on?`)) {game.resetGame()}
      } else if(game.phone.calendar.year>=8) {if(!confirm(`Sorry, you didn't reach Alita's goals in time. Would you like to keep playing anyway?`)) {game.resetGame()}
    }
  },
  resetGame:()=>{
    game.avatar.perf.wealth= 0
    game.avatar.perf.social= 0
    game.avatar.perf.health =  20
    game.avatar.perf.happiness =  6
    game.avatar.perf.study =  0
    game.avatar.xp.workXP =  0 
    game.avatar.xp.exerciseXP =  0
    game.avatar.xp.socialXP = 0
    game.avatar.xp.studyXP = 0
    game.avatar.updateImg('default')
    for (let action of game.avatar.actions) {
      game.avatar.assignLevel(action,0)
      $(`#${action}Button`).on('click',game.phone[action])
    }
    game.phone.clock.countdownHours  =  16
    game.phone.clock.hour =  7
    game.phone.clock.amPM =  'AM'
    $('#time').text(`${game.phone.clock.hour}:00 ${game.phone.clock.amPM}`)
    $('#day').text(`Day ${game.phone.calendar.day} Year ${game.phone.calendar.year}`)
    game.phone.clock.toggleButtonClass()
    game.phone.calendar.day =  1
    game.phone.calendar.dayyear =  1
    $('#time').text(`${game.phone.clock.hour}:00 ${game.phone.clock.amPM}`)
    game.avatar.walkIn()
    for (let buy of game.shopLibrary.shopImages) {
      $(`#${buy}`).hide()
    }
    $('#topPaint').attr('id','top')
    for (let i=0;i<10;i++) {$(`#frame${i}`).attr('src','https://i.imgur.com/BoHJ0Sk.png')}
  },
  avatar: {
      actions: ['work','study','exercise','social','shop'],
      perf: {
          wealth: 0,
          social: 0,
          health: 20,
          happiness: 6,
          study: 0
      },
      updatePerf: (action, ...metrics) => {
        for (let metric of metrics) {game.avatar.perf[metric]+=game.avatar[`${action}Level`][metric];}
      },
      xp: {
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
      },
      workLevel: 'unemployed',
      exerciseLevel: '',
      socialLevel: '',
      studyLevel: '',
      shopLevel:'', // or inventory object -- tbd
      relaxLevel:{happiness:5,health:1, time:1},
      sleepLevel:{happiness:-5, health:-1, social:-2},
      getPromotion: ()=>{
        if(game.avatar.workLevel.name !='CTO') {
          const nextJob = game.workLibrary[game.avatar.workLevel.level+1]
          if(game.avatar.xp.workXP >= nextJob.workXP && game.avatar.studyLevel.level > nextJob.preReq) {
            game.avatar.assignLevel('work',nextJob.level)
            game.avatar.updateImg('happy')
            if(typeof(game.avatar.workLevel.img)!='undefined') {game.memoryWall.updateMemoryWall(game.avatar.workLevel.img,game.avatar.workLevel.frame)}

            alert(`Congrats! Alita has been promoted to ${game.avatar.workLevel.name}!`)}
            game.winGame()
          }
      },
      assignLevel:(action,level)=>{
        game.avatar[`${action}Level`] = game[`${action}Library`][level]
        switch (action) {
          case 'work':
            $('#workNameDisplay').text(`Work: ${game.avatar.workLevel.name}`)
            $('#workPayDisplay').text(`Pay: $${Math.round(game.avatar.workLevel.wealth)}/day`)
            break;
        }
      },
      walkIn: () => {
        $thisAvatar = $('#avatar')
        $thisAvatar.css({'left':'400px','transition':'3s','steps':('3', 'jump-start')})},
  },
  phone: {
    clock: {
      countdownHours : 16,
      hour: 7,
      amPM: 'AM',
      incrementClock:(action) => {
        const hours = game.avatar[`${action}Level`].time
        game.phone.clock.countdownHours-=hours
        game.phone.clock.hour+=hours
        // 1. if clock stays within AM hours, do nothing
        // 2. if clock lands on exactly 12pm, just change AM to PM (do not -12)
        if(game.phone.clock.hour===12) {game.phone.clock.amPM = 'PM'}
        // 3. if clock lands past 12pm, subtract 12 from hours and change AM to PM
        else if (game.phone.clock.hour>12) {game.phone.clock.hour-=12;game.phone.clock.amPM='PM'}
        $('#time').text(`${game.phone.clock.hour}:00 ${game.phone.clock.amPM}`)
      },
      checkTime:(action)=>{
        if (game.phone.clock.countdownHours<game.avatar[`${action}Level`].time) {
          alert(`Not enough time!`);return false} else{return true}
      },
      toggleButtonClass:()=>{
        for (let action of game.avatar.actions) {
          if(game.avatar[`${action}Level`].time > game.phone.clock.countdownHours) {
          $(`#${action}Button`).prop('disabled',true)
        } else {$(`#${action}Button`).prop('disabled',false)}
        }
      }
    },
    calendar: {
      day: 1,
      year: 1,
      newDay: () => {
        game.phone.calendar.day +=1
        game.phone.clock.hour = 7
        game.phone.clock.amPM = 'AM'
        game.phone.calendar.year = Math.ceil(game.phone.calendar.day/5)
        game.phone.clock.countdownHours=16
        $('#day').text(`Day ${game.phone.calendar.day} Year ${game.phone.calendar.year}`)
        $('#time').text(`${game.phone.clock.hour}:00 ${game.phone.clock.amPM}`)
        game.avatar.updatePerf('sleep','health','happiness','social')
        game.phone.clock.toggleButtonClass()
        if (game.phone.calendar.year === 8) {setTimeout(game.winGame(),500)}
      },
    },
    updateMeters: () => {
      for (let perf of Object.keys(game.avatar.perf)) {
        $(`#${perf}Meter`).attr('value',game.avatar.perf[perf])}

      $('#bankAccountDisplay').text(`Bank Account: $${game.avatar.perf.wealth}`)
      $('#workXPDisplay').text(`WorkXP: ${game.avatar.xp.workXP}`)
    },
    checkRequirement: (action) => { // loop through each? or call each function
      // check if avatar perf stat meets avatar action level requirement
          const avatarWants = game.avatar[`${action}Level`]
          let activityName = avatarWants.name

          // check bank account
          if (game.avatar.perf['wealth'] < -avatarWants.wealth) {
            switch (action) {case 'social': activityName = 'this social activity'; break;}
            alert(`Alita does not have the $${-avatarWants.wealth} needed for ${activityName}.`)
            return false
          } else {return true}

          // social
          // health
          // happiness
          // study
          // time

    },
    work: ()=>{
      if(game.avatar.perf.happiness<=5) {alert(`Alita is too depressed to work.`)}
      else if (game.avatar.perf.health <=5) {alert(`Alita isn't feeling physically well enough to work.`)}
      else if (game.phone.clock.checkTime('work')) {
        game.avatar.updatePerf('work','wealth','happiness','health')
        game.avatar.xp.workXP+=1
        game.phone.clock.incrementClock('work')
        game.phone.updateMeters()
        game.avatar.updateImg()
        setTimeout(function(){game.avatar.getPromotion()},100)
        if(game.phone.clock.countdownHours<=0){game.phone.calendar.newDay()} else {game.phone.clock.toggleButtonClass()}
      }
    },
    shop: ()=>{
      if (game.phone.checkRequirement('shop') && game.phone.clock.checkTime('shop')) {
        p(`Alita bought a ${game.avatar.shopLevel.name}.`)
        $(`#${game.avatar.shopLevel.name}`).show()
        switch (game.avatar.shopLevel.name) {
          case 'bed': $('#mattress').hide(); break;
          case 'bicycle': $('#shoes').hide(); break;
          case 'dresser': $('#suitcase').hide(); break;
          case 'wallPaint': $('#top').attr('id','topPaint')
        }
        game.avatar.updatePerf('shop','wealth','happiness')
        game.avatar.xp.shopXP+=1
        game.phone.clock.incrementClock('shop')
        game.phone.updateMeters()
        game.avatar.updateImg()
        game.phone.clock.toggleButtonClass()
        if(game.avatar.shopLevel.level != 7) {game.avatar.shopLevel=game.shopLibrary[game.avatar.shopLevel.level+1]}
        if(game.phone.clock.countdownHours<=0){game.phone.calendar.newDay()} else {game.phone.clock.toggleButtonClass()}
      }


    },
    study: ()=>{
      if (game.phone.checkRequirement('study') && game.phone.clock.checkTime('study')) {
        if (game.avatar.perf.happiness < 0|| game.avatar.perf.social < 0|| game.avatar.perf.health < 0) {
          alert(`Alita can't concentrate on study anything right now. Try to help her feel better.`)
        } else {
            game.avatar.updatePerf('study','study','wealth')
            p(`Alita attended one session of a ${game.avatar.studyLevel.name}.`)
            game.avatar.xp.studyXP+=1
            game.phone.clock.incrementClock('study')
            game.phone.updateMeters()
            game.avatar.updateImg()
            if(game.avatar.xp.studyXP%5===0 && game.avatar.studyLevel.name != 'MBA') {
              p(`Alita completed a ${game.avatar.studyLevel.name}!`)
              if(typeof(game.avatar.studyLevel.img)!='undefined') {game.memoryWall.updateMemoryWall(game.avatar.studyLevel.img,game.avatar.studyLevel.frame)}
              game.avatar.studyLevel=game.studyLibrary[game.avatar.studyLevel.level+1]
            }
            if(game.phone.clock.countdownHours<=0){game.phone.calendar.newDay()} else {game.phone.clock.toggleButtonClass()}
        }
      }
    },
    exercise: ()=>{
      if (game.phone.checkRequirement('exercise') && game.phone.clock.checkTime('exercise')) {
      if(game.avatar.perf.social <=0) {alert(`Alita is lonely. She can't motivate herself to exercise.`)}
      else if (game.avatar.perf.health <=5) {alert(`Alita is not feeling physically well enough to exercise right now.`)}
      else {
        game.avatar.updatePerf('exercise','health','wealth','happiness')
        game.avatar.xp.exerciseXP+=1
        game.phone.clock.incrementClock('exercise')
        game.phone.updateMeters()
        game.avatar.updateImg()

        if(game.avatar.xp.exerciseXP%8===0) {
          p(`Alita mastered ${game.avatar.exerciseLevel.name}!`)
          if(typeof(game.avatar.exerciseLevel.img)!='undefined') {game.memoryWall.updateMemoryWall(game.avatar.exerciseLevel.img,game.avatar.exerciseLevel.frame)}
          game.avatar.exerciseLevel=game.exerciseLibrary[game.avatar.exerciseLevel.level+1]
        }
        if(game.phone.clock.countdownHours<=0){game.phone.calendar.newDay()} else {game.phone.clock.toggleButtonClass()}
      }
    }
    },
    social: ()=>{ // breaking verb rule here for consistency reasons
      if (game.phone.checkRequirement('social') && game.phone.clock.checkTime('social')) {
        if(game.avatar.perf.health<=5) {alert(`Alita is not feeling phsyically well enough to social.`)}
        else {
          p(game.avatar.socialLevel.name)
          game.avatar.updatePerf('social','social','happiness','wealth','health')
          game.avatar.xp.socialXP+=1
          game.phone.clock.incrementClock('social')
          game.phone.updateMeters()
          if(typeof(game.avatar.socialLevel.img)!='undefined') {game.memoryWall.updateMemoryWall(game.avatar.socialLevel.img,game.avatar.socialLevel.frame)}
          if(game.avatar.socialLevel.level != 30) {game.avatar.socialLevel=game.socialLibrary[game.avatar.socialLevel.level+1]}
          game.avatar.updateImg()
          if(game.phone.clock.countdownHours<=0){game.phone.calendar.newDay()} else {game.phone.clock.toggleButtonClass()}
        }
      }
    },
    relax: ()=>{
      if(game.phone.clock.checkTime('relax')) {
        game.avatar.updatePerf('relax','health','happiness')
        game.phone.updateMeters()
        game.avatar.updateImg('relaxed')
        if(game.phone.clock.countdownHours<=1){game.phone.calendar.newDay()} else {game.phone.clock.incrementClock('relax'); game.phone.clock.toggleButtonClass()}
      }
    }
  },
  workLibrary: {
    0: {level: 0,name: 'Coffee Barista',wealth: 400/5,happiness: -5, health:-1, time: 8,workXP: 0,preReq: -1},
    1: {level: 1, name: 'Coffee Shop Manager', wealth: 610/5, health:-1, happiness: -8, time: 8, workXP: 5, preReq: 0, img: 'coffeeShop', frame:1},
    2: {level: 2, name: 'Junior Analyst', wealth: 800/5, health:-1, happiness: -3, time: 8, workXP: 10, preReq: -1},
    3: {level: 3, name: 'Senior Analyst', wealth: 1000/5, health:-1, happiness: -5, time: 8, workXP: 15, preReq: 1},
    4: {level: 4, name: 'Junior Software Developer', wealth: 1250/5, health:-1, happiness: -5, time: 8, workXP: 20, preReq: 2},
    5: {level: 5, name: 'Mid Level Software Developer', wealth: 1700/5, health:-1, happiness: -4, time: 8, workXP: 25, preReq: -1},
    6: {level: 6, name: 'Senior Software Developer', wealth: 2300/5, health:-1, happiness: -3, time: 8, workXP: 30, preReq: 3},
    7: {level: 7, name: 'CTO', wealth: 10500/5, health:-1, happiness: -10, time: 8, workXP: 35, preReq:4}
  },
  shopLibrary : {
    shopImages: [
    'plant',
  	'rug',
  	'dresser',
  	'wallPaint',
  	'bicycle',
  	'bed',
  	'laptop',
    'car'],
    0: {level:0, name:'plant',wealth: -25,happiness:10, time:1},
    1: {level:1, name:'rug',wealth: -100,happiness:10, time:1},
    2: {level:2, name:'dresser',wealth: -200,happiness:10, time:1},
    3: {level:3, name:'wallPaint',wealth: -300,happiness:10, time:1},//**
    4: {level:4, name:'bicycle',wealth: -500,happiness:10, time:1},
    5: {level:5, name:'bed',wealth: -1000,happiness:10, time:1},
    6: {level:6, name:'laptop',wealth: -1200,happiness:50, time:1},
    7: {level:7, name:'car',wealth:-13000,happiness:50, time:1}
  },
  studyLibrary: {
    0: {level:0, name: 'Business Management Online Course', time: 2, wealth: -400/5,study:15/5},
    1: {level:1, name: 'Excel Online Course', time: 1,wealth: -50/5,study:10/5},
    2: {level:2, name: 'Coding Bootcamp', time: 4,wealth: -5000/5,study:25/5},
    3: {level:3, name: "Bachelor's Degree in Computer Science", time: 4,wealth: -10000/5,study:25/5},
    4: {level:4, name: "MBA", time: 4, wealth: -20000/5, study:25/5}
  },
  exerciseLibrary: {
    0: {level: 0, name: 'Walking to the Park', health: 1, time:1, happiness: 1, wealth: -0, social: 0, img:'park',frame:6},
    1: {level: 1, name: 'Free Beginner Yoga Videos', health: 2, time:1, happiness: 2, wealth: -0, social: 0}, // add photo
    2: {level: 2, name: 'Free Basic Strength Training Videos', health: 3, time:1, happiness: 3, wealth: -0, social: 0},
    3: {level: 3, name: '5K Running Plan App', health: 5, time:1, happiness: 5, wealth: -1, social: 0}, // add photo
    4: {level: 4, name: 'Intermediate Yoga Video Subscription', health: 5, time:1, happiness: 2, wealth: -5, social: 0},
    5: {level: 5, name: 'Intermediate Strength Training Video Subscription', health: 5, time:1, happiness: 5, wealth: -0, social: 0},
    6: {level: 6, name: '10k Running Plan App', health: 5, time:1, happiness: 5, wealth: -5, social: 0},
    7: {level: 7, name: 'Advanced Yoga Class Subscription', health: 5, time:1, happiness: 5, wealth: -10, social: 0},
    8: {level: 8, name: 'Advanced Strength Training Video Subscription', health: 5, time:1, happiness: 5, wealth: -10, social: 0}, // add photo
    9: {level: 9, name: 'Half Marathon Running Plan App', health: 5, time:1, happiness: 5, wealth: -10, social: 0},
    10: {level: 10, name: 'Aerial Silks Yoga', health: 5, time:1, happiness: 5, wealth: -25, social: 0}, // add photo
    11: {level: 11, name: 'High Intensity Interval Training', health: 5, time:1, happiness: 5, wealth: -20, social: 0},
    12: {level: 12, name: 'Marathon Running Plan App', health: 5, time:1, happiness: 5, wealth: -25, social: 0} // add photo
  },
  socialLibrary: {
    0: {level: 0, social: 2, time:1, happiness:5, wealth: -0, health:0, name: 'Alita called her mom.'},
    1: {level: 1, social: 8, time:3, happiness:5, wealth: -10, health:1, img:'bocce',frame:2, name: 'Alita ventured out to a social bocce ball meetup. It was pretty fun.'},
    2: {level: 2, social: 2, time:1, happiness:-5, wealth: -0, health:0, name: 'Alita chatted on a dating app. Meh.'},
    3: {level: 3, social: 50, time:4, happiness:20, wealth: 25, health:0, img:'murderMystery',frame:4, name: 'Alita went to a murder mystery game meetup. It was so much fun! She made a new friend: Savannah.'},
    4: {level: 4, social: 5, time:2, happiness:10, wealth: -10, health:8,img:'yoga1',frame:7, name: 'Alita went to a yoga class with Savannah.'},
    5: {level: 5, social: 50, time: 5, happiness:0, wealth: -200, health: -8, img:'party',frame:3, name: "Alita went to a party with Savannah. They stayed out very late. Alita may be tired. Take it easy today."},
    6: {level: 6, social: 25, time:1, happiness:10, wealth: -0, health:0, img:'falco',frame:5, name: 'Alita made a new friend at work: Falco. They both love coding.'},
    7: {level: 7, social: 25, time:2, happiness:50, wealth: -300, health:10,img:'dog',frame:8, name: 'Alita adopted a dog: Charlie!'},
    8: {level: 8, social: 10, time:3, happiness:5, wealth: -0, health:0, name: 'Alita and Falco went to a coding meetup group together.'},
    9: {level: 9, social: 15, time:1, happiness:10, wealth: -0, health:20, name: 'Alita took Charlie to the dog park.'},
    10: {level: 10, social: 25, time:2, happiness:20, wealth: -0, health:0, name: 'Savannah introduced Alita to a new friend: Sherlock.'},
    11: {level: 11, social: 20, time:7, happiness:25, wealth: -50, health:0, name: 'Alita and Falco entered a coding competition as a team.'}, // add photo
    12: {level: 12, social: 50, time:3, happiness:30, wealth: -0, health:0, name: 'Alita and Sherlock started dating.'}, // add photo
    13: {level: 13, social: 15, time:3, happiness:10, wealth: -50, health:0, name: 'Alita and Sherlock went to the movies.'},
    14: {level: 14, social: 45, time:3, happiness:25, wealth: -200, health:0, name: 'Alita and Sherlock went on a romantic dinner date.'}, // add photo
    15: {level: 15, social: 20, time:2, happiness:10, wealth: -40, health:0, name: 'Alita and Sherlock hangout at a brewery with live music.'},
    16: {level: 16, social: 100, time:3, happiness:50, wealth: -0, health:0, name: 'Sherlock proposed to Alita! Awww'}, // add photo
    17: {level: 17, social: 100, time:8, happiness:50, wealth: -20000, health:0, img:'wedding',frame:2, name: 'Alita and Sherlock got married at a waterfall.'}, // add photo
    18: {level: 18, social: 100, time:12, happiness:50, wealth: -10000, health:0, name: 'Alita and Sherlock went on a honeymoon to Italy.'}, // add photo
    19: {level: 19, social: 50, time:12, happiness:50, wealth: -500, health:-10, name: 'Alita and Sherlock had a baby: Lily.'}, // add photo
    20: {level: 20, social: 15, time:2, happiness:5, wealth: -0, health:0, name: 'Alita spent time with her family.'},
    21: {level: 21, social: 15, time:3, happiness:10, wealth: -0, health:0, name: 'Alita and Sherlock got a babysitter and went on a date.'},
    22: {level: 22, social: 15, time:2, happiness:10, wealth: -0, health:0, name: 'Alita met up with her friends for brunch.'},
    23: {level: 23, social: 15, time:2, happiness:5, wealth: -0, health:0, name: 'Alita took Lily on a playdate and met other parents.'},
    24: {level: 24, social: 15, time:3, happiness:10, wealth: -0, health:0, name: 'Alita went to a coding meetup.'},
    25: {level: 25, social: 15, time:3, happiness:10, wealth: -0, health:0, name: 'Alita went to an entreprenurial meetup.'},
    26: {level: 26, social: 15, time:2, happiness:10, wealth: -0, health:0, name: 'Alita taught Lily new skills.'},
    27: {level: 27, social: 15, time:2, happiness:15, wealth: -0, health:0, name: 'Sherlock cooked a family dinner for Alita and Lily.'},
    28: {level: 28, social: 15, time:4, happiness:15, wealth: -0, health:0, name: 'Alita spent time with her family.'},
    29: {level: 29, social: 15, time:4, happiness:5, wealth: -0, health:0, name: 'Alita and Sherlock watched True Crime documentaries together.'},
    30: {level: 30, social: 15, time:4, happiness:20, wealth: -0, health:0, name: 'Alita and Sherlock invited friends over. They hungout in the backyard with a fire pit and twinkly lights.'},
  },
  relaxLibarary: {},
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

  for (let action of game.avatar.actions) {
    game.avatar.assignLevel(action,0)
    $(`#${action}Button`).on('click',game.phone[action])
  }
  $(`#relaxButton`).on('click',game.phone['relax'])
  game.avatar.updateImg()
  game.avatar.walkIn()

  for (let buy of game.shopLibrary.shopImages) {
    $(`#${buy}`).hide()
  }

  //Grabbing Elements
const $howToPlayButton = $('#howToPlayButton')
const $modal = $('#howToModal')
const $closeBtn = $('#close')
//Event Handlers
const openModal = () => {
  $modal.css('display', 'block')
}
const closeModal = () => {
  $modal.css('display', 'none')
}

//Event Listeners
$howToPlayButton.on('click', openModal)
$closeBtn.on('click', closeModal)

$('#resetGameButton').on('click', game.resetGame)

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
