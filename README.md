# ELECTION RESULTS

## Overview
The purpose of this project is to find out if/how money affects the outcome of elections.

In attempt to find correlation across money donated, money expended, and overall election outcome we will use dataparsing libraries for data assembly, a database machine learning model, and data vizualization libraries for dashboarding.

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
We are using Tableau to build our dashboard and story line. We are also going to make a webpage and use javascript API for tableau to link this page to our Tableau visualizations to make the page more cleaner. That page will have a placeholder to display results from our Machine Learning model as well.

Refer the link below for the details on how we plan to use Javascript API:

https://help.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api.htm

Refer to the below link to access our tableau dashboard:

https://public.tableau.com/app/profile/pooja.srivastava3629/viz/Elections_16312857232880/Story1?publish=yes

**Who is our Target Audience?**

Anybody who would want to learn about money’s role in New York City’s Mayor election results. They can see if there’s an impact of contributions and expenditures on a candidate’s performance.

**What are our vizualizations going to tell us?**

We are going to include election year data from 2001 to 2021. As of now, we have made a few vizualizations for the election year 2017. Also, we have only worked with the individual contributions for that year. This coming week, we are going to focus on adding data source for the remaining years as well. Post that, we will include committee contributions as well as expediture data in order to get a full picture.

**How do we add interactive elements to our dashboard?**

- Dashboard 1 :
    - The first source of filter is the election year. Default year selected is 2017 as of now.
    - There is a Candidate Name mutiple selection dropdown filter in place to see joint data of candidates. Only relevant values will be shown in this dropdown.
    - There is a graph that shows how many contributions came in for each of the candidates. Here candidate name can be selected to see data change in the map and quaterly contribution graphs.
    - Map is color coded to better identify which zip codes had higher contributions.
- Dashboard 2:
    - It shows the top four candidates qualified by percentage contributions received. Highlight Hover action has been created on this page to add better visual effects on the page.


**Features**
- We can filter by election year and candidate names to view selective data on the dashboard. You can select one candidate on the top most graph and map and quaterly donations graphs would reflect data for the selected candidate as shown in the below picture.

![image](https://user-images.githubusercontent.com/82654977/132999692-5986f3c1-1415-45a0-8fb2-836582309580.png)

- Map shows the areas in USA from where donations came from for all Mayor candidates. You can select a colored area and it will show you the zip code and the total amount of contribution received from that zip code.

![image](https://user-images.githubusercontent.com/82654977/132999772-4551f60b-48fb-4e95-b17f-26029b0c376b.png)

- You can view the top four candidates by percent of individual contributions. A hover action has been added to the dashboard to make it interactive.

![image](https://user-images.githubusercontent.com/82654977/132999846-cd9b53ca-ea19-4882-897e-b725143bf65e.png)

- Story board is in progress.

![image](https://user-images.githubusercontent.com/82654977/132999083-afd84f0e-8db5-4a07-b8ea-225d311e109f.png)
![image](https://user-images.githubusercontent.com/82654977/132999172-173b89e0-9895-4e2d-8ac2-21ce200a7f07.png)


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

## Data
Datasets date back from 2001 to present year 2021.

**Data Resources:**

https://www.nyccfb.info/follow-the-money/data-library/

Please see the following screen shot that shows the home page of where our data files were stored before ETL

![Screenshot (119)](https://user-images.githubusercontent.com/81484054/132953388-e322ee90-fc3c-4f4c-9e1b-708fa13c51a2.png)

**Entity Relationship Diagram:**

![ERDOUTLINE] (./ERD/ERDOutline.png)
![ERDCURRENTTABLES] (./ERD/ERDCurrentTables.png)

Work in progress.

### ETL Process

The steps taken to extract, transform, and load the data for analysis are as follows:

•	From the New York City Campaign Finance Board webpage download the previous six election years from 2001,2003,2005,2009,2013,2017, and the current 2021 data sets that contain individual and committee donation contributions per candidate as separate CSVs.

•	Extract the previous six election years for each candidate’s expenditures as separate data sets from the New York City Campaign Finance Board.

•	Study each of the 18 Excel data sets and determine which columns hold value for our final outcome. (All Raw CSVs can be found within **Resources** > **Raw CSVs** Folder)

•	Create a RDS and S3 within Amazon Web Services to store the following data sets and share publicly with team.

![Screenshot (118)](https://user-images.githubusercontent.com/81484054/132890400-b199f695-83da-4471-b0d1-9badb392497b.png)

•	Upload each election year csv for individual donations, committee donations, and candidate expenditures within Google Colab.

•	Perform Pyspark functions of reading CSVs in data frames, dropping columns, changing data types, changing column names, converting the value names within each column, filter the data frames to display only the mayor elections and participants within the mayor election year, create a total sum column that’s added by the donation amount, candidate match amount, and previous donation amount

•	Once the data frame is reviewed and approved by the team export the clean data frame into a new CSV (Transformed dataframes into new CSVs can be found in **Resources > Clean CSVs as of Sept 11**)

•	Export the clean data frame tables to connect with the RDS server and Postgres SQL.

•	Create the join on committees and individual tables to prepare for machine learning.

•	Determining columns necessary for ML

**Pre ETL of the raw campaign data**

![Screenshot (121)](https://user-images.githubusercontent.com/81484054/132953447-5b6d9b48-aa2b-4e56-b8d6-6d71de150035.png)

**Post ETL of the cleaned campaign data**
![Screenshot (120)](https://user-images.githubusercontent.com/81484054/132953440-537b9778-6d13-4128-9703-190454493a7f.png)

**ERD OUTLINE**
![ERD OUTLINE](./ERD/ERDOutline.png)

**ERD CURRENT TABLES**
![ERD CURRENT TABLES](./ERD/ERDCurrentTables.png)


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
## Roles

### Abir
    - Point for machine learning
    - TRIANGLE

### Brandon
    - Co point for technologies and integration
    - Co point for database schema
    - Co point for docs
    - CIRCLE

### Riley
    - Co point for database schema
    - Co point for docs
    - CIRCLE

### Jose
    - Point for data visualization
    - Co point for machine learning
    - Co point for technologies and integration
    - X

### Pooja
    - Point for data ops
    - Point for data visualization
    - TRIANGLE

### Sherry
    - Point for repository management
    - Co point for data visualization
    - Co point for integration
    - Co point for docs
    - SQUARE
