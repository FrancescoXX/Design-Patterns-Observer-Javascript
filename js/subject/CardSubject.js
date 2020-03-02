const COLORS = ['purple', 'black', 'red', 'blue', 'green'];

/** CardSubject : Subject Concrete implementation
 * 
 *  subscribe: attach an Observer
 *  unsubscribe: detach an Observer
 *  notify: notify to all observers
 * 
 *  OnNext: Listener attached to the html button element
 * */
class CardSubject {
  constructor() {
    this.observers = [];
    this.counter = 0; // start counting from 0
    this.color = "purple"; // default color
  }

  //SUBSCRIBE
  subscribe(o) {
    this.observers.push(o);
  }

  //UNSUBSCRIBE
  unSubscribe(obsToRemove) {
    this.observers = this.observers.filter(obs => {
      if (obs != obsToRemove) {
        return obs
      }
    });
    console.warn("unsubscribed: ", obsToRemove);
  }

  //NOTIFY
  notify() {
    for (const o of this.observers) {
      o.update(this);
    }
  }

  //Implementation of the logic for state change on this subject
  setState() {
    this.counter++;
    this.color = COLORS[Math.floor(Math.random() * COLORS.length)]
  }

  OnNext() {
    this.setState(); // Set new State for this subjet
    this.notify(); // Notify changes to all observables subscribed
  }
}