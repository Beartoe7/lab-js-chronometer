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
    },1000)
    // ... your code goes here
  }

  getMinutes() {
    return Math.floor(this.currentTime/60)
    // ... your code goes here
  }

  getSeconds() {
return this.currentTime % 60;
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
    return `${this.computeTwoDigitNumber(mins)}:${this.computeTwoDigitNumber(secs)}`
  }
}