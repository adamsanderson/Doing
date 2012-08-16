window.onload = function(){
  var initialActivity = new Activity("Start Doing!", "Take notes here.");
  Ivy.bindDom(document.body, new DoingView(initialActivity));
};

function Activity(name, notes, duration){
  this.name     = Ivy.attr(name     || '');
  this.notes    = Ivy.attr(notes    || '');
  this.duration = Ivy.attr(duration || 0 );
}

function DoingView(currentActivity){
  this.currentActivity = Ivy.attr(currentActivity);
  this.doneActivities  = Ivy.array();
}