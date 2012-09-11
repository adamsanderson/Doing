describe('Doing', function(){
  describe('formatting durations', function(){
		var format = Format.duration;
		
    // Helper for testing, returns a duration in milliseconds:
    function makeDuration(hours, minutes, seconds){
      return (hours * 3600  + minutes * 60 + seconds) * 1000;
    }
    
    it('returns a String', function(){
      var duration = makeDuration(0,0,35);
			var string   = format(duration);
      
      assert.typeOf(string, 'string');
    });
		
    it('formats an empty duration', function(){
			var string = format(makeDuration(0,0,0));
      assert.equal(string, '00:00');
    });
    
    it('formats a very small value', function(){
			var string = format(makeDuration(0,0,12));
      assert.equal(string, '00:12');
    });
    
    it('formats an extremely large value', function(){
			var string = format(makeDuration(129,59,59));
      assert.equal(string, '129:59:59');
    });
    
    it('formats a two digit hour', function(){
			var string = format(makeDuration(11,32,15));
      assert.equal(string, '11:32:15');
    });
    
    it('formats a one digit hour', function(){
			var string = format(makeDuration(1,23,45));
      assert.equal(string, '1:23:45');
    });
    
  });
});