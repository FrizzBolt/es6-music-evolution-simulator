export class Tone {
  constructor(num) {
    this.num = num;
  }

  get num() {
    return this.num;
  }

  frequency() {
    440 * Math.pow(2, (this.num / 12));
  }
}
