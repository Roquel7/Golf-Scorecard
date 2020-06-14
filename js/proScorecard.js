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
    $("#myTable").append("<tr id='secondRow'> <th id='firstCourse' class='checked' ></th> </tr>")
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

    $("#myTable").append("<tr id='eighthRow'> <th> <input class='names firstName' type='text' placeholder='3rd Name'> </th> </tr>")
    eighthRow();

    $("#myTable").append("<tr id='ninthRow'> <th> <input class='names firstName' type='text' placeholder='4th Name'> </th> </tr>")
    ninthRow();

    $("#myTable").append("<tr id='tenthRow'> <th>Pars</th> </tr>")
}

function secondRow() {

    $("#firstCourse").click(function() {
        $(this).toggleClass("checked");

    });

    $.getJSON("https://golf-courses-api.herokuapp.com/courses/18300", function(data) {

        // pars for this course
        let holesOne = data.data.holes;    
        let oneParOut = holesOne.filter(val => val.hole < 10).map(hole => hole.teeBoxes[0].par);
        let oneParIn = holesOne.filter(val => val.hole <= 18).map(hole => hole.teeBoxes[0].par);
        let parTotalOut = holesOne.filter(val => val.hole <= 9).reduce(function(acc, hole) {return acc + hole.teeBoxes[0].par}, 0);
        let parTotalIn = holesOne.filter(val => val.hole >= 10).reduce(function(acc, hole) {return acc + hole.teeBoxes[0].par}, 0);
        let parTotal = holesOne.filter(val => val.hole <= 18).reduce(function(acc, hole) {return acc + hole.teeBoxes[0].par}, 0);


        for (let j = 0; j <= 8; j++) {
    
                let firstYards = data.data.holes[j].teeBoxes[0].yards;
    
                $("#secondRow").append("<td id='firstCourseHole'>"+ firstYards + "</td>");

        }
        
        //setting up the par cells
        for (let r = 0; r < oneParOut.length; r++) {
            $("#tenthRow").append("<td class='pars'> "+oneParOut[r]+"</td>")
            
        }

        $("#tenthRow").append("<td>"+parTotalOut+"</td><td></td>");


        for (let r = 9; r < oneParIn.length; r++) {
            $("#tenthRow").append("<td class='pars'> "+oneParIn[r]+" ")
            
        }

        $("#tenthRow").append("<td>"+parTotalIn+"</td><td>"+parTotal+"</td>");

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

    $("#secondCourse").click(function() {
        $(this).toggleClass("checked");

    });

    $.getJSON("https://golf-courses-api.herokuapp.com/courses/11819", function(data) {

        // pars for this course
        let holesTwo = data.data.holes;
        // console.log(holesTwo.filter(val => val.hole >= 10).reduce(function(acc, hole) {return acc + hole.teeBoxes[0].par}, 0))
        // console.log(holesTwo.filter(val => val.hole < 10).map(hole => hole.teeBoxes[0].par))
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

    $("#thirdCourse").click(function() {
        $(this).toggleClass("checked");

    });

    $.getJSON("https://golf-courses-api.herokuapp.com/courses/19002", function(data) {

        // pars for this course
        let holesThree = data.data.holes;
        // console.log(holesThree.filter(val => val.hole >= 10).reduce(function(acc, hole) {return acc + hole.teeBoxes[0].par}, 0))
        // console.log(holesThree.filter(val => val.hole < 10).map(hole => hole.teeBoxes[0].par))
        for (let j = 0; j <= 8; j++) {

            //spanish oaks does not have a pro yardage and info
    
            // let secondYards = data.data.holes[j].teeBoxes[0].yards;
    
            $("#fourthRow").append("<td id='firstCourseHole'></td>");
        }

        $("#fourthRow").append(" <td id ='thirdCourseOut'></td>")

        //adding up the yards in OUT
        // let yardOut = (holesThree.filter(val => val.hole <= 9).reduce(function(acc, hole) {return acc + hole.teeBoxes[0].yards}, 0))
        // document.getElementById('thirdCourseOut').append(yardOut);

        for (let i = 9; i <= 17; i++) {
    
            // let continuedSecondYards = data.data.holes[i].teeBoxes[0].yards;

            $("#fourthRow").append("<td id='thirdCourseHole'></td>");            
        }

        //adding up the yards in IN
        $("#fourthRow").append("<td id='thirdCourseIn'></td>");

        // let YardsIn = (holesThree.filter(val => val.hole >= 10).reduce(function(acc, hole) {return acc + hole.teeBoxes[0].yards}, 0))
        // document.getElementById('thirdCourseIn').append(YardsIn);


        //adding for total yards
        $("#fourthRow").append(" <td id ='thirdCourseTotdal'></td>")

        // let yardTotal = (holesThree.filter(val => val.hole <= 18).reduce(function(acc, hole) {return acc + hole.teeBoxes[0].yards}, 0))
        // document.getElementById('thirdCourseTotdal').append(yardTotal);

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
        $("#sixthRow").append("<td class='sixthRowCell "+ i +"'> <input type='number' class='numberCells num firstSumOut' min='0' max='99'> </td>")
    }

    //creates cell that adds the pars for OUT
    $("#sixthRow").append("<td class='cellNumOut'> <output id='firstOut' > </td> <td></td>")

    $('.sixthRowCell').on('input', '.firstSumOut', function() {
        let totalSum = 0;
        $('.sixthRowCell .firstSumOut').each(function() {
            let inputValue = $(this).val();
            if($.isNumeric(inputValue)) {
                totalSum += parseFloat(inputValue);
            }
        });
        $('#firstOut').text(totalSum);

    });

    for (let i = 10; i <=18 ; i++) {
        $("#sixthRow").append("<td class='sixthRowCell "+ i +"'> <input type='number' class='numberCells num firstSumIn' min='0' max='99'> </td>")
    }

    $("#sixthRow").append("<td class='cellNumIn'> <output id='firstIn'> </td> <td><output id='firstTotal'></td>")


    $('.sixthRowCell').on('input', '.firstSumIn', function() {
        let totalSum = 0;
        $('.sixthRowCell .firstSumIn').each(function() {
            let inputValue = $(this).val();
            if($.isNumeric(inputValue)) {
                totalSum += parseFloat(inputValue);
            }
        });
        $('#firstIn').text(totalSum);          
    });

    //this add total par for the player in TOTAL
    $('.sixthRowCell').on('input', '.num', function() {
        let totalSum = 0;
        $('.sixthRowCell .num').each(function() {
            let inputValue = $(this).val();
            if($.isNumeric(inputValue)) {
                totalSum += parseFloat(inputValue);
            }
        });
        $('#firstTotal').text(totalSum);   

        
        $('#firstTotal').on('click', function() {
            toastr.options = {
                "closeButton": false,
                "debug": false,
                "newestOnTop": false,
                "progressBar": false,
                "positionClass": "toast-top-right",
                "preventDuplicates": true,
                "onclick": null,
                "showDuration": "300",
                "hideDuration": "1000",
                "timeOut": "5000",
                "extendedTimeOut": "1000",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
              }
              toastr["success"]("Congrats Player 1!", "Success!")
        })
    });

}

function seventhRow() {

    for (let i = 1; i <= 9; i++) {
        $("#seventhRow").append("<td class='seventhRowCell "+ i +"'> <input type='number' class='numberCells num secondSumOut' min='0' max='99'> </td>")
    }

    //creates cell that adds the pars for OUT
    $("#seventhRow").append("<td class='cellNumOut'> <output id='secondOut'> </td> <td></td>")

    $('.seventhRowCell').on('input', '.secondSumOut', function() {
        let totalSum = 0;
        $('.seventhRowCell .secondSumOut').each(function() {
            let inputValue = $(this).val();
            if($.isNumeric(inputValue)) {
                totalSum += parseFloat(inputValue);
            }
        });
        $('#secondOut').text(totalSum);
    });

    for (let i = 10; i <=18 ; i++) {
        $("#seventhRow").append("<td class='seventhRowCell "+ i +"'> <input type='number' class='numberCells num secondSumIn' min='1' max='99'> </td>")
    }

    $("#seventhRow").append("<td class='cellNumIn'> <output id='secondIn'> </td> <td><output id='secondTotal'></td>")


    $('.seventhRowCell').on('input', '.secondSumIn', function() {
        let totalSum = 0;
        $('.seventhRowCell .secondSumIn').each(function() {
            let inputValue = $(this).val();
            if($.isNumeric(inputValue)) {
                totalSum += parseFloat(inputValue);
            }
        });
        $('#secondIn').text(totalSum);
    });

    $('.seventhRowCell').on('input', '.num', function() {
        let totalSum = 0;
        $('.seventhRowCell .num').each(function() {
            let inputValue = $(this).val();
            if($.isNumeric(inputValue)) {
                totalSum += parseFloat(inputValue);
            }
        });
        $('#secondTotal').text(totalSum);          
    });

    $('#secondTotal').on('click', function() {
        toastr.options = {
            "closeButton": false,
            "debug": false,
            "newestOnTop": false,
            "progressBar": false,
            "positionClass": "toast-top-right",
            "preventDuplicates": true,
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
          }
          toastr["success"]("Congrats Player 2!", "Success!")
    })

}

function eighthRow() {

    for (let i = 1; i <= 9; i++) {
        $("#eighthRow").append("<td class='eighthRowCell "+ i +"'> <input type='number' class='numberCells num thirdSumOut' min='0' max='99'> </td>")
    }

    //creates cell that adds the pars for OUT
    $("#eighthRow").append("<td class='cellNumOut'> <output id='thirdOut'> </td> <td></td>")

    $('.eighthRowCell').on('input', '.thirdSumOut', function() {
        let totalSum = 0;
        $('.eighthRowCell .thirdSumOut').each(function() {
            let inputValue = $(this).val();
            if($.isNumeric(inputValue)) {
                totalSum += parseFloat(inputValue);
            }
        });
        $('#thirdOut').text(totalSum);
    });

    for (let i = 10; i <=18 ; i++) {
        $("#eighthRow").append("<td class='eighthRowCell "+ i +"'> <input type='number' class='numberCells num thirdSumIn' min='1' max='99'> </td>")
    }

    $("#eighthRow").append("<td class='cellNumIn'> <output id='thirdIn'> </td> <td><output id='thirdTotal'></td>")


    $('.eighthRowCell').on('input', '.thirdSumIn', function() {
        let totalSum = 0;
        $('.eighthRowCell .thirdSumIn').each(function() {
            let inputValue = $(this).val();
            if($.isNumeric(inputValue)) {
                totalSum += parseFloat(inputValue);
            }
        });
        $('#thirdIn').text(totalSum);
    });

    $('.eighthRowCell').on('input', '.num', function() {
        let totalSum = 0;
        $('.eighthRowCell .num').each(function() {
            let inputValue = $(this).val();
            if ($.isNumeric(inputValue)) {
                totalSum += parseFloat(inputValue);
            }
        });
        $('#thirdTotal').text(totalSum);
    });

    $('#thirdTotal').on('click', function() {
        toastr.options = {
            "closeButton": false,
            "debug": false,
            "newestOnTop": false,
            "progressBar": false,
            "positionClass": "toast-top-right",
            "preventDuplicates": true,
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
          }
          toastr["success"]("Congrats Player 3!", "Success!")
    })

}

function ninthRow() {

    for (let i = 1; i <= 9; i++) {
        $("#ninthRow").append("<td class='ninthRowCell "+ i +"'> <input type='number' class='numberCells num fourthSumOut' min='0' max='99'> </td>")
    }

    //creates cell that adds the pars for OUT
    $("#ninthRow").append("<td class='cellNumOut'> <output id='fourthOut'> </td> <td></td>")

    $('.ninthRowCell').on('input', '.fourthSumOut', function() {
        let totalSum = 0;
        $('.ninthRowCell .fourthSumOut').each(function() {
            let inputValue = $(this).val();
            if($.isNumeric(inputValue)) {
                totalSum += parseFloat(inputValue);
            }
        });
        $('#fourthOut').text(totalSum);
    });

    for (let i = 10; i <=18 ; i++) {
        $("#ninthRow").append("<td class='ninthRowCell "+ i +"'> <input type='number' class='numberCells num fourthSumIn' min='1' max='99'> </td>")
    }

    $("#ninthRow").append("<td class='cellNumIn'> <output id='fourthIn'> </td> <td><output id='fourthTotal'></td>")

    $('.ninthRowCell').on('input', '.fourthSumIn', function() {
        let totalSum = 0;
        $('.ninthRowCell .fourthSumIn').each(function() {
            let inputValue = $(this).val();
            if($.isNumeric(inputValue)) {
                totalSum += parseFloat(inputValue);
            }
        });
        $('#fourthIn').text(totalSum);
    });

    $('.ninthRowCell').on('input', '.num', function() {
        let totalSum = 0;
        $('.ninthRowCell .num').each(function() {
            let inputValue = $(this).val();
            if ($.isNumeric(inputValue)) {
                totalSum += parseFloat(inputValue);
            }
        });
        $('#fourthTotal').text(totalSum);
    });

    $('#fourthTotal').on('click', function() {
        toastr.options = {
            "closeButton": false,
            "debug": false,
            "newestOnTop": false,
            "progressBar": false,
            "positionClass": "toast-top-right",
            "preventDuplicates": true,
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
          }
          toastr["success"]("Congrats Player 4!", "Success!")
    })
}

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
