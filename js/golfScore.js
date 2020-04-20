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
    $("#myTable").append("<tr id='thirdRow'> <th></th> </tr>")
    $("#myTable").append("<tr id='fourthRow'> <th></th> </tr>")

    rowTwo();
    rowThree();
    rowFour();
}

function rowTwo() {
    document.getElementById('secondRow');
    for (let i = 1; i <= 20; i++) {
        $("#secondRow").append("<td></td>")
    }
}

function rowThree() {
    document.getElementById('thirdRow');
    for (let i = 1; i <= 20; i++) {
        $("#thirdRow").append("<td></td>")
    }
}

function rowFour() {
    document.getElementById('fourthRow');
    for (let i = 1; i <= 20; i++) {
        $("#fourthRow").append("<td></td>")
    }
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