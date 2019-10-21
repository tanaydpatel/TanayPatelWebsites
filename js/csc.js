// new Option(Text, Value)
// $('#yourdropdownid option:selected').text();
var file_countries = 'data/countries.json';
var file_states = 'data/states.json';
var file_cities = 'data/cities.json';
var notselected_text = "None"

var countries;
var states;
var cities;

// Get Data
// Country
$.getJSON(file_countries, function (data) {
  countries = data.countries;
  $("#country").append(new Option(notselected_text, 0))
  for(i in countries)
  {
    $("#country").append(new Option(countries[i].name, countries[i].id));
  }
  console.log('Country list loaded.')
});
// State
$.getJSON(file_states, function (data) {
  states = data.states;
  $("#state").append(new Option(notselected_text, 0))
  console.log('State list loaded.')
});
// City
$.getJSON(file_cities, function (data) {
  cities = data.cities;
  $("#city").append(new Option(notselected_text, 0))
  console.log('City list loaded.')
});

// Country Update
$('#country').on('change', function() {
  console.log('Country change ' + this.value);
  csc_update(this.value, -1)
})

// State Update
$('#state').on('change', function() {
  console.log('State change ' +  this.value);
  csc_update(-1, this.value)
})

function csc_update(cid, sid)
{

  // Check and update state list
  if(cid != -1) {
    $('#state').empty();
    $("#state").append(new Option(notselected_text, 0))
    for(i in states)
    {
      if(states[i].country_id == cid)
      {
        $("#state").append(new Option(states[i].name, states[i].id));
      }
    }
    // sid = states[0].id;
  }
  // Update City list
  $('#city').empty();
  $("#city").append(new Option(notselected_text, 0))
  for(i in cities)
  {
    if(cities[i].state_id == sid)
    {
      $("#city").append(new Option(cities[i].name, cities[i].id));
    }
  }
  console.log('list updated.')

}
