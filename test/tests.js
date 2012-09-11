describe('Doing', function(){
  describe('formatting durations', function(){		
    // Helper for testing, returns a duration in milliseconds:
    function inMilliseconds(hours, minutes, seconds){
      return (hours * 3600  + minutes * 60 + seconds) * 1000;
    }
    
    it('returns a String', function(){
      var ms     = inMilliseconds(0,0,35);
      var string = new Duration(ms).toString();
      
      assert.typeOf(string, 'string');
    });
		
    it('formats an empty duration', function(){
      var ms     = inMilliseconds(0,0,0);
			var string = new Duration(ms).toString();
      
      assert.equal(string, '00:00');
    });
    
    it('formats a very small value', function(){
      var ms     = inMilliseconds(0,0,12);
			var string = new Duration(ms).toString();
      
      assert.equal(string, '00:12');
    });
    
    it('formats an extremely large value', function(){
			var ms     = inMilliseconds(129,59,59);
      var string = new Duration(ms).toString();
      
      assert.equal(string, '129:59:59');
    });
    
    it('formats a two digit hour', function(){
      var ms     = inMilliseconds(11,32,15)
      var string = new Duration(ms).toString();
      
      assert.equal(string, '11:32:15');
    });
    
    it('formats a one digit hour', function(){
			var ms     = inMilliseconds(1,23,45);
      var string = new Duration(ms).toString();

      assert.equal(string, '1:23:45');
    });
    
  });
});