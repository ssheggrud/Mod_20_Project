# ELECTION FINANCE DATA ANALYSIS

## Overview
- Our project will analyze New York City mayoral elections.

- We will determine whether there exists a relationship between the quantity of campaign finance donations and electoral results, and whether a donation sum from a particular occupation or industry is likewise related.


## Questions
- How much financial data play a role in Mayor candidate election outcome. 

## Technologies

AMAZON RDS, AMAZON S3, JAVASCRIPT TABLEAU API, HTML, PANDAS, PG SQL, PLOTLY, PYTHON3, TABLEAU, TENSORFLOW, PYSPARK, GOOGLE COLAB,

## Features to be Implemented

 - A Pyspark data parser on Google Colab to edit data into database entry format.

 - An Amazon Relational Database Service to host a PostgreSQL instance which will serve as a data repository, and a start and end point for the machine learning model.

 - Supervised categorical machine learning approach using TensorFlow which predicts election outcomes on categorical column attributes.

 - Dashboard composition with Tableau and Plotly composed with distribution of data, outliers, trends, hypotheses, predictions and conclusions.

## Dashboard
Tools used:
1. Tableau Public
2. Tableau Javascipt API

**Description:**
We have built our visualizations using Tableau.  Also, we have built our website using the Tableau JavaScript API, and have hosted it on Github.

Here is the link to our Dashboard. It is hosted on our github account:
https://ssheggrud.github.io/Mod_20_Project/index.html

Refer to the below link to access our tableau dashboard. This dashboard is hosted within our website created using TableauJavascriptAPI:

https://public.tableau.com/app/profile/pooja.srivastava3629/viz/ElectionsFinanceData/Dashboard1

**Who is our Target Audience?**

Anyone who is interested in learning about the role finance has on New York City’s mayoral elections.  They can see the difference between contributions and expenditures between candidates, as well as their significance.

**What are our vizualizations going to tell us?**

We have tried to visually understand how some of the data variables differ for a given candidate, such as ZIP codes, quarters (of a year), number and total amount of contributions, and total amount of expenditures per election year.
We have contributions and expenditures received and spent for each participating candidate.  The range we have chosen is between 2001 and 2021 (the general election for the latter has yet to take place,) inclusive.

**How do we add interactive elements to our dashboard?**

- We have added filters to our dashboard, making them available via the All Using Related Data Sources option, so that any selection through the filter applies to all worksheets that are in any way related to the data source.
- Please note that we have used multiple data sources and have used the Edit Blend Relationships option to link primary and secondary data sources.
- We have added Highlight Actions to our dashboard which work when a user hovers over the source sheets.
- We have added interactive text to our dashboard which dynamically change the text based on which election year was selected.

**Features**

- We have a container in which each of the dashboards appear after clicking either the Previous or Next buttons.
- Upon entering the homepage, one is taken to the first dashboard, so the Previous button is disabled.
- The Next button takes the user from the first dashboard to the next, and is then disabled once the user reaches the last dashboard.  The user can always click on the Home button to return to the homepage.
- There is a graph that shows how many contributions came in for each of the candidates.  Here, the candidate name can be selected to see data changes in the map and quarterly contribution graphs.
- The map is color-coded to better identify which zip codes had higher contributions.
- Our visualization shows the top candidates sorted by the amount received and spent.  Highlight Hover action has been created on this page to enhance visual effects.

## Data
 The data we obtained for this project include publicly available records for each NYC mayoral election campaign donation reports from Individuals and Committee/Organizations. The following records also included the Expenditure spending per election year that were tracked by each candidate. We were able to gather the data reports for the six most recent election terms, namely for 2001, 2005, 2009, 2013, 2017, and 2021.
 
 The following data that was obtained from the New York City Campaign Finance Board contained three separate .csv files for each election year: Individual, Committee and Expenditure reports. 
 
 The Individual Donation reports contained data that was tracked based on an individual’s donation contribution to a particular candidate. Each row highlights the donation amount, the donor's State, City, and Zip Code and the date each transaction was made. The following transactions contained an estimated amount of 65,000 records of tracked donations per election year.
 
 The Committee Donation reports were similar to the Individual Donation reports. The main difference was that the donations were tracked based on larger Corporation, Labor Union, Organizations, LLC, Political Action Committees, and Party Committees donations to the candidate. The following tracked Committee Donations per election year contained an average amount of 300-500 donation records per election.
 
 The Expenditure report tracked each participating candidate's per election year expenditure spending during their campaigning. Some highlighted records that were tracked are Television and Radio advertisements, Professional Services, Campaign Worker Salaries, Polling Costs, and many others. The following expenditure transactions were tracked by the location of the transaction that included the amount, date of transaction, City, State, and Zip Codes. The Expenditure reports contained an average amount of 12,000 tracked transactions per election year.
 
**Data Resources:**

https://www.nyccfb.info/follow-the-money/data-library/

Please see the following screen shot that shows the home page of where we have obatined all of our data.

![Screenshot (119)](https://user-images.githubusercontent.com/81484054/132953388-e322ee90-fc3c-4f4c-9e1b-708fa13c51a2.png)


### ETL Process

The steps taken to extract, transform, and load the data for analysis are as follows:

•	From the New York City Campaign Finance Board webpage download the previous six election years from 2001,2003,2005,2009,2013,2017, and 2021 data sets that contain individual donation data and committee donation data per election year as local CSVs.

•	Also extract the previous six election years for each candidate’s expenditures as separate data sets from the New York City Campaign Finance Board.

•	Study each of the 18 Excel data sets and determine which columns hold value for our final outcome. (All Raw CSVs can be found within **Resources** > **Raw CSVs** Folder)

•	Create a RDS and S3 within Amazon Web Services to store the following data sets and share publicly with team.

![Screenshot (118)](https://user-images.githubusercontent.com/81484054/132890400-b199f695-83da-4471-b0d1-9badb392497b.png)

•	Upload each election year CSV for individual donations, committee donations, and candidate expenditures within Google Colab.(The following files can be found within **Resources > Contribution tables (CSVs) and Expenditure Reports (CSVs)**)


•	Perform Pyspark functions of reading CSVs in data frames, dropping columns, changing data types, changing column names, converting the value names within each column, filter the data frames to display only the mayor elections and participants within the mayor election year, create a total sum column that’s added by the donation amount, candidate match amount, and previous donation amount (The following scripts can be found within **DataCleaningAndTransforming > Google Colab Documents**)

•	Once the data frame is reviewed and approved by the team export the clean data frame into a new CSV (Transformed dataframes into new CSVs can be found in **Resources** )

•	Export and bridge the clean data frame tables for each election year to connect with the RDS server and Postgres SQL.

•	Create the join on committees and individual tables to prepare for machine learning.

• Merge/Union the tables by the individual data frame, committe contribution data frame, as well as the expenditure report dataframes all as a single CSV per year. (The following merged tables can be found here **Resources > Merged Contribution and Expenditure (CSVs)**) 

•	Determining columns necessary for ML

•Connect PGAdmin with Pandas to read in 2021,2017,2013,2009,2005, and 2001 merged files to being Machine Learning.

![Screenshot (124)](https://user-images.githubusercontent.com/81484054/133953368-06fb0a92-a991-4af9-9f31-f7fb41fc54db.png)

**Pre ETL of the raw campaign data**

![Screenshot (121)](https://user-images.githubusercontent.com/81484054/132953447-5b6d9b48-aa2b-4e56-b8d6-6d71de150035.png)

**Post ETL of the cleaned campaign data**
![Screenshot (120)](https://user-images.githubusercontent.com/81484054/132953440-537b9778-6d13-4128-9703-190454493a7f.png)

**ERD OUTLINE**
![ERD OUTLINE](./ERD/ERDOutline.png)

**ERD CURRENT TABLES**
![Untitled](https://user-images.githubusercontent.com/81484054/133953502-3399e1d6-d4a0-420a-9939-d5b8aebc926c.png)

------------************************************************---------------------------------------------------------

## Week 1 Achievements

- We have the datasets which we will be using for our project. Refer to https://www.nyccfb.info/follow-the-money/cunymap-2021 in order to look at the individual and committee level contributions to our Mayor Candidates.
- Refer to **2017_Mayor_IC.csv** and **2017_Mayor_CC.csv** files in our repository for sample data.
- At first we had decided to get data from Legistar API provided by NYC Coucil website. We were successfully able to read data from the API. Refer to LegistarAPI.ipynb file posted on https://github.com/ssheggrud/Mod_20_Project/tree/05_Pooja . Altough we later decided that had we used that data, it would have unnecessarily added complexity to our code. Hence, we decided to add each years election results manually to a manually sourced excel as as individual column. We will name this column "Won/Elected".
- We have successfully imported the election year results of 2017 indivdual and committee contributions to a DataFrame. Please refer to: https://github.com/ssheggrud/Mod_20_Project/tree/05_Riley
- We have successfully identified roles for all the team members and have a good outline for our project.

## Week 2 Achievements

 - We have finished the presentation slide show: https://docs.google.com/presentation/d/1Y1IFccSH7uFPhK94G6A1tpfghD0K2uWRChJvdhHHcMU/edit?usp=sharing
 - We have come up with few dashboards and a storyboard in Tableau.
 - We have started work on linking our tableau vizualization to our html page using Tableau Javascript API.
 - Successful transformed the 2017 Election year Individual, Committee, and Expenditures raw CSV's into a transformed and test ready file from Google Colab using Pyspark and Pandas while exporting the cleaned dataframes into SQL and new local CSVs. To see the final 2017 transformation process please refer to the **DataCleaningTransformation** folder.
 - Static table, join script and other DB scripts were added to the DBScripts folder.
 - A base sklearn's K-nearest neighbor model can been created and run on a sample 2017 data. 

## ML Model
### Overview
Our goal is to create a supervised machine learning model to predict the results of the NYC mayoral elections.
### Supervised Learning
We will use data from past elections to see whether our model can predict winner of previous elections using data such as:
- Total amount of money fundraised
- The occupations of those who donated
- The industries that contributed the most
- The amount of corporate donations each candidate received
This data is available to the public and can be found on the New York City Campaign Finanance Board's data library. We aim to see whether our model is able to accurately predict the winner of previous elections using these metrics and whether these categories have a causal relationship with the outcomes of said elections.
- The model will taken in features such as money raised, expenditures, and source of funds to a particular candidate to predict the total number of votes, and therefore winner, of a NYC mayoral election.
- We are using a K-nearest neighbor model to process our data.

### Week 2: Data Preprocessing
- All necessary modules were imported. The primary libraries used in this model were sklearn, Pandas, path, and NumPy.
- The CSV files used in this model were sourced from the NYC campaign finance board's website. All campaign donation and expenditure data is publicly available on this website. The data was further cleaned by group members responsible for the database portion of this project.
- The dataset was read into a Jupyter notebook using a Pandas dataframe. All null/NaN values were dropped from the dataset in order to prevent any errors.
### Week 2: Feature Engineering
- The dataset contained several columns that are useful during the visualization portion of this project but bear no real value to the machine learning model. These columns were dropped prior to being fed into the ML model to prevent any unneccessary noise.
- The X features of our model are as follows:
- - Candidate Name
- - Date of donation
- - Contributer Type (individual, corporate, PAC, etc.)
- - City where the donation originates from
- - State where the donation originates from
- - Zip code where the donation originates from
- - Initial donation amount
- - Matched donation amount
- - Previous donation amount
- - Total donation amount
- - Total expenditures by the candidate
-  The Y value for the model was the outcome of the election, as this model is analyzing only previous elections, the outcomes to which are available.
-  These features were chosen as prior literature indicates that these factors are amongst the most consequential when it comes to election outcomes. Other features, such as advertising data, was excluded from this dataset due to their lack of easy availability and trying to incorporate such data into this model would be too difficult given the timeframe of this project.

### Week 2: Training and Test Split/ML model
- Once the dataset was cleaned, we encoded it using sklearn's label encoder
- The training and testing split was 80/20, with 80 percent being training data and 20 percent being testing data. This split was chosen as several prior election analysis ML models suggested doing so due to the large size of these datasets.
- We used sklearn's K-nearest neighbor model to fit and predict our data. This model was chosen due to it being fairly accurate for these types of predictions and the interpretability factor. KNN models are easy to analyze once they are graphed and therefore can be explained easily to the laymen. However, there are limitations to this model, as its accuracy depends on the size of the data and irrelevant features may skew the data.
- At the present, we have only tested the model out on the funds raised and outcomes of the 2017 NYC mayoral election. Thus far the model is capable of predicting the data with 90% accuracy, although it should be noted that the dataset was deliberately small as this model at the present is only for testing purposes. Furthermore, this election was not considered competitive and many factors outside of the features used were likely the cause of the outcome.
- A rudimentary version of the model can be found in the MLScripts folder of the repository.

### Week 3: 
- Tweaking the website to best display the Tableau data. HTML and CSS files were edited to better display the API from Tableau.
![Screenshot (Webpage)](./Resources/screenshot.png)
- We have finished the website with Tableau data: https://ssheggrud.github.io/Mod_20_Project/index.html
- (more text here)
