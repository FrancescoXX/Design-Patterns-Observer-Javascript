class HtmlObserver {
  constructor(elementId) {
    this.element = document.getElementById(elementId);
  }

  //Update method for this Observer
  update(subject) {
    
    //Set the state for this observer
    this.element.style.backgroundColor = subject.color; //set the background color 
    this.element.innerHTML = subject.counter; //inject the number into the html element
  }
}