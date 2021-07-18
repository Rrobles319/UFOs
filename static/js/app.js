// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
var filters = [];

// 3. Use this function to update the filters. 
function updateFilters() {
  // let date = d3.select("#datetime").property("value");
  // let city = d3.select("#city").property("value");
  // let state = d3.select("#state").property("value");
  // let country = d3.select("#country").property("value");
  // let shape = d3.select("#shape").property("value");
  
  //filters = {date, city, state, country, shape};
  
  
    // 4a. Save the element that was changed as a variable.
    let fc = d3.select(this);
    // 4b. Save the value that was changed as a variable.
    let fv = fc.property("value");
    console.log(fv);
    // 4c. Save the id of the filter that was changed as a variable.
    let fid = fc.attr("id");
    console.log(fid);
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    if (fv) {
      filters[fid] = fv;
    }
    else {
      delete filters[fid];
    }
    // 6. Call function to apply all filters and rebuild the table
    filterTable();
  
  }
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  //tableData.forEach(function(row) {if (row.datetime === date)
        //{filteredData.push(row)}});
    // 8. Set the filtered data to the tableData.
    let filteredData = tableData
    // let date = d3.select("#datetime").property("value");
    // let city = d3.select("#city").property("value");
    // let state = d3.select("#state").property("value");
    // let country = d3.select("#country").property("value");
    // let shape = d3.select("#shape").property("value");
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    Object.entries(filters).forEach(([key,value]) => {
      filteredData = filteredData.filter(row => row[key] === value);
    }); 

    // tableData.forEach(function(row) {if (row.datetime === date)
    //     {filters.push(row)}; 
    //        if (row.city === city){
    //         filters.push(row)
    //        }
    //        if (row.state === state){
    //         filters.push(row)
    //        } 
    //        if (row.country === country){
    //         filters.push(row)
    //        }
    //        if (row.shape === shape){
    //         filters.push(row)
    //        }});
    //console.log("filteredData", filteredData);
    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData);
  }
  
  // 2. Attach an event to listen for changes to each filter
  d3.selectAll("#input").on("change", updateFilters);
  //d3.selectAll("#filter-btn").on("click", updateFilters);
    //d3.event.preventDefault()
    //if(date != ""){
      //let filteredData = filteredData.filter(data => data.date === data)
    //}
  //});
  
  // Build the table when the page loads
  buildTable(tableData);
