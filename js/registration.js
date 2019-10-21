document.getElementById("checkedRadio").checked = true;
var i = 0, j = 0;

function calculateAttende() {
    var visitorFees = [2000, 2000, 50, 50];
    var googleIndexing, Indian, nationality;


    googleIndexing = document.getElementById("googleIndexing").checked; //if google indexing applicable
    nationality = (document.getElementById("getNationality").value);
    nationality = nationality.toLowerCase();                                 //get nationality if Indian or not
    if (nationality == null || nationality == "") { alert("Enter your nationality first"); }
    else { Indian = new Boolean(nationality === "indian"); }
    if (Indian == true) {
        document.getElementById('currency').innerHTML = "INR";
        if (googleIndexing == false)
            i = 0;
        else
            i = 1;
    }
    else {
        document.getElementById('currency').innerHTML = "US $";
        if (googleIndexing == false)
            i = 2;
        else
            i = 3;
    }
    var totalMember = parseInt(document.getElementById('total').value);
    if (totalMember < 1) {
        document.getElementById('total').value = 1;
        totalMember = 1;
    }
   
    var fees = totalMember * visitorFees[i];
    document.getElementById('regFees').value = fees;

}


function reCheck()
{
    var authorFees = [
        [8000, 8500, 9000],
        [2000, 2500, 3000],
        [150, 180, 200],
        [50, 60, 70]
    ];
    var visitorFees = [2000, 2000, 50, 50];
    
    var googleIndexing, Indian, nationality;
    googleIndexing = document.getElementById("googleIndexing").checked; //if google indexing applicable
    nationality =(document.getElementById("getNationality").value);
    nationality= nationality.toLowerCase();                                 //get nationality if Indian or not
    if (nationality == null || nationality == "") { alert("Enter your nationality first"); }
    else { Indian = new Boolean(nationality === "indian");}
    var categoryAll = document.getElementsByName("Category");
    for (i = 0; i < categoryAll.length; i++) {
        if (categoryAll[i].checked)
        j=i;                     //selction column of price
    }
    if(Indian==true)
    {
        document.getElementById('currency').innerHTML = "INR";
    if(googleIndexing==false)
    i=0;
    else
    i=1;
    }
    else
    {
        document.getElementById('currency').innerHTML = "US $";
        if (googleIndexing == false)
            i = 2;
        else
            i = 3;
    }

    var authors = parseInt(document.getElementById('authors').value);
    if (authors == 0) {
        alert('Number of authors cannot be zero');
        document.getElementById('authors').value = 1;
        authors = 1;
    }
    else if (authors < 0) {
        document.getElementById('authors').value = 1;
        authors = 1;
    }
    var coauthors = parseInt(document.getElementById('coauthors').value);
    if (coauthors < 0) {
        document.getElementById('coauthors').value = 0;
        coauthors = 0;
    }
    var total = authors + coauthors;
    if (total > 0) {
        document.getElementById('total').value = total;
        var fees = authors * authorFees[i][j] + coauthors * visitorFees[i];
        document.getElementById('regFees').value = fees;
    }

}

function openRegistered() {
    window.open("./Registered.html", "_self");
}


function getall() {
    $country = $('#country option:selected').text();
    document.getElementById('countryHide').value = $country;
    $state = $('#state option:selected').text();
    document.getElementById('stateHide').value = $state;
    $city = $('#city option:selected').text();
    document.getElementById('cityHide').value = $city;
}