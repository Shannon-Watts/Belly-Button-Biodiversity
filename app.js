// // url
// const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// // Promise 
// const dataPromise = d3.json(url);
// console.log("Data Promise: ", dataPromise);

// // Fetch the JSON and console 
// d3.json(url).then((data) => {
//         console.log(data);
//     });


// Function
function plotCharts(sample){
    d3.json("samples.json").then((data) => {
        var samples = data.samples;
        var sample_array = sample.filter(obj => obj.id == sample);
        var sample_array_res = sample_array[0];

        // Bar Chart
        var otu_ids = sample_array_res.otu_ids;
        var otu_labels = sample_array_res.otu_labels;
        var sample_values = sample_array_res.sample_values;

        var yticks = otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse();

        var barData = [
            {
                x: sample_values.slice(0,10).reverse(),
                y: yticks,
                text: otu_labels.slice(0, 10).reverse(),
                type: "bar",
                orientation: "h"
            }
        ];
        var barLayout = {title: "Top 10 "};
        Plotly.newPlot("bar", barData, barLayout);

        // Bubble Chart
        var bubbleLayout = {
            margin: { t: 0 },
            xaxis: { title: "OTU ID" },
            hovermode: "closest",
            };
        
            var bubbleData = [ 
            {
              x: otu_ids,
              y: sample_values,
              text: otu_labels,
              mode: "markers",
              marker: {
                color: otu_ids,
                size: sample_values,
                }
            }
          ];
        
          Plotly.newPlot("bubble", bubbleData, bubbleLayout);
        // Demographic Info 


    });
}

function selDataset(){
    var selData = d3.select("#selDataset");

    d3.json("samples.json").then((data) => {
        var sampleNames = data.names;

        sampleNames.forEach((sample) => {
            selData.append("option").text(sample).property("value", sample);
        });
        // these are the samples
        var firstSample = sampleNames[0];
        plotCharts(firstSample);
    });

}

selDataset();
