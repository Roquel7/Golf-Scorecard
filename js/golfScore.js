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

    $("#myTable").append("<tr id='secondRow'> <th></th> </tr>")

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


// function Rows() {
//     let secondR = "<tr id='secondRow'> <th id='sCells'></th> </tr>"
//     for (let i = 1; i <= 21; i++) {
//         $("#secondRow").append("<td></td>")

//     }
//     $("#myTable").append(secondR)
// }

//we might have to have the table tag separate for other rows to be inserted without a problem. 

/* <tr>
<th></th>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>

</tr>
<tr>
<th></th>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<th></th>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr> */