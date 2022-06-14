# Belly-Button-Biodiversity
Creation of an interactive dashboard to explore the Belly Button Biodiversity dataset, which catalogues the microbes that colonize human navels.

![image](https://user-images.githubusercontent.com/100214297/173568732-1ff6ec22-13c5-44db-a15c-5159224fccf2.png)


## Bar Chart 
Used the D3 library to read in samples.json from the URL https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json.

Created a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

![image](https://user-images.githubusercontent.com/100214297/173568816-f5fe13eb-5c06-4d6b-b59a-5f056b7cba1e.png)


Used sample_values as the values for the bar chart, otu_ids as the labels for the bar chart, otu_labels as the hovertext for the chart.

![image](https://user-images.githubusercontent.com/100214297/173568894-ca6971d6-8ebe-4c1f-9cee-90771c4d012e.png)


## Bubble Chart 

Created a bubble chart that displays each sample.

![image](https://user-images.githubusercontent.com/100214297/173568986-9cb8b750-1205-4911-8f1e-2be08a648241.png)

Used otu_ids for the x values, sample_values for the y values, sample_values for the marker size, otu_ids for the marker colors, otu_labels for the text values.

![image](https://user-images.githubusercontent.com/100214297/173569013-d1f29d7f-4ab2-4bf6-a8a4-8a7b913de686.png)

## Demograogic Info 

Displayed the sample metadata, i.e., an individual's demographic information.

![image](https://user-images.githubusercontent.com/100214297/173569078-d910ca04-eef3-4f63-9d64-b8589a4dc349.png)



