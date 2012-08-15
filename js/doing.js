
function Activity(name, notes, duration){
  this.name     = Ivy.attr(name     || '');
  this.notes    = Ivy.attr(notes    || '');
  this.duration = Ivy.attr(duration || 0 );
}