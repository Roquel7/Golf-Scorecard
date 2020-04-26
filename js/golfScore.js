function golfCard() {
    document.getElementById('myTable').innerHTML = "<tr id='firstRow'> <th>Hole</th> </tr>";
    for (let i = 1; i <= 9; i++) {
        $("#firstRow").append("<td>" + i + "</td>")
    }
    $("#firstRow").append("<td>OUT</td> <td rowspan=5 class='initials'> INITIALS </td>")
    for (let i = 10; i <= 18; i++) {
        $("#firstRow").append("<td>" + i + "</td>")
    }
    $("#firstRow").append("<td>IN</td> <td>TOTAL</td>")


    //This is the second row
    $("#myTable").append("<tr id='secondRow'> <th id='firstCourse'></th> </tr>")

    secondRow();
    thirdRow();
    fourRow();
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

function secondRow() {

    for (let i = 1; i <= 21; i++) {
        $("#secondRow").append("<td></td>")
    }
}

function thirdRow() {

    let third = document.createElement("tr")
    let thirdHeader = document.createElement("th")
    third.appendChild(thirdHeader);
    third.id = "thirdRow";
    thirdHeader.id="secondCourse";
    $("#myTable").append(third)
    
    for (let i = 1; i <= 21; i++) {
        $("#thirdRow").append("<td></td>")
    }
    $("#myTable").append(third);
}

function fourRow() {

    let fourth = document.createElement("tr")
    let fourthHeader = document.createElement("th")
    fourth.appendChild(fourthHeader);
    fourth.id = "fourthRow";
    fourthHeader.id="thirdCourse";
    $("#myTable").append(fourth)
    
    for (let i = 1; i <= 21; i++) {
        $("#fourthRow").append("<td></td>")
    }
    $("#myTable").append(fourth);
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

$.getJSON("https://golf-courses-api.herokuapp.com/courses", function(data) {

    // example to get an API
    // let courseOne = "https://golf-courses-api.herokuapp.com/courses/" + data.courses[0].id;
    // console.log(courseOne);


    let firstCourseName = data.courses[0].name;

    let secondCourseName = data.courses[1].name;

    let thirdourseName = data.courses[2].name;


    document.getElementById('firstCourse').append(firstCourseName);
    document.getElementById('secondCourse').append(secondCourseName);
    document.getElementById('thirdCourse').append(thirdourseName);
});