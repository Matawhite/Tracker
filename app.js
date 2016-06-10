$("#start").datepicker();

//Generate user ID code userID = Math.random().toString(36).substring(7);

var userID = "9h3aqpzj59dsbr3eg66r";
var userName = "Matt White";

var myFireBase = new Firebase('https://fb-calorie-tracker.firebaseio.com/');
var userRef = myFireBase.child('users');

// function setUser() {
//   userRef.set({
//   user: {
//     userID: userID,
//     userName: userName
//   }
// })
// }
//
// setUser();


$("#myForm").submit(function(event){
	event.preventDefault();
var start = document.getElementById('start').value;
var calories = document.getElementById('calories').value;
var calories = parseInt(calories)
var description = document.getElementById('description').value;
var foodGroup = document.getElementById('foodGroup').value;



  myFireBase.push({
      user: userID,
      startDate: start,
      calories: calories,
      description: description,
			foodGroup: foodGroup
  })
})

myFireBase.orderByChild("user").equalTo(userID).on("child_added", function(snapshot) {
  console.log(snapshot.val().calories);
	var displayCalories = snapshot.val().calories;
	var displayStart = snapshot.val().startDate;
	var displayDescription = snapshot.val().description;
	var displayFoodGroup = snapshot.val().foodGroup;

	$("#results").append('<li>' + displayStart + ' ' + displayCalories + ' ' + displayDescription + ' ' + displayFoodGroup + '</li>')

});
