$(function(){
	var waypoints = [[100,100], [400,400]];
	
	$("#area").waypoints({
        item: '#item'
		,waypoints: waypoints
    });
});