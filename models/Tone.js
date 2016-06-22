export class Tone {
  constructor(num) {
    this.num = num;
  }

  get Num() {
  	return this.num;
  }

  set Num(number) {
  	this.num = number;
  }

  frequency() {
    return 440 * Math.pow(2, (this.Num / 12));
  }
}
