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
let $runPoints = undefined; // span // 0 / 60
let $acPoints = undefined; // span // 0 / 20
let $pushupsPoints = undefined; // span // 0 / 10
let $crunchesPoints = undefined; // span // 0 / 10
let $total = undefined; // span // 0 / 100
let $rating = undefined; // span // Pass / Fail

/*
 * Primitive values
 */
let currentScore = 0.0;
let compositeScore = 0.0;

$(document).ready(() => {
    $("#submit").on("click", () => {
        console.clear();
        currentScore = 0.0;
        getValues();
        getOutputs();
        
        calculateScores();
    });
});

const getValues = () => {
    $gender = $("#gender").val().toString();
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

            // Calculate Run Points

            if ($seconds <= 552) {
                currentScore += 60.0;
            } else if ($seconds >= 553 && $seconds <= 574) {
                currentScore += 59.7;
            } else if ($seconds >= 575 && $seconds <= 585) {
                currentScore += 59.3;
            } else if ($seconds >= 586 && $seconds <= 598) {
                currentScore += 58.9;
            } else if ($seconds >= 599 && $seconds <= 610) {
                currentScore += 58.5;
            } else if ($seconds >= 611 && $seconds <= 623) {
                currentScore += 57.9;
            } else if ($seconds >= 624 && $seconds <= 637) {
                currentScore += 57.3;
            } else if ($seconds >= 638 && $seconds <= 651) {
                currentScore += 56.6;
            } else if ($seconds >= 652 && $seconds <= 666) {
                currentScore += 55.7;
            } else if ($seconds >= 667 && $seconds <= 682) {
                currentScore += 54.8;
            } else if ($seconds >= 683 && $seconds <= 698) {
                currentScore += 53.7;
            } else if ($seconds >= 699 && $seconds <= 716) {
                currentScore += 52.4;
            } else if ($seconds >= 717 && $seconds <= 734) {
                currentScore += 50.9;
            } else if ($seconds >= 735 && $seconds <= 753) {
                currentScore += 49.2;
            } else if ($seconds >= 754 && $seconds <= 773) {
                currentScore += 47.2;
            } else if ($seconds >= 774 && $seconds <= 794) {
                currentScore += 44.9;
            } else if ($seconds >= 795 && $seconds <= 816) {
                currentScore += 42.3;
            } else {
                currentScore += 0;
                $rating.text("Fail");
            }


            // RUN SCORE END
            // Update the DOM text, update the internal composite score, reset the current score
            $runPoints.text(currentScore + " / 60 ");
            console.log("Run score: " + currentScore);
            compositeScore += currentScore;
            currentScore = 0.0;


            // Calculate AC Points

            if ($ac <= 35.0) {
                currentScore += 20.0
            } else if ($ac > 35.0 && $ac <= 35.5) {
                currentScore += 17.6;
            } else if ($ac > 35.5 && $ac <= 36.0){
                currentScore += 17.0;
            } else if ($ac > 36.0 && $ac <= 36.5) {
                currentScore += 16.4;
            } else if ($ac > 36.5 && $ac <= 37.0) {
                currentScore += 15.8;
            } else if ($ac > 37.0 && $ac <= 37.5) {
                currentScore += 15.1
            } else if ($ac > 37.5 && $ac <= 38.0) {
                currentScore += 14.4;
            } else if ($ac > 38.0 && $ac <= 38.5) {
                currentScore += 13.5
            } else if ($ac > 38.5 && $ac <= 39.0) {
                currentScore += 12.6;
            } else {
                currentScore += 0.0;
                $rating.text("Fail");
            }

            // AC SCORE END
            // Update the DOM text, update the internal composite score, reset the current score
            $acPoints.text(currentScore + " / 20");
            console.log("AC Score: " + currentScore);
            compositeScore += currentScore;
            currentScore = 0.0;

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