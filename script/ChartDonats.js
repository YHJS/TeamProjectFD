      google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'MB_Day'],
          ['audio',      55],
          ['video',      23],
          ['photo',      17],
		  ['other',       5]         
        ]);

        var options = {
            backgroundColor: 'white',
            colors:['#4daf7b', '#e55e3a','#ebc85e','#f4ede7'],
			pieHole: 0.5,
			legend: 'none',
            tooltip: {text:'percentage'},
            pieResidueSliceLabel: 'none',
            pieSliceText: 'none',
            chartArea:{left:0,top:10,right:0, button:0, width:'230',height:'230'}
        };

        var chart = new google.visualization.PieChart(document.getElementById('StatisticDonutChart'));
        chart.draw(data, options);
      }

      google.charts.setOnLoadCallback(drawChartMonth);
      function drawChartMonth() {
          var dataMonth = google.visualization.arrayToDataTable([
              ['Task', 'MB_Day'],
              ['audio',      15],
              ['video',      25],
              ['photo',      50],
              ['other',      10]
          ]);

          var optionsMonth = {
              backgroundColor: 'white',
              colors:['#4daf7b', '#e55e3a','#ebc85e','#f4ede7'],
              pieHole: 0.5,
              legend: 'none',
              tooltip: {text:'percentage'},
              pieResidueSliceLabel: 'none',
              pieSliceText: 'none',
              chartArea: {left:0,top:10,right:0,button:0, width:'230', height:'230'},
              width: 308,
              height: 308
          };

          var chartMonth = new google.visualization.PieChart(document.getElementById('MonthReportDonutChart'));
          chartMonth.draw(dataMonth, optionsMonth);
      }