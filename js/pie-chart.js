google.charts.load('current', {'packages':['corechart']}); // use load google charts function
google.charts.setOnLoadCallback(drawChart); // use drawChart function

function drawChart() { // use drawChart function from google library

var options = {
        title: 'Project Management Phases' // add title for pie chart
};

var data = google.visualization.arrayToDataTable([ // add data for pie chart
          ['Phase', 'Hours'],
          ['Pre-Project - 14h',     14],
          ['Initiation - 24h',      24],
          ['Planning - 48h',  48],
          ['Executing - 62h', 62],
          ['Closing - 12h',    12]
        ]);

var chart = new google.visualization.PieChart(document.getElementById('chart'));

chart.draw(data, options); // apply data and options for visualization

}

