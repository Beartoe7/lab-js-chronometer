class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(()=>{if(printTimeCallback){printTimeCallback ();}
    this.currentTime ++;}, 1000);
   }

  getMinutes() {
    return Math.floor((this.currentTime)/60);

  }

  getSeconds() {

  return Math.floor((this.currentTime)%60); // entire seconds passed
}

  computeTwoDigitNumber(value) {
    if(value < 10){
      return '0' + value;
      }
    else{return `${value}`; 
  }
  }
  stop() {
return clearInterval(this.intervalId, 0);  }

  reset() {
    return this.currentTime = 0;
  }

  split() {
    let mins = this.computeTwoDigitNumber(this.getMinutes());
    let secs = this.computeTwoDigitNumber (this.getSeconds());
    return `${mins}:${secs}`;
  }
}
