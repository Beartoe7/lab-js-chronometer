class Chronometer {
  constructor() {
    // ... your code goes here
  this.currentTime = 0;
  this.intervalId = null;
  }
  start(printTimeCallback) {
    this.intervalId= setInterval(()=> {
     this.currentTime += 1;
     if(printTimeCallback)
     printTimeCallback();
   },10)
   // ... your code goes here
 }

 getMinutes() {
  return Math.floor(this.currentTime/6000)
  // ... your code goes here
}

getSeconds() {
  return Math.floor( (this.currentTime % 6000)/100)
    }

  getCentiseconds() {
    // ... your code goes here
    return Math.floor( (this.currentTime % 6000)%100)
  }

  computeTwoDigitNumber(value) {
    if(value > 9) return value.toString();
    else return `0${value}`
  }

  stop() {
    clearInterval(this.intervalId)
      }

      reset() {
        this.currentTime = 0;
        // ... your code goes here
      }
      split() {
        let mins = this.getMinutes();    // ... your code goes here
        let secs = this.getSeconds();
        let centiSecs = this.getCentiseconds();
        return `${this.computeTwoDigitNumber(mins)}:${this.computeTwoDigitNumber(secs)}.${this.computeTwoDigitNumber(centiSecs)}`
      }
}
