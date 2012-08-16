window.onload = function(){
  Ivy.bindDom(document.body, new DoingView);
};

function Activity(name, notes, duration){
  this.name     = Ivy.attr(name     || '');
  this.notes    = Ivy.attr(notes    || '');
  this.duration = Ivy.attr(duration || 0 );
}

function DoingView(){
  this.doingPanel = new CurrentActivityView;
  this.donePanel  = {}; // We will get to this next
}

function CurrentActivityView(){
  this.activity = new Activity("Start Doing!", "Take notes here.");
}