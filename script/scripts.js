$(document).ready(() => {
    $("#submit").on("click", () => {
        getScores();
        getOutputs();
    });
});

const getScores = () => {
    $minutes = $("#minutes").val();
    $seconds = $("#seconds").val();
    $ac = $("#ac").val();
    $pushups = $("#pushups").val();
    $crunches = $("#crunches").val();
}

const getOutputs = () => {
    $runPoints = $("#run-points");
    $acPoints = $("#ac-points");
    $pushupsPoints = $("#pushups-points");
    $crunchesPoints = $("#crunches-points");
    $total = $("#total");
    $rating = $("#rating");
}