//
//
//**PUZZLE**
//
//
//Puzzle 1 Toggles

function showPuzzleText(puzzleID) {
  document.getElementById(puzzleID).classList.toggle('hidden');
}

function showPuzzleLine(puzzleID) {
  document.getElementById(puzzleID).classList.toggle('hidden');
}

let currentlyInvisible1 = false;

function toggleOpacityPuzzle1() {
  showPuzzleText("puzzleWhat");
  showPuzzleLine("what-line");

    if (currentlyInvisible1) {
      document.getElementById('puzzle1').style.opacity = 1;
      currentlyInvisible1 = false;
    } else {
      document.getElementById('puzzle1').style.opacity = 0;
      currentlyInvisible1 = true;
    }
}
document.getElementById('puzzle1').onclick = toggleOpacityPuzzle1;

//Puzzle 2 Toggles
let currentlyInvisible2 = false;

function toggleOpacityPuzzle2() {
  showPuzzleText("puzzleSymptoms");
  showPuzzleLine("symptoms-line");

    if (currentlyInvisible2) {
      document.getElementById('puzzle2').style.opacity = 1;
      currentlyInvisible2 = false;
    } else {
      document.getElementById('puzzle2').style.opacity = 0;
      currentlyInvisible2 = true;
    }
}
document.getElementById('puzzle2').onclick = toggleOpacityPuzzle2;

//Puzzle 3 Toggles
let currentlyInvisible3 = false;

function toggleOpacityPuzzle3() {
  showPuzzleText("puzzleRisk");
  showPuzzleLine("risk-line");

    if (currentlyInvisible3) {
      document.getElementById('puzzle3').style.opacity = 1;
      currentlyInvisible3 = false;
    } else {
      document.getElementById('puzzle3').style.opacity = 0;
      currentlyInvisible3 = true;
    }
}
document.getElementById('puzzle3').onclick = toggleOpacityPuzzle3;

//Puzzle 4 Toggles
let currentlyInvisible4 = false;

function toggleOpacityPuzzle4() {
  showPuzzleText("puzzleGlobal");
  showPuzzleLine("global-line");

    if (currentlyInvisible4) {
      document.getElementById('puzzle4').style.opacity = 1;
      currentlyInvisible4 = false;
    } else {
      document.getElementById('puzzle4').style.opacity = 0;
      currentlyInvisible4 = true;
    }
}
document.getElementById('puzzle4').onclick = toggleOpacityPuzzle4;

//Puzzle 5 Toggles
let currentlyInvisible5 = false;

function toggleOpacityPuzzle5() {
  showPuzzleText("puzzleHow");
  showPuzzleLine("how-line");

    if (currentlyInvisible5) {
      document.getElementById('puzzle5').style.opacity = 1;
      currentlyInvisible5 = false;
    } else {
      document.getElementById('puzzle5').style.opacity = 0;
      currentlyInvisible5 = true;
    }
}
document.getElementById('puzzle5').onclick = toggleOpacityPuzzle5;

//Puzzle 6 Toggles
let currentlyInvisible6 = false;

function toggleOpacityPuzzle6() {
  showPuzzleText("puzzleProtect");
  showPuzzleLine("protect-line");

    if (currentlyInvisible6) {
      document.getElementById('puzzle6').style.opacity = 1;
      currentlyInvisible6 = false;
    } else {
      document.getElementById('puzzle6').style.opacity = 0;
      currentlyInvisible6 = true;
    }
}
document.getElementById('puzzle6').onclick = toggleOpacityPuzzle6;
//
//
//**TIMELINE**
//
//

//Timeline December On Click (show text and line)

function showTimelineText(timelineID) {
  document.getElementById(timelineID).classList.toggle('hidden');
}

function showTimelineLine(timelineID) {
  document.getElementById(timelineID).classList.toggle('hidden');
}

function TimelineDecShow() {
  showTimelineText("timeline-dec13-text");
  showTimelineLine("timeline-december13-line");
}

document.getElementById("december-arrow").onclick = TimelineDecShow;

//Timeline January On Click (show text and line)

function TimelineJanShow() {
  showTimelineText("timeline-jan11-text");
  showTimelineText("timeline-jan20-text");
  showTimelineText("timeline-jan30-text");

  showTimelineLine("timeline-jan11-line");
  showTimelineLine("timeline-jan20-line");
  showTimelineLine("timeline-jan30-line");
}

document.getElementById("jan-arrow").onclick = TimelineJanShow;

//Timeline February On Click (show text and line)

function TimelineFebShow() {
  showTimelineText("timeline-feb2-text");
  showTimelineText("timeline-feb5-text");
  showTimelineText("timeline-feb7-text");
  showTimelineText("timeline-feb29-text");

  showTimelineLine("timeline-feb2-line");
  showTimelineLine("timeline-feb5-line");
  showTimelineLine("timeline-feb7-line");
  showTimelineLine("timeline-feb29-line");
}

document.getElementById("feb-arrow").onclick = TimelineFebShow;

//Timeline March On Click (show text and line)

function TimelineMarchShow() {
  showTimelineText("timeline-march27-text");
  showTimelineLine("timeline-march27-line");
}

document.getElementById("march-arrow").onclick = TimelineMarchShow;

//Timeline April On Click (show text and line)

function TimelineAprilShow() {
  showTimelineText("timeline-april2-text");
  showTimelineLine("timeline-april2-line");
}

document.getElementById("april-arrow").onclick = TimelineAprilShow;

/*
function showPuzzle1Piece(puzzleID) {
  var opacity = document.getElementById("puzzle1").style.opacity;
  if (opacity === "0") {
    document.getElementById("puzzle1").style.opacity = "1";
  }
}

document.getElementById("puzzle1").onclick = showPuzzle1Piece;
*/

//Puzzle 2 show/hide







/*
function hide(puzzleID) {
  document.getElementById(puzzleID).classList.toggle('hide');
}

function hidePuzzle1(){
  hide("puzzle1");
}

document.getElementById("puzzle1").onclick = hidePuzzle1;





      <img src="assets/images/puzzles/puzzle1.png" id="puzzle1">
*/
