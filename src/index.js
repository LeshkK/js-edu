/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {      
      var masterJS = 800;
      var basicProgramming = 500; 
      var time;

      if(knowsProgramming) {
        time = masterJS;
      } else time = masterJS + basicProgramming; 
      result = Math.ceil(time / config[focus]);

      return result;
  };
  