class ColorLogObserver {
  constructor() { }

  //Update method for this Observer
  update(subject) {
    
    //Output based on subject current state
    console.log(
      `%c ${subject.counter}) ${subject.color.toUpperCase()}`,
      `color:${subject.color}`
    );
  }
}