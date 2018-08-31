"use strict";

/*
 * User inputted values 
 */
let $gender = undefined; // String: male OR female
let $age = undefined; // Number
let $seconds = undefined; // Number
let $ac = undefined; // Number
let $pushups = undefined; // Number
let $crunches = undefined; // Number

/* 
 * DOM Elements
 */
let $runPoints = undefined; // Run Points: 0 / 60
let $acPoints = undefined; // Abdomen Circle Points: 0 / 20
let $pushupsPoints = undefined; // Pushups Points: 0 / 10
let $crunchesPoints = undefined; // Crunches Points: 0 / 10
let $total = undefined; // Composite Score: 0 / 100
let $rating = undefined; // Pass / Fail

$(document).ready(() => {
    $("#submit").on("click", () => {
        console.clear();
        getValues();
        getOutputs();

        calculateScores();
    });
});

const getValues = () => {
    $gender = $("#gender").val();
    $age = parseInt($("#age").val());
    $seconds = parseInt(($("#minutes").val() * 60)) + parseInt($("#seconds").val());
    $ac = parseFloat($("#ac").val());
    $pushups = parseInt($("#pushups").val());
    $crunches = parseInt($("#crunches").val());
}

const getOutputs = () => {
    $runPoints = $("#run-points");
    $acPoints = $("#ac-points");
    $pushupsPoints = $("#pushups-points");
    $crunchesPoints = $("#crunches-points");
    $total = $("#total");
    $rating = $("#rating");
}

const calculateScores = () => {

    // Determine Gender
    if ($gender == "male") {

        console.log("You are Male");

        // Determine Age
        if ($age < 30) {

            console.log("You are younger than 30");

        } else if ($age >= 30 && $age <= 39) {

            console.log("You are between 30 and 39, inclusive");

        } else if ($age >= 40 && $age <= 49) {
            
            console.log("You are between 40 and 49, inclusive");

        } else if ($age >= 50 && $age <= 59) {

            console.log("You are between 50 and 59, inclusive");

        } else if ($age >= 60) {

            console.log("You are 60 or older");

        }
    } else if ($gender == "female") {
        
        console.log("You are Female");

        // Determine Age
        if ($age < 30) {

            console.log("You are younger than 30");

        } else if ($age >= 30 && $age <= 39) {

            console.log("You are between 30 and 39, inclusive");

        } else if ($age >= 40 && $age <= 49) {
            
            console.log("You are between 40 and 49, inclusive");

        } else if ($age >= 50 && $age <= 59) {

            console.log("You are between 50 and 59, inclusive");

        } else if ($age >= 60) {
            
            console.log("You are 60 or older");

        }
    }
}