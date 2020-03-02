class ColorHistoryObserver {
  constructor() {
    this.colorHistory = [];
  }

  //Update method for this Observer
  update(subject) {
    this.colorHistory.unshift(subject.color);

    let msg = 'History :';
    for (let i = 0; i < 3; i++) {
      if (!this.colorHistory[i]) continue;
      msg += '\n ' + this.colorHistory[i] ;
    }

    console.log(msg);
  }
}