// const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss');
// const fetchCoordsByIP = require('./iss.js');
const nextISSTimesForMyLocation = require('./iss');
// const fetchMyIP = require('./iss');

// let ip = '149.248.83.35';

/* fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
}); */

/* fetchCoordsByIP('149.248.83.35', (error, data)=>{
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned Data:' , data);
  });
  
  fetchISSFlyOverTimes({ latitude: '49.27670', longitude: '-123.13000'}, (error, data) => {
    if (error) {
      console.log("It didn't work!", error);
      return;
    }
    console.log("It worked! Returned Data:", data);
   }); */
 
const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  for (let passTime of passTimes) {
    const datetime = newDate(0);
    datetime.setUTCSeconds(passTime.risetime);
    const duration = passTime.duration;
    console.log('Next pass at ${datatime} for ${duration} seconds!');
  }
});

