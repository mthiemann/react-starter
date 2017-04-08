/**
 * A Countdown component that passes its state in seconds to all of its children
 * Callback that is called every second
 */
class Countdown {

  constructor(seconds) {
    this.seconds = seconds;
  }

  start(callEverySecond, callWhenFinished) {
    this.callEverySecond = callEverySecond;
    this.callWhenFinished = callWhenFinished;

    this.countDown();
    this.timerID = setInterval(() => this.countDown(), 1000);
    return this;
  }

  stop() {
    clearInterval(this.timerID);
  }

  countDown() {
    this.callEverySecond(this.seconds);

    this.seconds -= 1;
    if (this.seconds === -1) {
      this.callWhenFinished();
      this.stop();
    }
  }
}

export default Countdown;
