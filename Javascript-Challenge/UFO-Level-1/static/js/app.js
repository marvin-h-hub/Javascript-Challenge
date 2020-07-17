var tableData = data;

var tbody = d3.select("tbody")

data.forEach((datapoint) => {
    var row = tbody.append("tr");
    Object.entries(datapoint).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });


var button = d3.select("#filter-btn"); 

var form = d3.select("#filters");   

 
button.on("click", runEnter);
form.on("submit",runEnter);

function runEnter() {

  d3.event.preventDefault();
  
  var inputElement = d3.select("#datetime");

  var inputValue = inputElement.property("value");

  console.log(inputValue);

  var filteredData = data.filter(data => data.datetime === inputValue);
  console.log(filteredData);

  tbody.selectAll("tr").remove();

  filteredData.forEach((dataselected) => {
    var row = tbody.append("tr");
    Object.entries(dataselected).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

  d3.event.preventDefault();
};
