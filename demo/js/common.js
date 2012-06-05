$(function(){
	var waypoints_square = [[100,100], [400,100], [400,400], [100,400]];
	var waypoints_line = [[100,100], [400,400]];
	var waypoints_line_2 = [[400,100], [100,400]];
	var waypoints_circle = [[450,250],[443,301],[423,350],[391,391],[350,423],[301,443],[250,450],[198,443],[150,423],[108,391],[76,350],[56,301],[50,249],[56,198],[76,149],[108,108],[150,76],[198,56],[249,50],[301,56],[349,76],[391,108],[423,149],[443,198]];
    
	// example 1
	/*$("#area").waypoints({
        item: '#item1'
		,waypoints: waypoints1
    });	
	
	// example 1
	$("#area").waypoints({
        item: '#item1'
		,waypoints: waypoints1
		,mass: 1.0
		,speedLimit: 5
		,loop: 1
		,pathThreshold: 50
		,arrivalThreshold: 50
		,position: [250, 250]
		,maxForce: 0.4
    });*/
	
	// example 1
	$("#area").waypoints({
		mass: 1.0
		,speedLimit: 5
		,loop: 1
		,pathThreshold: 50
		,arrivalThreshold: 50
		,position: [250, 250]
		,maxForce: 0.4
        ,items: [
			//[item, waypoints, loop, speedLimit, maxForce, waypoint, mass, pathThreshold, arrivalThreshold, position, angle]
			['#item1', waypoints_square, 1, 2, 0.5, 0, 1.0, 10, 10, [400, 400], 45]
			,['#item2', waypoints_square]
			,['#item3', waypoints_line]
			,['#item4', waypoints_line_2]
			,['#item5', waypoints_circle, 1, 8]
		]
    });
	
	// example 2
	$("#area-line").waypoints({
        item: '#item-line'
		,waypoints: waypoints_line
    });	
	
	// example 3
	$("#area-square").waypoints({
        item: '#item-square'
		,waypoints: waypoints_square
    });
	
	// example 4
	$("#area-circle").waypoints({
        item: '#item-circle'
		,waypoints: waypoints_circle
    });	
});