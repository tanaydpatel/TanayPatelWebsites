function openContactUs() {
    document.getElementById("onClickSideNav").style.width = "75%";
    document.getElementsByClassName("main").style.backgroundImage ="linear-gradient(red,#EEF0F2,white,white ,#CACFD6);";
}
function closeContactUs() {
    document.getElementById("onClickSideNav").style.width = "0";
}
function showImportantDates(){
    document.getElementById("varHeading").innerHTML="Important Dates.";
    document.getElementById("varList").innerHTML = "<p id='a2'><li class='variableList'><b> Nov 15, 2019</b> : Last Date to submit Abstract</li><br><li class='variableList'><b> Dec 01, 2019</b> : Last Date to submit full length paper</li><br><li class='variableList'><b> Dec 23, 2019</b> : Intimation of acceptance of paper to author</li><br><li class='variableList'><b> Dec 26, 2019</b> : Submission of Full length CRC paper.</li><br><li class='variableList'><b> Jan 15, 2019</b> : Last date of Registration.</li>";
    document.getElementById("infoList").style.padding ="5px 0px 5px 0px";
}
function showAboutConference() {
    document.getElementById("varHeading").innerHTML = "Objective of Conference.";
    document.getElementById("varList").innerHTML = "<p id='a2'>To encourage national and international communication and collaboration; promote professional interaction and lifelong learning in the fields of Education and its applications. The important objective of the conference is to enhance the work of researcher and to cultivate relationship with world prominent knowledge centers.</p>";
}
function showConferenceVenue() {
    document.getElementById("varHeading").innerHTML = "Conference venue.";
    document.getElementById("varList").innerHTML = "<p id='a2'>Every detail related to the venue will be updated soon on website and also conveyed through mails.<br></p>";
}
function showConferenceFee() {
    document.getElementById("varHeading").innerHTML = "Registration fees.";
    document.getElementById("varList").innerHTML = "<br>Details of payment methods are mentioned below.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<table style='margin-left: 10%;'><tr id = 'tableRow' ><th rowspan='2' id='tableRow'>Category</th><th colspan='2' id='tableRow'>Indian Delegates</th><th colspan='2' id='tableRow'>Foreign Delegates</th></tr><tr id='tableRow' ><td id='tableRow'>Scopus/UGC Approved</td><td id='tableRow'>Google Indexing</td><td id='tableRow'>Scopus/UGC Approved</td><td id='tableRow'>Google Indexing</td></tr><tr><td id='tableRow'>Student (UG/PG)/<br>Research scholar</td><td>&#8377;8000/-</td><td>&#8377;2000/-</td><td>US &#36;150</td><td>US &#36;50</td></tr><tr><td id='tableRow'>Academician</td><td>&#8377;8500/-</td><td>&#8377;2500/-</td><td>US &#36;180</td><td>US &#36;60</td></tr> <tr><td id='tableRow'>Industry</td><td>&#8377;9000/-</td><td>&#8377;3000/-</td><td>US &#36;200</td><td>US &#36;70</td></tr><tr><td id='tableRow'>Visitor/Co-author</td><td>&#8377;2000/-</td><td>&#8377;2000/-</td><td>US &#36;50</td><td>US &#36;50</td></tr></table>";
}
function showImportantPoints() {
    document.getElementById("varHeading").innerHTML = "Important Points.";
    document.getElementById("varList").innerHTML = "<li class='variableList'>All participant need to register before attending.</li><li class='variableList' > For those listeners, who do not need to submit a paper or an abstract to the conference, <br> Organizing advise you to followthe registration form and finish registration. Easy and quick!</li><li class='variableList'>The student price is only applicable to the First author who is a student currently.</li><li class='variableList'>At least one of the authors listed on the accepted paper must pay the registration by the requested registration deadline.</li>";
}

function openAboutPune()
{
    document.write().value = 'https://en.wikipedia.org/wiki/Pune';
}
