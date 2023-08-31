var modal_open_btn = document.getElementById('myBtn');

var modal_div = document.getElementById('myModal');

var modal_close_btn = document.getElementsByClassName('close')[0];

//do the open 
modal_open_btn.onclick = function () {
    modal_div.style.display = 'block';
}

//do the close 
modal_close_btn.onclick = function () {
    modal_div.style.display = 'none';
}

//when around the modal
window.onclick = function (event) {
    if (event.target == modal_div) {
        modal_div.style.display = 'none';
    }
}
// age slider
var slider = document.getElementById('age');
var output = document.getElementById('ageRange');
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
}
//student info function
function sendStudentinfo(e) {
    e.preventDefault();


    var name, gender, age, nationality

    name = document.getElementById('name').value;
    gender = document.getElementById('gender').value;
    age = document.getElementById('age').value;
    nationality = document.getElementById('nationality').value;

    // generate questions 
    var questions;

    questions = '<h1> BIBLE QUESTIONS </h1>';

    questions += '<pre id="student_info">Name: <strong>' + name + '</strong> ';
    questions += 'Gender: <strong>' + gender + '</strong>    ';
    questions += 'Age: <strong>' + age + '</strong>   ';
    questions += 'Nationality: <strong>' + nationality + '</strong> </pre>';


    questions += generateDate();
    questions += generateQuestion();

    // submit button
    questions += '<button class="btn" onclick="submitAnswer(event)">Submit Answer</button>';
    questions += '';




    document.getElementById('question_header').innerHTML = questions;


    //close modal
    modal_div.style.display = 'none';

    // hide origional button
    modal_open_btn.style.display = 'none';

}
//    generate date 

function generateDate() {
    var thisDate = '';
    var today = new Date();
    var date = today.getDate();
    var day = today.getDay();
    var month = today.getMonth();
    var year = today.getFullYear();

    switch (day) {
        case 0:
            thisDate += 'sunday';
            break;
        case 1:
            thisDate += 'Monday';
            break;
        case 2:
            thisDate += 'Tuesday';
            break;
        case 3:
            thisDate += 'Wednesday';
            break;
        case 4:
            thisDate += 'Thursday';
            break;
        case 5:
            thisDate += 'Friday';
            break;
        case 6:
            thisDate += 'saturday';
            break;
    }

    var monthsArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    var thisMonth = monthsArr[month];

    // wednesday july 21,2021
    thisDate += ' ' + thisMonth + ' ' + date + ', ' + year;
    return thisDate;
}
// generate questions 
function generateQuestion() {
    var trafficQuestion = '', str;


    var questionsArray = [
        'Which prophet is known as the "weeping prophet"?',
        'In the book of Genesis, who was the father of Ishmael?',
        'Which of the following is not one of the twelve apostles?',
        'Who wrote the majority of the New Testament epistles (letters)?',
        'Which king ordered the three Hebrew men—Shadrach, Meshach, and Abednego—to be thrown into the fiery furnace?',
        'In the book of Acts, which apostle was known as the "apostle to the Gentiles"?',
        'Who is the author of the book of Revelation?',
        'Which of the following is one of the fruits of the Spirit mentioned in Galatians 5:22-23?',
        'Which Old Testament figure is known for his extraordinary strength and was betrayed by Delilah?',
        'In the parable of the prodigal son, how does the younger son waste his inheritance?',
    ];

    //10qu + 4 = 40 choices
    var choicesArray = [
        'Isaiah,  Ezekiel, Daniel, Jeremiah  ',
        'Isaac, Abraham, Esau, Jacob',
        'Andrew, Bartholomew, Matthias, Silas',
        'Peter, James, Paul, John',
        'Nebuchadnezzar, Darius, Cyrus, Belshazzar',
        'Peter, James, John, Paul',
        'Peter, John, Jude, Matthew',
        'Faith, Wealth, Warfare, Wonders',
        'David, Gideon, Samson, Saul',
        'He invests it in a successful business venture., He spends it on lavish feasts and entertainment., He donates it to the local synagogue.,  He gives it to the poor and needy.'
    ];

    for (var i = 0; i < questionsArray.length; i++) {
        trafficQuestion += '<br><br><hr> <p>' + (i + 1) + '. ' + questionsArray[i] + '</p>';

        //split choice
        str = choicesArray[i].split(', ');
        //   add the choices
        trafficQuestion += '<div class="question_right">';
        trafficQuestion += '<form>';
        //looop
        for (var j = 0; j < str.length; j++) {

            trafficQuestion += '<label class="choices">';
            trafficQuestion += str[j];
            trafficQuestion += '<input id="choice' + i + '_' + j + '" type="radio" name="radio" value="' + str[j] + '">';
            trafficQuestion += '<span class="checkmark"></span>';
            trafficQuestion += '</label>';
        }
        trafficQuestion += '</form>';
        trafficQuestion += '</div> <br></br>';

    }

    return trafficQuestion;
}


//submit answer btn
function submitAnswer(event) {
    event.preventDefault();

    // only 10 answer
    var question_0_answer, question_1_answer, question_2_answer, question_3_answer,
        question_4_answer, question_5_answer, question_6_answer, question_7_answer,
        question_8_answer, question_9_answer;

    var studentAnswers, correctAnswers;

    //collect
    var question_0_choices_array = [], question_1_choices_array = [], question_2_choices_array = [],
        question_3_choices_array = [], question_4_choices_array = [], question_5_choices_array = [],
        question_6_choices_array = [], question_7_choices_array = [], question_8_choices_array = [],
        question_9_choices_array = []; //choices

    for (var i = 0; i < 4; i++) {
        question_0_choices_array[i] = document.getElementById('choice0_' + i);
        question_1_choices_array[i] = document.getElementById('choice1_' + i);
        question_2_choices_array[i] = document.getElementById('choice2_' + i);
        question_3_choices_array[i] = document.getElementById('choice3_' + i);
        question_4_choices_array[i] = document.getElementById('choice4_' + i);
        question_5_choices_array[i] = document.getElementById('choice5_' + i);
        question_6_choices_array[i] = document.getElementById('choice6_' + i);
        question_7_choices_array[i] = document.getElementById('choice7_' + i);
        question_8_choices_array[i] = document.getElementById('choice8_' + i);
        question_9_choices_array[i] = document.getElementById('choice9_' + i);

        //if selected submit it as an answer
        if (question_0_choices_array[i].checked) {
            question_0_answer = question_0_choices_array[i].value;
        }
        if (question_1_choices_array[i].checked) {
            question_1_answer = question_1_choices_array[i].value;
        }
        if (question_2_choices_array[i].checked) {
            question_2_answer = question_2_choices_array[i].value;
        }
        if (question_3_choices_array[i].checked) {
            question_3_answer = question_3_choices_array[i].value;
        }
        if (question_4_choices_array[i].checked) {
            question_4_answer = question_4_choices_array[i].value;
        }
        if (question_5_choices_array[i].checked) {
            question_5_answer = question_5_choices_array[i].value;
        }
        if (question_6_choices_array[i].checked) {
            question_6_answer = question_6_choices_array[i].value;
        }
        if (question_7_choices_array[i].checked) {
            question_7_answer = question_7_choices_array[i].value;
        }
        if (question_8_choices_array[i].checked) {
            question_8_answer = question_8_choices_array[i].value;
        }
        if (question_9_choices_array[i].checked) {
            question_9_answer = question_9_choices_array[i].value;
        }
    }

    //
    studentAnswers = [question_0_answer, question_1_answer, question_2_answer, question_3_answer,
        question_4_answer, question_5_answer, question_6_answer, question_7_answer,
        question_8_answer, question_9_answer];

    correctAnswers = ['Jeremiah', 'Abraham',
        'Silas', 'Paul', 'Nebuchadnezzar',
        'Paul', 'John', 'Faith', 'Samson',
        'He spends it on lavish feasts and entertainment.'];

    //  grading
    gradeAnswers(studentAnswers, correctAnswers);
}


function gradeAnswers(responseArr, correctArr) {
    var counter = 0, finalGrade, decision, message, certificate;

    var stu_info_arr = studentInfo();

    var today = generateDate();


    for (var i = 0; i < responseArr.length; i++) {
        if (responseArr[i] == correctArr[i]) {
            counter++;
        }
    }

    finalGrade = (counter / 10) * 100;

    if (finalGrade >= 90) {
        decision = 'passed!';
        message = 'congratulations! Now you can take Advanced Quizes';
    } else {
        decision = 'faild!';
        message = 'Exam must be retaken you are allowed to miss one question!'

    }

    // generate certificate
    certificate = '========================Bible Questions================';
    certificate += '<br>Name:' + stu_info_arr[0];
    certificate += '<br> score:' + finalGrade + ' %';
    certificate += '<br>Decission:' + decision;
    certificate += '<br>' + message;
    certificate += '<br>Correct Answers: 1: D) Jeremiah,2: B) Abraham,3: D) Silas,4: C) Paul,5: A) Nebuchadnezzar,6: D) Paul,7: B) John,8: A) Wisdom,9: C) Samson,10: B) He spends it on lavish feasts and entertainment.';
    certificate += '<br>====================================================';

    // export the cerificate
    document.getElementById('question_header').innerHTML = certificate;
}


function studentInfo() {
    var stuInfostr = document.getElementById('student_info').textContent;
    var stuInfoArr = stuInfostr.split(' ');
    var studentInfo = [];
    var j = 0;

    for (var i = 0; i < stuInfoArr.length; i++) {
        if (stuInfoArr[i].includes(':') || stuInfoArr[i] == '') {

        } else {
            studentInfo[j] = stuInfoArr[i];
            j++;
        }
    }


    return studentInfo;
}


