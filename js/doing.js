window.onload = function(){
  var initialActivity = new Activity("Start Doing!", "Take notes here.");
  Ivy.bindDom(document.body, new DoingView(initialActivity));
};

function Activity(name, notes, duration){
  this.name     = Ivy.attr(name     || '');
  this.notes    = Ivy.attr(notes    || '');
  this.duration = Ivy.attr(duration || 0 );
  this.formattedDuration = Ivy.fnWith(this,function(duration){
    return new Duration(duration);
  });
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

function Duration(millis){
  this._millis = millis;
  
  this.hours   = Math.floor(millis / 3600000);
  millis  = millis % 3600000;
  
  this.minutes = Math.floor(millis / 60000);
  millis  = millis % 60000;
  
  this.seconds = Math.floor(millis / 1000);
}

Duration.prototype.toString = function(){
  var string = "", 
      h = this.hours, 
      m = this.minutes, 
      s = this.seconds;
      
  if (h){
    string += h + ":";
  }
  string += (m < 10 ? "0"+m : m) + ":";
  string += (s < 10 ? "0"+s : s);
  
  return string;
}