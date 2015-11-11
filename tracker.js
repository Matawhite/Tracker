//adding calendar UI
$( "#start" ).datepicker();

var totalCalories = []




$("#myForm").submit(function(event){
	event.preventDefault();

	var start = document.getElementById('start').value;
	var calories = document.getElementById('calories').value;
	var calories = parseInt(calories)
	var description = document.getElementById('description').value;

	var sumCalories = totalCalories.push(calories);

	var addemUp = totalCalories.reduce(function(prev, cur){
		return prev + cur;
	});

	

	$("#results").append('<li>' + start + ' ' + calories + ' ' + description + ' ' +  addemUp  + '</li>')

	

});