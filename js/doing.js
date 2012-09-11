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

DoingView.prototype.start = function(activity){
  var current = this.currentActivity.get();
  
  // set a random duration for now between 0s and 5h
  var seconds = Math.random() * 5 * 60 * 60 * 1000;
  current.duration.set(seconds);
  
  this.doneActivities.push(current);
  this.currentActivity.set(new Activity());
};

Format = {};
Format.duration = function(millis){
  var hours, minutes, seconds;
  
  hours   = Math.floor(millis / 3600000);
  millis  = millis % 3600000;
  
  minutes = Math.floor(millis / 60000);
  millis  = millis % 60000;
  
  seconds = Math.floor(millis / 1000);
  
  var string = "";
  if (hours > 0){
    string += hours + ":";
  }
  string += (minutes < 10 ? "0"+minutes : minutes) + ":";
  string += (seconds < 10 ? "0"+seconds : ""+seconds);
  
  return string;
};
