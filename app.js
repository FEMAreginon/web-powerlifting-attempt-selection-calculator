function oneRepMax(rep, weight, rpe) {
  return weight * (10 - (rpe + 1) + rep) * 0.03 + weight;
}

function firstAttempt(oneRepMax) {
  return int(oneRepMax * 0.91);
}

function secondAttempt(oneRepMax) {
  return int(oneRepMax * 0.91);
}

function thirdAttempt(oneRepMax) {
  return int(oneRepMax * 0.91);
}

function savaData() {
  // bodyweight
  var bodyWeight = document.getElementById("bodyweight");
  localStorage.setItem("bodyweight", bodyWeight.value);

  // gender
  var gender = document.querySelector('input[name = "gender"]:checked');
  localStorage.setItem("gender", gender.value);

  // squat one rep max
  var sq_reps = document.getElementById("sq_reps");
  localStorage.setItem("sq_reps", sq_reps.value);
  var sq_weight = document.getElementById("sq_weight");
  localStorage.setItem("sq_weight", sq_weight.value);
  var sq_rpe = document.getElementById("sq_rpe");
  localStorage.setItem("sq_rpe", sq_rpe.value);
}

function loadData() {
  // bodyweight
  document.getElementById("bodyweight").innerHTML = localStorage.getItem(
    "bodyweight"
  );

  // gender
  document.getElementById("gender").innerHTML = localStorage.getItem("gender");

  // squat one rep max
  document.getElementById("sq_1RM").innerHTML =
    "SQUAT e1RM: " +
    oneRepMax(
      parseInt(localStorage.getItem("sq_reps")),
      parseInt(localStorage.getItem("sq_weight")),
      parseInt(localStorage.getItem("sq_rpe"))
    );
}

function about() {
  alertify.confirm(
    "Support",
    "This web applicatoin is free forever, but it still cost effort to maintain it on AppStore. Want to buy me a cup of coffee?",
    function (closeEvent) {
      window.location.href = "https://www.paypal.me/akonyein/";
    },
    function () {}
  );
}

function verifyAllInputs() {
  var bodyWeight = document.forms["form"]["bodyweight"];
  var sq_reps = document.forms["form"]["sq_reps"];
  var sq_weight = document.forms["form"]["sq_weight"];
  var sq_rpe = document.forms["form"]["sq_rpe"];
  var bn_reps = document.forms["form"]["bn_reps"];
  var bn_weight = document.forms["form"]["bn_weight"];
  var bn_rpe = document.forms["form"]["bn_rpe"];
  var dl_reps = document.forms["form"]["dl_reps"];
  var dl_weight = document.forms["form"]["dl_weight"];
  var dl_rpe = document.forms["form"]["dl_rpe"];
  if (
    bodyWeight.value == "" ||
    sq_reps.value == "" ||
    sq_weight.value == "" ||
    sq_rpe.value == "" ||
    bn_reps.value == "" ||
    bn_weight.value == "" ||
    bn_rpe.value == "" ||
    dl_reps.value == "" ||
    dl_weight.value == "" ||
    dl_rpe.value == ""
  ) {
    alert_input();
    return false;
  }
  return true;
}

function alert_input() {
  alertify.confirm(
    "Alert",
    "Please enter all input fields!",
    function () {},
    function () {}
  );
}
