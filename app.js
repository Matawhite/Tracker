$("#start").datepicker();


// Uncomment when wanting to use in production
var userID = localStorage.getItem('ID')
if(userID ===  null){
	userID = Math.random().toString(36).substring(7);
	localStorage.setItem('ID', userID);
	userID = localStorage.getItem('ID');
}


//Test user comment out in production
// var userID = localStorage.setItem("ID", "9h3aqpzj59dsbr3eg66r");
// userID = localStorage.getItem('ID')
// console.log(userID)

var myFireBase = new Firebase('https://fb-calorie-tracker.firebaseio.com/');


// get data from form
$("#myForm").submit(function(event){
	event.preventDefault();''
	var start = document.getElementById('start').value;
	var calories = document.getElementById('calories').value;
	var calories = parseInt(calories)
	var description = document.getElementById('description').value;
	var foodGroup = document.getElementById('foodGroup').value;

	// meal model
	myFireBase.push({
      user: userID,
      startDate: start,
      calories: calories,
      description: description,
			foodGroup: foodGroup
  })
})

myFireBase.orderByChild("user").equalTo(userID).on("child_added", function(snapshot) {
	var displayCalories = snapshot.val().calories;
	var displayStart = snapshot.val().startDate;
	var displayDescription = snapshot.val().description;
	var displayFoodGroup = snapshot.val().foodGroup;

	$("#results").append('<li>' + displayStart + ' ' + displayCalories + ' ' + displayDescription + ' ' + displayFoodGroup + '</li>')

});
