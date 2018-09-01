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
let currentScore = 0.0; // A counter
let compositeScore = 0.0; // The final composite score

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

    // Determine gender
    if (gender == "Male") {


        // Determine age
        if ($age < 30) {

            // Run Time Score
            if ($seconds <= 552) {
                currentScore += 60;
            } else if ($seconds > 552 && $seconds <= 574) {
                currentScore += 59.7;
            } else if ($seconds > 574 && $seconds <= 585) {
                currentScore += 59.3;
            } else if ($seconds > 585 && $seconds <= 598) {
                currentScore += 58.9;
            } else if ($seconds > 598 && $seconds <= 610) {
                currentScore += 58.5;
            } else if ($seconds > 610 && $seconds <= 623) {
                currentScore += 57.9;
            } else if ($seconds > 623 && $seconds <= 637) {
                currentScore += 57.3;
            } else if ($seconds > 637 && $seconds <= 651) {
                currentScore += 56.6;
            } else if ($seconds > 651 && $seconds <= 666) {
                currentScore += 55.7;
            } else if ($seconds > 666 && $seconds <= 682) {
                currentScore += 54.8;
            } else if ($seconds > 682 && $seconds <= 698) {
                currentScore += 53.7;
            } else if ($seconds > 698 && $seconds <= 716) {
                currentScore += 52.4;
            } else if ($seconds > 716 && $seconds <= 734) {
                currentScore += 50.9;
            } else if ($seconds > 734 && $seconds <= 753) {
                currentScore += 49.2;
            } else if ($seconds > 753 && $seconds <= 773) {
                currentScore += 47.2;
            } else if ($seconds > 773 && $seconds <= 794) {
                currentScore += 44.9;
            } else if ($seconds > 794 && $seconds <= 816) {
                currentScore += 42.3;
            } else {
                currentScore += 0;
                $rating.text("Unsatisfactory");
            }

            $runPoints.text(currentScore + " / 60");
            compositeScore += currentScore;
            currentScore = 0.0;

            // $pushups Up Score
            if ($pushups >= 67) {
                currentScore += 10;
            } else if ($pushups < 67 && $pushups > 61) {
                currentScore += 9.5;
            } else if ($pushups == 61) {
                currentScore += 9.4;
            } else if ($pushups == 60) {
                currentScore += 9.3;
            } else if ($pushups == 59) {
                currentScore += 9.2;
            } else if ($pushups == 58) {
                currentScore += 9.1;
            } else if ($pushups == 57) {
                currentScore += 9;
            } else if ($pushups == 56) {
                currentScore += 8.9;
            } else if ($pushups == 55 || $pushups == 54) {
                currentScore += 8.8;
            } else if ($pushups == 53) {
                currentScore += 8.7;
            } else if ($pushups == 52) {
                currentScore += 8.6;
            } else if ($pushups == 51) {
                currentScore += 8.5;
            } else if ($pushups == 50) {
                currentScore += 8.4;
            } else if ($pushups == 49) {
                currentScore += 8.3;
            } else if ($pushups == 48) {
                currentScore += 8.1;
            } else if ($pushups == 47) {
                currentScore += 8;
            } else if ($pushups == 46) {
                currentScore += 7.8;
            } else if ($pushups == 45) {
                currentScore += 7.7;
            } else if ($pushups == 44) {
                currentScore += 7.5;
            } else if ($pushups == 43) {
                currentScore += 7.3;
            } else if ($pushups == 42) {
                currentScore += 7.2;
            } else if ($pushups == 41) {
                currentScore += 7;
            } else if ($pushups == 40) {
                currentScore += 6.8;
            } else if ($pushups == 39) {
                currentScore += 6.5;
            } else if ($pushups == 38) {
                currentScore += 6.3;
            } else if ($pushups == 37) {
                currentScore += 6;
            } else if ($pushups == 36) {
                currentScore += 5.8;
            } else if ($pushups == 35) {
                currentScore += 5.5;
            } else if ($pushups == 34) {
                currentScore += 5.3;
            } else if ($pushups == 33) {
                currentScore += 5;
            } else {
                currentScore += 0;
                $rating.text("Unsatisfactory");
            }

            $pushupsPoints.text(currentScore + " / 10");
            compositeScore += currentScore;
            currentScore = 0.0;

            // $crunches Ups Score
            if ($crunches >= 58) {
                currentScore += 10;
            } else if ($crunches < 58 && $crunches > 54) {
                currentScore += 9.5;
            } else if ($crunches == 54) {
                currentScore += 9.4;
            } else if ($crunches == 53) {
                currentScore += 9.2;
            } else if ($crunches == 52) {
                currentScore += 9;
            } else if ($crunches == 51) {
                currentScore += 8.8;
            } else if ($crunches == 50) {
                currentScore += 8.7;
            } else if ($crunches == 49) {
                currentScore += 8.5;
            } else if ($crunches == 48) {
                currentScore += 8.3;
            } else if ($crunches == 47) {
                currentScore += 8;
            } else if ($crunches == 46) {
                currentScore += 7.5;
            } else if ($crunches == 45) {
                currentScore += 7;
            } else if ($crunches == 44) {
                currentScore += 6.5;
            } else if ($crunches == 43) {
                currentScore += 6.3;
            } else if ($crunches == 42) {
                currentScore += 6;
            } else {
                currentScore += 0;
                $rating.text("Unsatisfactory");
            }

            $crunchesPoints.text(currentScore + " / 10");
            compositeScore += currentScore;
            currentScore = 0.0;



        } else if ($age > 29 && $age <= 39) {

            // Run Time Score
            if ($seconds <= 574) {
                currentScore += 60;
            } else if ($seconds > 574 && $seconds <= 598) {
                currentScore += 59.3;
            } else if ($seconds > 598 && $seconds <= 610) {
                currentScore += 58.6;
            } else if ($seconds > 610 && $seconds <= 623) {
                currentScore += 57.9;
            } else if ($seconds > 623 && $seconds <= 637) {
                currentScore += 57.3;
            } else if ($seconds > 637 && $seconds <= 651) {
                currentScore += 56.6;
            } else if ($seconds > 651 && $seconds <= 666) {
                currentScore += 55.7;
            } else if ($seconds > 666 && $seconds <= 682) {
                currentScore += 54.8;
            } else if ($seconds > 682 && $seconds <= 698) {
                currentScore += 53.7;
            } else if ($seconds > 698 && $seconds <= 716) {
                currentScore += 52.4;
            } else if ($seconds > 716 && $seconds <= 734) {
                currentScore += 50.9;
            } else if ($seconds > 734 && $seconds <= 753) {
                currentScore += 49.2;
            } else if ($seconds > 753 && $seconds <= 773) {
                currentScore += 47.2;
            } else if ($seconds > 773 && $seconds <= 794) {
                currentScore += 44.9;
            } else if ($seconds > 794 && $seconds <= 816) {
                currentScore += 42.3;
            } else if ($seconds > 816 && $seconds <= 840) {
                currentScore += 39.3;
            } else {
                currentScore += 0;
                $rating.text("Unsatisfactory");
            }

            $runPoints.text(currentScore + " / 60");
            compositeScore += currentScore;
            currentScore = 0.0;

            // $pushups Up Score
            if ($pushups >= 57) {
                currentScore += 10;
            } else if ($pushups < 57 && $pushups > 51) {
                currentScore += 9.5;
            } else if ($pushups == 51) {
                currentScore += 9.4;
            } else if ($pushups == 50) {
                currentScore += 9.3;
            } else if ($pushups == 49) {
                currentScore += 9.2;
            } else if ($pushups == 48) {
                currentScore += 9.2;
            } else if ($pushups == 47) {
                currentScore += 9.1;
            } else if ($pushups == 46) {
                currentScore += 9;
            } else if ($pushups == 45) {
                currentScore += 8.9;
            } else if ($pushups == 44) {
                currentScore += 8.8;
            } else if ($pushups == 43) {
                currentScore += 8.7;
            } else if ($pushups == 42) {
                currentScore += 8.6;
            } else if ($pushups == 41) {
                currentScore += 8.5;
            } else if ($pushups == 40) {
                currentScore += 8.3;
            } else if ($pushups == 39) {
                currentScore += 8;
            } else if ($pushups == 38) {
                currentScore += 7.8;
            } else if ($pushups == 37) {
                currentScore += 7.7;
            } else if ($pushups == 36) {
                currentScore += 7.5;
            } else if ($pushups == 35) {
                currentScore += 7.3;
            } else if ($pushups == 34) {
                currentScore += 7;
            } else if ($pushups == 33) {
                currentScore += 6.8;
            } else if ($pushups == 32) {
                currentScore += 6.7;
            } else if ($pushups == 31) {
                currentScore += 6.5;
            } else if ($pushups == 30) {
                currentScore += 6;
            } else if ($pushups == 29) {
                currentScore += 5.5;
            } else if ($pushups == 28) {
                currentScore += 5.3;
            } else if ($pushups == 27) {
                currentScore += 5;
            } else {
                currentScore += 0;
                $rating.text("Unsatisfactory");
            }
            $pushupsPoints.text(currentScore + " / 10");
            compositeScore += currentScore;
            currentScore = 0.0;

            // $crunches Ups Score
            if ($crunches >= 54) {
                currentScore += 10;
            } else if ($crunches < 54 && $crunches > 50) {
                currentScore += 9.5;
            } else if ($crunches == 50) {
                currentScore += 9.4;
            } else if ($crunches == 49) {
                currentScore += 9.2;
            } else if ($crunches == 48) {
                currentScore += 9;
            } else if ($crunches == 47) {
                currentScore += 8.8;
            } else if ($crunches == 46) {
                currentScore += 8.7;
            } else if ($crunches == 45) {
                currentScore += 8.5;
            } else if ($crunches == 44) {
                currentScore += 8.3;
            } else if ($crunches == 43) {
                currentScore += 8;
            } else if ($crunches == 42) {
                currentScore += 7.5;
            } else if ($crunches == 41) {
                currentScore += 7;
            } else if ($crunches == 40) {
                currentScore += 6.5;
            } else if ($crunches == 39) {
                currentScore += 6;
            } else {
                currentScore += 0;
                $rating.text("Unsatisfactory");
            }

            $crunchesPoints.text(currentScore + " / 10");
            compositeScore += currentScore;
            currentScore = 0.0;

        } else if ($age > 39 && $age <= 49) {


            // Run Time Score
            if ($seconds <= 585) {
                currentScore += 60;
            } else if ($seconds > 585 && $seconds <= 610) {
                currentScore += 59.8;
            } else if ($seconds > 610 && $seconds <= 623) {
                currentScore += 59.5;
            } else if ($seconds > 623 && $seconds <= 637) {
                currentScore += 59.1;
            } else if ($seconds > 637 && $seconds <= 651) {
                currentScore += 58.7;
            } else if ($seconds > 651 && $seconds <= 666) {
                currentScore += 58.3;
            } else if ($seconds > 666 && $seconds <= 682) {
                currentScore += 57.7;
            } else if ($seconds > 682 && $seconds <= 698) {
                currentScore += 57.1;
            } else if ($seconds > 698 && $seconds <= 716) {
                currentScore += 56.3;
            } else if ($seconds > 716 && $seconds <= 734) {
                currentScore += 55.4;
            } else if ($seconds > 734 && $seconds <= 753) {
                currentScore += 54.3;
            } else if ($seconds > 753 && $seconds <= 773) {
                currentScore += 53.1;
            } else if ($seconds > 773 && $seconds <= 794) {
                currentScore += 51.5;
            } else if ($seconds > 794 && $seconds <= 816) {
                currentScore += 49.8;
            } else if ($seconds > 816 && $seconds <= 840) {
                currentScore += 47.7;
            } else if ($seconds > 840 && $seconds <= 865) {
                currentScore += 45.2;
            } else if ($seconds > 865 && $seconds <= 892) {
                currentScore += 42.3;
            } else {
                currentScore += 0;
                $rating.text("Unsatisfactory");
            }

            $runPoints.text(currentScore + " / 60");
            compositeScore += currentScore;
            currentScore = 0.0;

            // $pushups Up Score
            if ($pushups >= 44) {
                currentScore += 10;
            } else if ($pushups < 44 && $pushups > 39) {
                currentScore += 9.5;
            } else if ($pushups == 39) {
                currentScore += 9.4;
            } else if ($pushups == 38) {
                currentScore += 9.2;
            } else if ($pushups == 37) {
                currentScore += 9.1;
            } else if ($pushups == 36) {
                currentScore += 9;
            } else if ($pushups == 35) {
                currentScore += 8.8;
            } else if ($pushups == 34) {
                currentScore += 8.5;
            } else if ($pushups == 33) {
                currentScore += 8.4;
            } else if ($pushups == 32) {
                currentScore += 8.3;
            } else if ($pushups == 31) {
                currentScore += 8.1;
            } else if ($pushups == 30) {
                currentScore += 8;
            } else if ($pushups == 29) {
                currentScore += 7.5;
            } else if ($pushups == 28) {
                currentScore += 7.3;
            } else if ($pushups == 27) {
                currentScore += 7.2;
            } else if ($pushups == 26) {
                currentScore += 7;
            } else if ($pushups == 25) {
                currentScore += 6.5;
            } else if ($pushups == 24) {
                currentScore += 6;
            } else if ($pushups == 23) {
                currentScore += 5.8;
            } else if ($pushups == 22) {
                currentScore += 5.5;
            } else if ($pushups == 21) {
                currentScore += 5;
            } else {
                currentScore += 0;
                $rating.text("Unsatisfactory");
            }
            $pushupsPoints.text(currentScore + " / 10");
            compositeScore += currentScore;
            currentScore = 0.0;

            // $crunches Ups Score
            if ($crunches >= 50) {
                currentScore += 10;
            } else if ($crunches < 50 && $crunches > 46) {
                currentScore += 9.5;
            } else if ($crunches == 46) {
                currentScore += 9.4;
            } else if ($crunches == 45) {
                currentScore += 9.2;
            } else if ($crunches == 44) {
                currentScore += 9.1;
            } else if ($crunches == 43) {
                currentScore += 9;
            } else if ($crunches == 42) {
                currentScore += 8.8;
            } else if ($crunches == 41) {
                currentScore += 8.7;
            } else if ($crunches == 40) {
                currentScore += 8.5;
            } else if ($crunches == 39) {
                currentScore += 8;
            } else if ($crunches == 38) {
                currentScore += 7.8;
            } else if ($crunches == 37) {
                currentScore += 7.5;
            } else if ($crunches == 36) {
                currentScore += 7;
            } else if ($crunches == 35) {
                currentScore += 6.5;
            } else if ($crunches == 34) {
                currentScore += 6;
            } else {
                currentScore += 0;
                $rating.text("Unsatisfactory");
            }
            $crunchesPoints.text(currentScore + " / 10");
            compositeScore += currentScore;
            currentScore = 0.0;


        } else if ($age > 49 && $age <= 59) {


            // Run Time Score
            if ($seconds <= 637) {
                currentScore += 60;
            } else if ($seconds > 637 && $seconds <= 666) {
                currentScore += 59.7;
            } else if ($seconds > 666 && $seconds <= 682) {
                currentScore += 59.4;
            } else if ($seconds > 682 && $seconds <= 698) {
                currentScore += 59;
            } else if ($seconds > 698 && $seconds <= 716) {
                currentScore += 58.5;
            } else if ($seconds > 716 && $seconds <= 734) {
                currentScore += 58;
            } else if ($seconds > 734 && $seconds <= 753) {
                currentScore += 57.3;
            } else if ($seconds > 753 && $seconds <= 773) {
                currentScore += 56.5;
            } else if ($seconds > 773 && $seconds <= 794) {
                currentScore += 55.6;
            } else if ($seconds > 794 && $seconds <= 816) {
                currentScore += 54.5;
            } else if ($seconds > 816 && $seconds <= 840) {
                currentScore += 53.3;
            } else if ($seconds > 840 && $seconds <= 865) {
                currentScore += 51.8;
            } else if ($seconds > 865 && $seconds <= 892) {
                currentScore += 50;
            } else if ($seconds > 892 && $seconds <= 920) {
                currentScore += 47.9;
            } else if ($seconds > 920 && $seconds <= 950) {
                currentScore += 45.4;
            } else if ($seconds > 950 && $seconds <= 982) {
                currentScore += 42.4;
            } else {
                currentScore += 0;
                $rating.text("Unsatisfactory");
            }
            $runPoints.text(currentScore + " / 60");
            compositeScore += currentScore;
            currentScore = 0.0;

            // $pushups Up Score
            if ($pushups >= 44) {
                currentScore += 10;
            } else if ($pushups < 44 && $pushups >= 39) {
                currentScore += 9.5;
            } else if ($pushups == 38) {
                currentScore += 9.4;
            } else if ($pushups == 37) {
                currentScore += 9.4;
            } else if ($pushups == 36) {
                currentScore += 9.3;
            } else if ($pushups == 35) {
                currentScore += 9.3;
            } else if ($pushups == 34) {
                currentScore += 9.2;
            } else if ($pushups == 33) {
                currentScore += 9.2;
            } else if ($pushups == 32) {
                currentScore += 9.1;
            } else if ($pushups == 31) {
                currentScore += 9.1;
            } else if ($pushups == 30) {
                currentScore += 9;
            } else if ($pushups == 29) {
                currentScore += 8.8;
            } else if ($pushups == 28) {
                currentScore += 8.5;
            } else if ($pushups == 27) {
                currentScore += 8.3;
            } else if ($pushups == 26) {
                currentScore += 8.2;
            } else if ($pushups == 25) {
                currentScore += 8;
            } else if ($pushups == 24) {
                currentScore += 7.5;
            } else if ($pushups == 23) {
                currentScore += 7.3;
            } else if ($pushups == 22) {
                currentScore += 7.2;
            } else if ($pushups == 21) {
                currentScore += 7;
            } else if ($pushups == 20) {
                currentScore += 6.5;
            } else if ($pushups == 19) {
                currentScore += 6;
            } else if ($pushups == 18) {
                currentScore += 5.8;
            } else if ($pushups == 17) {
                currentScore += 5.5;
            } else if ($pushups == 16) {
                currentScore += 5.3;
            } else if ($pushups == 15) {
                currentScore += 5;
            } else {
                currentScore += 0;
                $rating.text("Unsatisfactory");
            }

            $pushupsPoints.text(currentScore + " / 10");
            compositeScore += currentScore;
            currentScore = 0.0;

            // $crunches Ups Score
            if ($crunches >= 46) {
                currentScore += 10;
            } else if ($crunches < 46 && $crunches > 42) {
                currentScore += 9.5;
            } else if ($crunches == 42) {
                currentScore += 9.4;
            } else if ($crunches == 41) {
                currentScore += 9.2;
            } else if ($crunches == 40) {
                currentScore += 9.1;
            } else if ($crunches == 39) {
                currentScore += 9;
            } else if ($crunches == 38) {
                currentScore += 8.8;
            } else if ($crunches == 37) {
                currentScore += 8.7;
            } else if ($crunches == 36) {
                currentScore += 8.5;
            } else if ($crunches == 35) {
                currentScore += 8;
            } else if ($crunches == 34) {
                currentScore += 7.8;
            } else if ($crunches == 33) {
                currentScore += 7.5;
            } else if ($crunches == 32) {
                currentScore += 7.3;
            } else if ($crunches == 31) {
                currentScore += 7;
            } else if ($crunches == 30) {
                currentScore += 6.5;
            } else if ($crunches = 29) {
                currentScore += 6.3;
            } else if ($crunches = 28) {
                currentScore += 6;
            } else {
                currentScore += 0;
                $rating.text("Unsatisfactory");
            }
            $crunchesPoints.text(currentScore + " / 10");
            compositeScore += currentScore;
            currentScore = 0.0;


        } else if ($age > 59) {


            // Run Time Score
            if ($seconds <= 682) {
                currentScore += 60;
            } else if ($seconds > 682 && $seconds <= 716) {
                currentScore += 59.7;
            } else if ($seconds > 716 && $seconds <= 734) {
                currentScore += 59.4;
            } else if ($seconds > 734 && $seconds <= 753) {
                currentScore += 59;
            } else if ($seconds > 753 && $seconds <= 773) {
                currentScore += 58.5;
            } else if ($seconds > 773 && $seconds <= 794) {
                currentScore += 58;
            } else if ($seconds > 794 && $seconds <= 816) {
                currentScore += 57.3;
            } else if ($seconds > 816 && $seconds <= 840) {
                currentScore += 56.5;
            } else if ($seconds > 840 && $seconds <= 865) {
                currentScore += 55.6;
            } else if ($seconds > 865 && $seconds <= 892) {
                currentScore += 54.5;
            } else if ($seconds > 892 && $seconds <= 920) {
                currentScore += 53.3;
            } else if ($seconds > 920 && $seconds <= 950) {
                currentScore += 51.8;
            } else if ($seconds > 950 && $seconds <= 982) {
                currentScore += 50;
            } else if ($seconds > 982 && $seconds <= 1017) {
                currentScore += 47.9;
            } else if ($seconds > 1017 && $seconds <= 1054) {
                currentScore += 45.4;
            } else if ($seconds > 1054 && $seconds <= 1094) {
                currentScore += 42.4;
            } else {
                currentScore += 0;
                $rating.text("Unsatisfactory");
            }

            $runPoints.text(currentScore + " / 60");
            compositeScore += currentScore;
            currentScore = 0.0;

            // $pushups Ups Score
            if ($pushups >= 30) {
                currentScore += 10;
            } else if ($pushups < 30 && $pushups > 28) {
                currentScore += 9.5;
            } else if ($pushups == 27) {
                currentScore += 9.3;
            } else if ($pushups == 26) {
                currentScore += 9;
            } else if ($pushups == 25) {
                currentScore += 8.8;
            } else if ($pushups == 24) {
                currentScore += 8.5;
            } else if ($pushups == 23) {
                currentScore += 8;
            } else if ($pushups == 22) {
                currentScore += 7.5;
            } else if ($pushups == 21) {
                currentScore += 7;
            } else if ($pushups == 20) {
                currentScore += 6.5;
            } else if ($pushups == 19) {
                currentScore += 6.3;
            } else if ($pushups == 18) {
                currentScore += 6;
            } else if ($pushups == 17) {
                currentScore += 5.8;
            } else if ($pushups == 16) {
                currentScore += 5.5;
            } else if ($pushups == 15) {
                currentScore += 5.3;
            } else if ($pushups == 14) {
                currentScore += 5;
            } else {
                currentScore += 0;
                $rating.text("Unsatisfactory");
            }

            $pushupsPoints.text(currentScore + " / 10");
            compositeScore += currentScore;
            currentScore = 0.0;

            // $crunches Ups Score
            if ($crunches >= 42) {
                currentScore += 10;
            } else if ($crunches < 42 && $crunches > 38) {
                currentScore += 9.5;
            } else if ($crunches == 38) {
                currentScore += 9.4;
            } else if ($crunches == 37) {
                currentScore += 9.2;
            } else if ($crunches == 36) {
                currentScore += 9.1;
            } else if ($crunches == 35) {
                currentScore += 9;
            } else if ($crunches == 34) {
                currentScore += 8.9;
            } else if ($crunches == 33) {
                currentScore += 8.8;
            } else if ($crunches == 32) {
                currentScore += 8.6;
            } else if ($crunches == 31) {
                currentScore += 8.5;
            } else if ($crunches == 30) {
                currentScore += 8;
            } else if ($crunches == 29) {
                currentScore += 7.8;
            } else if ($crunches == 28) {
                currentScore += 7.5;
            } else if ($crunches == 27) {
                currentScore += 7.3;
            } else if ($crunches == 26) {
                currentScore += 7;
            } else if ($crunches == 25) {
                currentScore += 6.8;
            } else if ($crunches == 24) {
                currentScore += 6.5;
            } else if ($crunches == 23) {
                currentScore += 6.3;
            } else if ($crunches == 22) {
                currentScore += 6;
            } else {
                currentScore += 0;
                $rating.text("Unsatisfactory");
            }


            $crunchesPoints.text(currentScore + " / 10");
            compositeScore += currentScore;
            currentScore = 0.0;


        }

        // $ac Score

        if ($ac <= 35) {
            currentScore += 20;
        } else if ($ac == 35.5) {
            currentScore += 17.6;
        } else if ($ac == 36) {
            currentScore += 17;
        } else if ($ac == 36.5) {
            currentScore += 16.4;
        } else if ($ac == 37) {
            currentScore += 15.8;
        } else if ($ac == 37.5) {
            currentScore += 15.1;
        } else if ($ac == 38) {
            currentScore += 14.4;
        } else if ($ac == 38.5) {
            currentScore += 13.5;
        } else if ($ac == 39) {
            currentScore += 12.6;
        } else {
            currentScore += 0;
            $rating.text("Unsatisfactory");
        }

        $acPoints.text(currentScore + " / 20");
        compositeScore += currentScore;
        currentScore = 0.0;


    } else {


        // Determine age
        if ($age < 30) {

            // Run Time Score
            if ($seconds <= 623) {
                currentScore += 60;
            } else if ($seconds > 623 && $seconds <= 651) {
                currentScore += 59.9;
            } else if ($seconds > 651 && $seconds <= 666) {
                currentScore += 59.5;
            } else if ($seconds > 666 && $seconds <= 682) {
                currentScore += 59.2;
            } else if ($seconds > 682 && $seconds <= 698) {
                currentScore += 58.9;
            } else if ($seconds > 698 && $seconds <= 716) {
                currentScore += 58.6;
            } else if ($seconds > 716 && $seconds <= 734) {
                currentScore += 58.1;
            } else if ($seconds > 734 && $seconds <= 754) {
                currentScore += 57.6;
            } else if ($seconds > 754 && $seconds <= 773) {
                currentScore += 57;
            } else if ($seconds > 773 && $seconds <= 794) {
                currentScore += 56.2;
            } else if ($seconds > 794 && $seconds <= 816) {
                currentScore += 55.3;
            } else if ($seconds > 816 && $seconds <= 840) {
                currentScore += 54.2;
            } else if ($seconds > 840 && $seconds <= 865) {
                currentScore += 52.8;
            } else if ($seconds > 865 && $seconds <= 892) {
                currentScore += 51.2;
            } else if ($seconds > 892 && $seconds <= 920) {
                currentScore += 49.3;
            } else if ($seconds > 920 && $seconds <= 950) {
                currentScore += 46.9;
            } else if ($seconds > 950 && $seconds <= 982) {
                currentScore += 44.1;
            } else {
                currentScore += 0;
                $rating.text("Unsatisfactory");
            }

            $runPoints.text(currentScore + " / 60");
            compositeScore += currentScore;
            currentScore = 0.0;

            // $pushups Ups Score
            if ($pushups >= 47) {
                currentScore += 10;
            } else if ($pushups >= 42 && $pushups < 47) {
                currentScore += 9.5;
            } else if ($pushups == 41) {
                currentScore += 9.4;
            } else if ($pushups == 40) {
                currentScore += 9.3;
            } else if ($pushups == 39) {
                currentScore += 9.2;
            } else if ($pushups == 38) {
                currentScore += 9.1;
            } else if ($pushups == 37) {
                currentScore += 9;
            } else if ($pushups == 36) {
                currentScore += 8.9;
            } else if ($pushups == 35) {
                currentScore += 8.8;
            } else if ($pushups == 34) {
                currentScore += 8.6;
            } else if ($pushups == 33) {
                currentScore += 8.5;
            } else if ($pushups == 32) {
                currentScore += 8.4;
            } else if ($pushups == 31) {
                currentScore += 8.3;
            } else if ($pushups == 30) {
                currentScore += 8.2;
            } else if ($pushups == 29) {
                currentScore += 8.1;
            } else if ($pushups == 28) {
                currentScore += 8;
            } else if ($pushups == 27) {
                currentScore += 7.5;
            } else if ($pushups == 26) {
                currentScore += 7.3;
            } else if ($pushups == 25) {
                currentScore += 7.2;
            } else if ($pushups == 24) {
                currentScore += 7;
            } else if ($pushups == 23) {
                currentScore += 6.5;
            } else if ($pushups == 22) {
                currentScore += 6.3;
            } else if ($pushups == 21) {
                currentScore += 6;
            } else if ($pushups == 20) {
                currentScore += 5.8;
            } else if ($pushups == 19) {
                currentScore += 5.5;
            } else if ($pushups == 18) {
                currentScore += 5;
            } else {
                currentScore += 0;
                $rating.text("Unsatisfactory");
            }

            $pushupsPoints.text(currentScore + " / 10");
            compositeScore += currentScore;
            currentScore = 0.0;

            // $crunches Ups Score
            if ($crunches >= 54) {
                currentScore += 10;
            } else if ($crunches < 54 && $crunches > 50) {
                currentScore += 9.5;
            } else if ($crunches == 50) {
                currentScore += 9.4;
            } else if ($crunches == 49) {
                currentScore += 9;
            } else if ($crunches == 48) {
                currentScore += 8.9;
            } else if ($crunches == 47) {
                currentScore += 8.8;
            } else if ($crunches == 46) {
                currentScore += 8.6;
            } else if ($crunches == 45) {
                currentScore += 8.5;
            } else if ($crunches == 44) {
                currentScore += 8;
            } else if ($crunches == 43) {
                currentScore += 7.8;
            } else if ($crunches == 42) {
                currentScore += 7.5;
            } else if ($crunches == 41) {
                currentScore += 7;
            } else if ($crunches == 40) {
                currentScore += 6.8;
            } else if ($crunches == 39) {
                currentScore += 6.5;
            } else if ($crunches == 38) {
                currentScore += 6;
            } else {
                currentScore += 0;
                $rating.text("Unsatisfactory");
            }

            $crunchesPoints.text(currentScore + " / 10");
            compositeScore += currentScore;
            currentScore = 0.0;

        } else if ($age > 29 && $age <= 39) {

            // Run Time Score
            if ($seconds <= 651) {
                currentScore += 60;
            } else if ($seconds > 651 && $seconds <= 698) {
                currentScore += 59.5;
            } else if ($seconds > 698 && $seconds <= 716) {
                currentScore += 59;
            } else if ($seconds > 716 && $seconds <= 734) {
                currentScore += 58.6;
            } else if ($seconds > 734 && $seconds <= 753) {
                currentScore += 58.1;
            } else if ($seconds > 753 && $seconds <= 773) {
                currentScore += 57.6;
            } else if ($seconds > 773 && $seconds <= 794) {
                currentScore += 57;
            } else if ($seconds > 794 && $seconds <= 816) {
                currentScore += 56.2;
            } else if ($seconds > 816 && $seconds <= 840) {
                currentScore += 55.3;
            } else if ($seconds > 840 && $seconds <= 865) {
                currentScore += 54.2;
            } else if ($seconds > 865 && $seconds <= 892) {
                currentScore += 52.8;
            } else if ($seconds > 892 && $seconds <= 920) {
                currentScore += 51.2;
            } else if ($seconds > 920 && $seconds <= 950) {
                currentScore += 49.3;
            } else if ($seconds > 950 && $seconds <= 982) {
                currentScore += 46.9;
            } else if ($seconds > 982 && $seconds <= 1017) {
                currentScore += 40.8;
            } else {
                $rating.text("Unsatisfactory");
                currentScore += 0;
            }

            $runPoints.text(currentScore + " / 60");
            compositeScore += currentScore;
            currentScore = 0.0;

            // $pushups Up Score
            if ($pushups >= 46) {
                currentScore += 10;
            } else if ($pushups < 46 && $pushups > 39) {
                currentScore += 9.5;
            } else if ($pushups == 39) {
                currentScore += 9.4;
            } else if ($pushups == 38) {
                currentScore += 9.3;
            } else if ($pushups == 37) {
                currentScore += 9.3;
            } else if ($pushups == 36) {
                currentScore += 9.2;
            } else if ($pushups == 35) {
                currentScore += 9.1;
            } else if ($pushups == 34) {
                currentScore += 9.1;
            } else if ($pushups == 33) {
                currentScore += 9;
            } else if ($pushups == 32) {
                currentScore += 8.9;
            } else if ($pushups == 31) {
                currentScore += 8.9;
            } else if ($pushups == 30) {
                currentScore += 8.8;
            } else if ($pushups == 29) {
                currentScore += 8.7;
            } else if ($pushups == 28) {
                currentScore += 8.6;
            } else if ($pushups == 27) {
                currentScore += 8.6;
            } else if ($pushups == 26) {
                currentScore += 8.5;
            } else if ($pushups == 25) {
                currentScore += 8.3;
            } else if ($pushups == 24) {
                currentScore += 8.2;
            } else if ($pushups == 23) {
                currentScore += 8;
            } else if ($pushups == 22) {
                currentScore += 7.9;
            } else if ($pushups == 21) {
                currentScore += 7.8;
            } else if ($pushups == 20) {
                currentScore += 7.6;
            } else if ($pushups == 19) {
                currentScore += 7.5;
            } else if ($pushups == 18) {
                currentScore += 7;
            } else if ($pushups == 17) {
                currentScore += 6.8;
            } else if ($pushups == 16) {
                currentScore += 6.5;
            } else if ($pushups == 15) {
                currentScore += 6;
            } else if ($pushups == 14) {
                currentScore += 5;
            } else {
                currentScore += 0;
                $rating.text("Unsatisfactory");
            }

            $pushupsPoints.text(currentScore + " / 10");
            compositeScore += currentScore;
            currentScore = 0.0;

            // $crunches Ups Score
            if ($crunches >= 45) {
                currentScore += 10;
            } else if ($crunches < 45 && $crunches > 41) {
                currentScore += 9.5;
            } else if ($crunches == 41) {
                currentScore += 9.4;
            } else if ($crunches == 40) {
                currentScore += 9;
            } else if ($crunches == 39) {
                currentScore += 8.8;
            } else if ($crunches == 38) {
                currentScore += 8.5;
            } else if ($crunches == 37) {
                currentScore += 8.3;
            } else if ($crunches == 36) {
                currentScore += 8.2;
            } else if ($crunches == 35) {
                currentScore += 8;
            } else if ($crunches == 34) {
                currentScore += 7.8;
            } else if ($crunches == 33) {
                currentScore += 7.5;
            } else if ($crunches == 32) {
                currentScore += 7;
            } else if ($crunches == 31) {
                currentScore += 6.8;
            } else if ($crunches == 30) {
                currentScore += 6.5;
            } else if ($crunches == 29) {
                currentScore += 6;
            } else {
                currentScore += 0;
                $rating.text("Unsatisfactory");
            }

            $crunchesPoints.text(currentScore + " / 10");
            compositeScore += currentScore;
            currentScore = 0.0;

        } else if ($age > 39 && $age <= 49) {

            // Run Time Score
            if ($seconds <= 682) {
                currentScore += 60;
            } else if ($seconds > 682 && $seconds <= 716) {
                currentScore += 59.9;
            } else if ($seconds > 716 && $seconds <= 734) {
                currentScore += 59.8;
            } else if ($seconds > 734 && $seconds <= 753) {
                currentScore += 59.6;
            } else if ($seconds > 753 && $seconds <= 773) {
                currentScore += 59.4;
            } else if ($seconds > 773 && $seconds <= 794) {
                currentScore += 59.1;
            } else if ($seconds > 794 && $seconds <= 816) {
                currentScore += 58.7;
            } else if ($seconds > 816 && $seconds <= 840) {
                currentScore += 58.2;
            } else if ($seconds > 840 && $seconds <= 865) {
                currentScore += 57.7;
            } else if ($seconds > 865 && $seconds <= 892) {
                currentScore += 56.9;
            } else if ($seconds > 892 && $seconds <= 920) {
                currentScore += 56;
            } else if ($seconds > 920 && $seconds <= 950) {
                currentScore += 54.8;
            } else if ($seconds > 950 && $seconds <= 982) {
                currentScore += 53.3;
            } else if ($seconds > 982 && $seconds <= 1017) {
                currentScore += 51.4;
            } else if ($seconds > 1017 && $seconds <= 1054) {
                currentScore += 49;
            } else if ($seconds > 1054 && $seconds <= 1094) {
                currentScore += 45.9;
            } else {
                currentScore += 0;
                $rating.text("Unsatisfactory");
            }

            $runPoints.text(currentScore + " / 60");
            compositeScore += currentScore;
            currentScore = 0.0;

            // $pushups Ups Score
            if ($pushups >= 38) {
                currentScore += 10;
            } else if ($pushups < 38 && $pushups > 32) {
                currentScore += 9.5;
            } else if ($pushups == 32) {
                currentScore += 9.4;
            } else if ($pushups == 31) {
                currentScore += 9.2;
            } else if ($pushups == 30) {
                currentScore += 9.1;
            } else if ($pushups == 29) {
                currentScore += 9;
            } else if ($pushups == 28) {
                currentScore += 8.9;
            } else if ($pushups == 27) {
                currentScore += 8.8;
            } else if ($pushups == 26) {
                currentScore += 8.7;
            } else if ($pushups == 25) {
                currentScore += 8.6;
            } else if ($pushups == 24) {
                currentScore += 8.6;
            } else if ($pushups == 23) {
                currentScore += 8.5;
            } else if ($pushups == 22) {
                currentScore += 8.4;
            } else if ($pushups == 21) {
                currentScore += 8.3;
            } else if ($pushups == 20) {
                currentScore += 8.2;
            } else if ($pushups == 19) {
                currentScore += 8.1;
            } else if ($pushups == 18) {
                currentScore += 8;
            } else if ($pushups == 17) {
                currentScore += 7.8;
            } else if ($pushups == 16) {
                currentScore += 7.5;
            } else if ($pushups == 15) {
                currentScore += 7;
            } else if ($pushups == 14) {
                currentScore += 6.5
            } else if ($pushups == 13) {
                currentScore += 6;
            } else if ($pushups == 12) {
                currentScore += 5.5;
            } else if ($pushups == 11) {
                currentScore += 5;
            } else {
                currentScore += 0;
                $rating.text("Unsatisfactory");
            }

            $pushupsPoints.text(currentScore + " / 10");
            compositeScore += currentScore;
            currentScore = 0.0;

            // $crunches Ups Score
            if ($crunches >= 41) {
                currentScore += 10;
            } else if ($crunches < 41 && $crunches > 37) {
                currentScore += 9.5;
            } else if ($crunches == 37) {
                currentScore += 9.4;
            } else if ($crunches == 36) {
                currentScore += 9.2;
            } else if ($crunches == 35) {
                currentScore += 9.1;
            } else if ($crunches == 34) {
                currentScore += 9;
            } else if ($crunches == 33) {
                currentScore += 8.8;
            } else if ($crunches == 32) {
                currentScore += 8.5;
            } else if ($crunches == 31) {
                currentScore += 8.3;
            } else if ($crunches == 30) {
                currentScore += 8.2;
            } else if ($crunches == 29) {
                currentScore += 8;
            } else if ($crunches == 28) {
                currentScore += 7.5;
            } else if ($crunches == 27) {
                currentScore += 7;
            } else if ($crunches == 26) {
                currentScore += 6.8;
            } else if ($crunches == 25) {
                currentScore += 6.4;
            } else if ($crunches == 24) {
                currentScore += 6;
            } else {
                currentScore += 0;
                $rating.text("Unsatisfactory");
            }

            $crunchesPoints.text(currentScore + " / 10");
            compositeScore += currentScore;
            currentScore = 0.0;


        } else if ($age > 49 && $age <= 59) {

            // Run Time Score
            if ($seconds <= 773) {
                currentScore += 60;
            } else if ($seconds > 773 && $seconds <= 816) {
                currentScore += 59.8;
            } else if ($seconds > 816 && $seconds <= 840) {
                currentScore += 59.6;
            } else if ($seconds > 840 && $seconds <= 865) {
                currentScore += 59.3;
            } else if ($seconds > 865 && $seconds <= 892) {
                currentScore += 58.9;
            } else if ($seconds > 892 && $seconds <= 920) {
                currentScore += 58.4;
            } else if ($seconds > 920 && $seconds <= 950) {
                currentScore += 57.7;
            } else if ($seconds > 950 && $seconds <= 982) {
                currentScore += 56.8;
            } else if ($seconds > 982 && $seconds <= 1017) {
                currentScore += 55.6;
            } else if ($seconds > 1017 && $seconds <= 1054) {
                currentScore += 54;
            } else if ($seconds > 1054 && $seconds <= 1094) {
                currentScore += 51.9;
            } else if ($seconds > 1094 && $seconds <= 1136) {
                currentScore += 49.2;
            } else if ($seconds > 1136 && $seconds <= 1183) {
                currentScore += 45.5;
            } else {
                currentScore += 0;
                $rating.text("Unsatisfactory");
            }

            $runPoints.text(currentScore + " / 60");
            compositeScore += currentScore;
            currentScore = 0.0;

            // $pushups Ups Score
            if ($pushups >= 35) {
                currentScore += 10;
            } else if ($pushups < 35 && $pushups > 29) {
                currentScore += 9.5;
            } else if ($pushups == 29) {
                currentScore += 9.4;
            } else if ($pushups == 28) {
                currentScore += 9.3;
            } else if ($pushups == 27) {
                currentScore += 9.2;
            } else if ($pushups == 26) {
                currentScore += 9.1;
            } else if ($pushups == 25) {
                currentScore += 9;
            } else if ($pushups == 24) {
                currentScore += 8.8;
            } else if ($pushups == 23) {
                currentScore += 8.7;
            } else if ($pushups == 22) {
                currentScore += 8.6;
            } else if ($pushups == 21) {
                currentScore += 8.6;
            } else if ($pushups == 20) {
                currentScore += 8.5;
            } else if ($pushups == 19) {
                currentScore += 8.4;
            } else if ($pushups == 18) {
                currentScore += 8.3;
            } else if ($pushups == 17) {
                currentScore += 8.2;
            } else if ($pushups == 16) {
                currentScore += 8.1;
            } else if ($pushups == 15) {
                currentScore += 8;
            } else if ($pushups == 14) {
                currentScore += 7.5;
            } else if ($pushups == 13) {
                currentScore += 7;
            } else if ($pushups == 12) {
                currentScore += 6.5;
            } else if ($pushups == 11) {
                currentScore += 6;
            } else if ($pushups == 10) {
                currentScore += 5.5;
            } else if ($pushups == 9) {
                currentScore += 5;
            } else {
                currentScore += 0;
                $rating.text("Unsatisfactory");
            }

            $pushupsPoints.text(currentScore + " / 10");
            compositeScore += currentScore;
            currentScore = 0.0;

            // $crunches Ups Score
            if ($crunches >= 32) {
                currentScore += 10;
            } else if ($crunches == 30 || $crunches == 31) {
                currentScore += 9.5;
            } else if ($crunches == 29) {
                currentScore += 9;
            } else if ($crunches == 28) {
                currentScore += 8.9;
            } else if ($crunches == 27) {
                currentScore += 8.8;
            } else if ($crunches == 26) {
                currentScore += 8.6;
            } else if ($crunches == 25) {
                currentScore += 8.5;
            } else if ($crunches == 24) {
                currentScore += 8;
            } else if ($crunches == 23) {
                currentScore += 7.5;
            } else if ($crunches == 22) {
                currentScore += 7;
            } else if ($crunches == 21) {
                currentScore += 6.5;
            } else if ($crunches == 20) {
                currentScore += 6;
            } else {
                currentScore += 0;
                $rating.text("Unsatisfactory");
            }

            $crunchesPoints.text(currentScore + " / 10");
            compositeScore += currentScore;
            currentScore = 0.0;


        } else if ($age > 59) {

            // Run Time Score
            if ($seconds <= 840) {
                currentScore += 60;
            } else if ($seconds > 840 && $seconds <= 892) {
                currentScore += 59.8;
            } else if ($seconds > 892 && $seconds <= 920) {
                currentScore += 59.5;
            } else if ($seconds > 920 && $seconds <= 950) {
                currentScore += 59.1;
            } else if ($seconds > 950 && $seconds <= 982) {
                currentScore += 58.6;
            } else if ($seconds > 982 && $seconds <= 1017) {
                currentScore += 57.9;
            } else if ($seconds > 1017 && $seconds <= 1054) {
                currentScore += 57;
            } else if ($seconds > 1054 && $seconds <= 1094) {
                currentScore += 55.8;
            } else if ($seconds > 1094 && $seconds <= 1136) {
                currentScore += 54.2;
            } else if ($seconds > 1136 && $seconds <= 1183) {
                currentScore += 52.1;
            } else if ($seconds > 1183 && $seconds <= 1233) {
                currentScore += 49.3;
            } else if ($seconds > 1233 && $seconds <= 1288) {
                currentScore += 45.6;
            } else if ($seconds > 1288 && $seconds <= 1348) {
                currentScore += 40.8;
            } else {
                currentScore += 0;
                $rating.text("Unsatisfactory");
            }

            $runPoints.text(currentScore + " / 60");
            compositeScore += currentScore;
            currentScore = 0.0;

            // $pushups Ups Score
            if ($pushups >= 21) {
                currentScore += 10;
            } else if ($pushups == 20 || $pushups == 19) {
                currentScore += 9.5;
            } else if ($pushups == 18) {
                currentScore += 9.4;
            } else if ($pushups == 17) {
                currentScore += 9;
            } else if ($pushups == 16) {
                currentScore += 8.8;
            } else if ($pushups == 15) {
                currentScore += 8.5;
            } else if ($pushups == 14) {
                currentScore += 8;
            } else if ($pushups == 13) {
                currentScore += 7.5;
            } else if ($pushups == 12) {
                currentScore += 7;
            } else if ($pushups == 11) {
                currentScore += 6.5;
            } else if ($pushups == 10) {
                currentScore += 6;
            } else if ($pushups == 9) {
                currentScore += 5.7;
            } else if ($pushups == 8) {
                currentScore += 5.3;
            } else if ($pushups == 7) {
                currentScore += 6;
            } else {
                currentScore += 0;
                $rating.text("Unsatisfactory");
            }

            $pushupsPoints.text(currentScore + " / 10");
            compositeScore += currentScore;
            currentScore = 0.0;

            // $crunches Ups Score
            if ($crunches >= 31) {
                currentScore += 10;
            } else if ($crunches == 28 || $crunches == 29) {
                currentScore += 9.5;
            } else if ($crunches == 27) {
                currentScore += 9.4;
            } else if ($crunches == 26) {
                currentScore += 9;
            } else if ($crunches == 25) {
                currentScore += 8.9;
            } else if ($crunches == 24) {
                currentScore += 8.8;
            } else if ($crunches == 23) {
                currentScore += 8.7;
            } else if ($crunches == 22) {
                currentScore += 8.6;
            } else if ($crunches == 21) {
                currentScore += 8.5;
            } else if ($crunches == 20) {
                currentScore += 8.4;
            } else if ($crunches == 19) {
                currentScore += 8.3;
            } else if ($crunches == 18) {
                currentScore += 8.2;
            } else if ($crunches == 17) {
                currentScore += 8;
            } else if ($crunches == 16) {
                currentScore += 7.8;
            } else if ($crunches == 15) {
                currentScore += 7.5;
            } else if ($crunches == 14) {
                currentScore += 7.3;
            } else if ($crunches == 13) {
                currentScore += 7;
            } else if ($crunches == 12) {
                currentScore += 6.5;
            } else if ($crunches == 11) {
                currentScore += 6;
            } else {
                currentScore += 0;
                $rating.text("Unsatisfactory");
            }

            $crunchesPoints.text(currentScore + " / 10");
            compositeScore += currentScore;
            currentScore = 0.0;

        }


        // Adbominal Circumference
        if ($ac <= 31.5) {
            currentScore += 20;
        } else if ($ac == 32) {
            currentScore += 17.6;
        } else if ($ac == 32.5) {
            currentScore += 17.1;
        } else if ($ac == 33) {
            currentScore += 16.5;
        } else if ($ac == 33.5) {
            currentScore += 15.9;
        } else if ($ac == 34) {
            currentScore += 15.2;
        } else if ($ac == 34.5) {
            currentScore += 14.5;
        } else if ($ac == 35) {
            currentScore += 13.7;
        } else if ($ac == 35.5) {
            currentScore += 12.8;
        } else {
            currentScore += 0;
            $rating.text("Unsatisfactory");
        }
        $acPoints.text(currentScore + " / 20");
        compositeScore += currentScore;
        currentScore = 0.0;
    }



    if (rating == "Unsatisfactory") {
        // The DOM is already updated
        // However, we will tell the user how close they were
        $total.text(compositeScore + " / 100");
    } else {

        if (compositeScore >= 90) {
            $rating.text("Excellent");
            $total.text(compositeScore + " / 100")

        } else if (compositeScore >= 75 && compositeScore < 90) {
            $rating.text("Satisfactory");
            $total.text(compositeScore + " / 100")

        } else {
            $rating.text("Unsatisfactory");
            $total.text(compositeScore + " / 100")

        }
    }


}