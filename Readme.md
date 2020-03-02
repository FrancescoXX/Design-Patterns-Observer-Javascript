# Observer Pattern 
### Subscribe to object changes
___


## Problem

When data changes, we want the UI to reflect the new state

___

### Intent
 - Define a one-to-many dependency between objects
 - When one object changes state, all its dependents are notified and updated automatically. 

### Applicability
 - Use : Change one object -> change others
 - No idea how many objects need to be changed
 - Object change notification, with preserving loose coupling
 - One object may notify another without knowing them directly

### Benefits
 - Loose coupling between observers and subjects
 - Supporting a broadcast model

### Drawbacks
  - One change can result in multiple unnecessary notifications
  - Clients don't know the ripple effects

### Conclusion: Observer pattern is great to
 - Preserve loose coupling
 - Observe state in other objects, then notify when state changes# Design-Patterns-Observer-Javascript
