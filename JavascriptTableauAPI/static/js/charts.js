d3.json("samples.json").then(function(data){
    console.log(data);
});

function init() {
    var selector = d3.select("#selDataset");
  
    d3.json("samples.json").then((data) => {
      console.log(data);
      var sampleNames = data.names;
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
      const selectedText = d3.select('#selDataset option:checked').text();;
      buildMetadata(selectedText);
      buildCharts(selectedText);
  })
  
    
}
  
  init();

function optionChanged(newSample) {
    buildMetadata(newSample);
    buildCharts(newSample);
  };

// 1. Create the buildCharts function.
function buildCharts(sample) {
  // 2. Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {
    // 3. Create a variable that holds the samples array. 
    var samples = data.samples;
    
    // 4. Create a variable that filters the samples for the object with the desired sample number.
    var sampleArray = samples.filter(sampleObj => sampleObj.id == sample);
    console.log(sampleArray);
    //  5. Create a variable that holds the first sample in the array.
    var firstSample = sampleArray[0];
    console.log(firstSample);
  
    // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
    var otu_ids = firstSample.otu_ids.slice(0,10).map(i =>{
      //var otu_id =  i.sort((a,b) => (b-a));
      return "OTU" + " " + i
    });
    var otu_labels = firstSample.otu_labels.slice(0,10);
    var sample_values = firstSample.sample_values.slice(0,10).sort((a,b)=> (a-b));

    // 7. Create the yticks for the bar chart.
    // Hint: Get the the top 10 otu_ids and map them in descending order  
    //  so the otu_ids with the most bacteria are last. 

    var yticks = otu_ids.sort((a,b) => (a-b)).reverse();

    // 8. Create the trace for the bar chart. 
    var barData = [{
      type: "bar",
      x: sample_values,
      y: yticks,
      text: otu_labels,
      orientation: "h"
    }
    ];
   
    // 9. Create the layout for the bar chart. 
    var barLayout = {
     title: "Top 10 Bacteria Cultures Found",
      //yaxis: {
        //tickmode: array,
      //  tickvals: [0,1,2,3,4,5,6,7,8,9],
      //  ticktext: yticks
      //}
    };
    // 10. Use Plotly to plot the data with the layout. 
    Plotly.newPlot("bar",barData,barLayout);

    // 1. Create the trace for the bubble chart.
    var bubbleData = [{
      x: firstSample.otu_ids,
      y: firstSample.sample_values,
      mode: "markers",
      text: otu_labels,
      marker: {
        color: firstSample.otu_ids,
        size: firstSample.sample_values,
        colorscale: "Earth"
      }
    }];
    console.log(firstSample.otu_ids);
    console.log(firstSample.sample_values);

    // 2. Create the layout for the bubble chart.
    var bubbleLayout = {
      title: "Bacteria Cultures Per Samples", 
      xaxis: {
        title: {
          text: 'OTU ID'}},
      yaxis: {automargin: true},
      hovermode: "closest" 
        };

    // 3. Use Plotly to plot 
    Plotly.newPlot("bubble",bubbleData,bubbleLayout);

    
    //variable holding metadata
    
    var metadata = data.metadata
    var selectedMeta = metadata.filter(metaObj => metaObj.id == sample);
    var firstMeta = selectedMeta[0];
    var selectedWfreq = firstMeta.wfreq;
    
    // 4. Create the trace for the gauge chart.
    var gaugeData = [{
      domain: { x: [0, 10], y: [0, 10] },
      value: selectedWfreq,
      title: { text: "<b>Belly Button Washing Frequency</b><br>Scrubs per Week</br>"},
      type: "indicator",
      mode: "gauge+number",
      gauge: {
        axis: { range: [null, 10], tickmode: "array",
          tickvals: [0,2,4,6,8,10],
          ticktext: [0,2,4,6,8,10] },
        bar: {color: "black"},
        steps: [
          { range: [0, 2], color: "red" },
          { range: [2, 4], color: "orange" },
          { range: [4, 6], color: "yellow" },
          { range: [6, 8], color: "lime" },
          { range: [8, 10], color: "green" }
        ],
    }}
    ];
    
    // 5. Create the layout for the gauge chart.
    var gaugeLayout = { 
     
    };

    // 6. Use Plotly to 
    Plotly.newPlot('gauge', gaugeData);
  });



}

function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
      var metadata = data.metadata;
      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      var result = resultArray[0];
      var PANEL = d3.select("#sample-metadata");
  
      PANEL.html("");
      PANEL.append("h6").text("ID:" + " " + result.id);
      PANEL.append("h6").text("ETHNICITY:" + " " +  result.ethnicity);
      PANEL.append("h6").text("GENDER:" + " " + result.gender);
      PANEL.append("h6").text("AGE:" + " " + result.age);
      PANEL.append("h6").text("LOCATION:" + " " +  result.location);
    });
  }




