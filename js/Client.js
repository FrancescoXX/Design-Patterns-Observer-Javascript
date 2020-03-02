//New concrete Subject instance
const subject = new CardSubject();

//New concrete Observers
const obs1 = new ColorLogObserver();
const obs2 = new HtmlObserver('HtmlObserver1')
const obs3 = new ColorHistoryObserver();

//Attach Observers
subject.subscribe(obs1);
subject.subscribe(obs2);
subject.subscribe(obs3);

OnDetachHistory = () => {
  subject.unSubscribe(obs3);
}

// Notify
subject.notify();