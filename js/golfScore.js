function createScorecard() {
    document.getElementById('myTable').innerHTML = "<tr id='firstRow'> <th>Hole</th> </tr>";
    for (let i = 1; i <= 9; i++) {
        $("#firstRow").append("<td>" + i + "</td>")
    }
    $("#firstRow").append("<td>OUT</td> <td rowspan=5 class='initials'>  </td>")
    for (let i = 10; i <= 18; i++) {
        $("#firstRow").append("<td>" + i + "</td>")
    }
    $("#firstRow").append("<td>IN</td> <td>TOTAL</td>")


    //This is the second row
    $("#myTable").append("<tr id='secondRow'> <th id='firstCourse'></th> </tr>")
    secondRow();

    $("#myTable").append("<tr id='thirdRow'> <th id='secondCourse'></th> </tr>")
    thirdRow();

    $("#myTable").append("<tr id='fourthRow'> <th id='thirdCourse'></th> </tr>")
    fourthRow();

    fifthRow();

    $("#myTable").append("<tr id='sixthRow'> <th> <input class='names firstName' type='text' placeholder='1st Name'> </th> </tr>")
    sixthRow();

    $("#myTable").append("<tr id='seventhRow'> <th> <input class='names firstName' type='text' placeholder='2nd Name'> </th> </tr>")
    seventhRow();

    $("#myTable").append("<tr id='eightRow'> <th> <input class='names firstName' type='text' placeholder='3rd Name'> </th> </tr>")
    eightRow();

    $("#myTable").append("<tr id='ninthRow'> <th> <input class='names firstName' type='text' placeholder='4th Name'> </th> </tr>")
    ninthRow();

    tenthRow()
}

//example to add a looped number in an id
// function secondRow() {

//     for (let i = 1; i <= 9; i++) {
//         $("#secondRow").append("<td id='firstCourseHole" + i + "' ></td>")
//     }
//     $("#secondRow").append("<td></td>")
//     for (let i = 10; i <= 18; i++) {
//         $("#secondRow").append("<td id='firstCourseHole" + i + "' ></td>")
//     }
//     $("#secondRow").append("<td></td> <td></td>")

// }


//Course 1 (fox follow) yards, color, and par. 

function secondRow() {
    $.getJSON("https://golf-courses-api.herokuapp.com/courses/18300", function(data) {

        // pars for this course
        let holesOne = data.data.holes;    
        
        console.log(holesOne.filter(val => val.hole >= 10).reduce(function(acc, hole) {return acc + hole.teeBoxes[0].par}, 0))
        console.log(holesOne.filter(val => val.hole < 10).map(hole => hole.teeBoxes[0].par))

        for (let j = 0; j <= 8; j++) {
    
                let firstYards = data.data.holes[j].teeBoxes[0].yards;
    
                $("#secondRow").append("<td id='firstCourseHole'>"+ firstYards + "</td>");
        }

        //adding up yards in OUT
        $("#secondRow").append("<td id ='firstCourseOut'></td>")

        let yardTotalOut = (holesOne.filter(val => val.hole <= 9).reduce(function(acc, hole) {return acc + hole.teeBoxes[0].yards}, 0))
        document.getElementById('firstCourseOut').append(yardTotalOut);

        for (let i = 9; i <= 17; i++) {
    
            let ContinuedFirstYards = data.data.holes[i].teeBoxes[0].yards;

            $("#secondRow").append("<td id='firstCourseHole'>"+ ContinuedFirstYards + "</td>");            
        }

        //adding up the yards in IN
        $("#secondRow").append(" <td id ='firstCourseIn'></td>")

        let yardTotalIn = (holesOne.filter(val => val.hole >= 10).reduce(function(acc, hole) {return acc + hole.teeBoxes[0].yards}, 0))
        document.getElementById('firstCourseIn').append(yardTotalIn);


        //adding for total yards
        $("#secondRow").append(" <td id ='firstCourseTotal'></td>")

        let yardTotalTotal = (holesOne.filter(val => val.hole <= 18).reduce(function(acc, hole) {return acc + hole.teeBoxes[0].yards}, 0))
        document.getElementById('firstCourseTotal').append(yardTotalTotal);

    });
}

function thirdRow() {
    $.getJSON("https://golf-courses-api.herokuapp.com/courses/11819", function(data) {

        // pars for this course
        let holesTwo = data.data.holes;

        console.log(holesTwo.filter(val => val.hole >= 10).reduce(function(acc, hole) {return acc + hole.teeBoxes[0].par}, 0))
        console.log(holesTwo.filter(val => val.hole < 10).map(hole => hole.teeBoxes[0].par))

        for (let j = 0; j <= 8; j++) {
    
            let secondYards = data.data.holes[j].teeBoxes[0].yards;

            $("#thirdRow").append("<td id='secondCourseHole'>"+ secondYards + "</td>");
        }


        //adding up the yards in OUT
        $("#thirdRow").append("<td id ='secondCourseOut'></td>");

        let yardOut = (holesTwo.filter(val => val.hole <= 9).reduce(function(acc, hole) {return acc + hole.teeBoxes[0].yards}, 0))
        document.getElementById('secondCourseOut').append(yardOut);

        for (let i = 9; i <= 17; i++) {
    
            let continuedSecondYards = data.data.holes[i].teeBoxes[0].yards;

            $("#thirdRow").append("<td id='secondCourseHole'>"+ continuedSecondYards + "</td>");            
        }

        //adding up the yards in IN
        $("#thirdRow").append("<td id='secondCourseIn'></td>");

        let YardsIn = (holesTwo.filter(val => val.hole >= 10).reduce(function(acc, hole) {return acc + hole.teeBoxes[0].yards}, 0))
        document.getElementById('secondCourseIn').append(YardsIn);


        //adding for total yards
        $("#thirdRow").append(" <td id ='secondCourseTotal'></td>")

        let yardTotal = (holesTwo.filter(val => val.hole <= 18).reduce(function(acc, hole) {return acc + hole.teeBoxes[0].yards}, 0))
        document.getElementById('secondCourseTotal').append(yardTotal);
    });
}

function fourthRow() {
    $.getJSON("https://golf-courses-api.herokuapp.com/courses/19002", function(data) {

        // pars for this course
        let holesThree = data.data.holes;

        console.log(holesThree.filter(val => val.hole >= 10).reduce(function(acc, hole) {return acc + hole.teeBoxes[0].par}, 0))
        console.log(holesThree.filter(val => val.hole < 10).map(hole => hole.teeBoxes[0].par))

    
        for (let j = 0; j <= 8; j++) {
    
            let secondYards = data.data.holes[j].teeBoxes[0].yards;
    
            $("#fourthRow").append("<td id='firstCourseHole'>"+ secondYards + "</td>");
        }

        $("#fourthRow").append(" <td id ='thirdCourseOut'></td>")

        //adding up the yards in OUT
        let yardOut = (holesThree.filter(val => val.hole <= 9).reduce(function(acc, hole) {return acc + hole.teeBoxes[0].yards}, 0))
        document.getElementById('thirdCourseOut').append(yardOut);

        for (let i = 9; i <= 17; i++) {
    
            let continuedSecondYards = data.data.holes[i].teeBoxes[0].yards;

            $("#fourthRow").append("<td id='thirdCourseHole'>"+ continuedSecondYards + "</td>");            
        }

        //adding up the yards in IN
        $("#fourthRow").append("<td id='thirdCourseIn'></td>");

        let YardsIn = (holesThree.filter(val => val.hole >= 10).reduce(function(acc, hole) {return acc + hole.teeBoxes[0].yards}, 0))
        document.getElementById('thirdCourseIn').append(YardsIn);


        //adding for total yards
        $("#fourthRow").append(" <td id ='thirdCourseTotdal'></td>")

        let yardTotal = (holesThree.filter(val => val.hole <= 18).reduce(function(acc, hole) {return acc + hole.teeBoxes[0].yards}, 0))
        document.getElementById('thirdCourseTotdal').append(yardTotal);

    });
}

function fifthRow() {

    let fifth = document.createElement("tr")
    let fifthHeader = document.createElement("th")
    fifthHeader.innerText = "Handicap";
    fifth.appendChild(fifthHeader);
    fifth.id = "fifthRow";
    $("#myTable").append(fifth)
    
    for (let i = 1; i <= 21; i++) {
        $("#fifthRow").append("<td></td>")
    }
    $("#myTable").append(fifth);
} 

function sixthRow() {

    for (let i = 1; i <= 9; i++) {
        $("#sixthRow").append("<td> <input class='numberCells' type='number' min='1' max='99'> </td>")
    }
    $("#sixthRow").append("<td></td> <td></td>")
    for (let i = 9; i <=17 ; i++) {
        $("#sixthRow").append("<td> <input class='numberCells' type='number' min='1' max='99'> </td>")
    }
    $("#sixthRow").append("<td></td> <td></td>")

}

function seventhRow() {

    for (let i = 1; i <= 9; i++) {
        $("#seventhRow").append("<td> <input class='numberCells' type='number' min='1' max='99'> </td>")
    }
    $("#seventhRow").append("<td></td> <td></td>")
    for (let i = 9; i <=17 ; i++) {
        $("#seventhRow").append("<td> <input class='numberCells' type='number' min='1' max='99'> </td>")
    }
    $("#seventhRow").append("<td></td> <td></td>")

}

function eightRow() {

    for (let i = 1; i <= 9; i++) {
        $("#eightRow").append("<td> <input class='numberCells' type='number' min='1' max='99'> </td>")
    }
    $("#eightRow").append("<td></td> <td></td>")
    for (let i = 9; i <=17 ; i++) {
        $("#eightRow").append("<td> <input class='numberCells' type='number' min='1' max='99'> </td>")
    }
    $("#eightRow").append("<td></td> <td></td>")

}

function ninthRow() {

    for (let i = 1; i <= 9; i++) {
        $("#ninthRow").append("<td> <input class='numberCells' type='number' min='1' max='99'> </td>")
    }
    $("#ninthRow").append("<td></td> <td></td>")
    for (let i = 9; i <=17 ; i++) {
        $("#ninthRow").append("<td> <input class='numberCells' type='number' min='1' max='99'> </td>")
    }
    $("#ninthRow").append("<td></td> <td></td>")

}

function tenthRow() {

    let tenth = document.createElement("tr")
    let tenthHeader = document.createElement("th")
    tenthHeader.innerText = "Par";
    tenth.appendChild(tenthHeader);
    tenth.id = "tenthRow";
    $("#myTable").append(tenth)
    
    for (let i = 1; i <= 22; i++) {
        $("#tenthRow").append("<td></td>")
    }
    $("#myTable").append(tenth);
} 

//Names of the Courses
$.getJSON("https://golf-courses-api.herokuapp.com/courses", function(data) {

    // example to get an API
    // let courseOne = "https://golf-courses-api.herokuapp.com/courses/" + data.courses[0].id;
    // console.log(courseOne);


    let firstCourseName = data.courses[0].name;

    let secondCourseName = data.courses[1].name;

    let thirdCourseName = data.courses[2].name;


    document.getElementById('firstCourse').append(firstCourseName);
    document.getElementById('secondCourse').append(secondCourseName);
    document.getElementById('thirdCourse').append(thirdCourseName);

});


//Course details
$.getJSON("https://golf-courses-api.herokuapp.com/courses/18300", function(data) {

    //FOX HOLLOW 18300

    // example to get an API
    // let courseOne = "https://golf-courses-api.herokuapp.com/courses/18300";
    // console.log(courseOne);
    console.log(data)

});

$.getJSON("https://golf-courses-api.herokuapp.com/courses/11819", function(data) {

    //THANKSGIVING POINT 11819
    console.log(data)
});

$.getJSON("https://golf-courses-api.herokuapp.com/courses/19002", function(data) {

    //SPANISH OAKS 19002
    console.log(data)
});