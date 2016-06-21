class Tone {
  constructor(num) {
    this.num = num;
  }

  get toneNum() {
  	return this.num;
  }

  set toneNum(number) {
  	this.num = number;
  }

  frequency() {
    return 440 * Math.pow(2, (this.toneNum / 12));
  }
}
