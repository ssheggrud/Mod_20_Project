# ELECTION RESULTS

## Overview
The purpose of this project is to find out if/how money affects the outcome of elections. 

This project aims to analyze the outcome of the 2021 mayoral election for New York City using data primarily from the New York City Campaign Finance Board's data repositories found here, https://www.nyccfb.info/follow-the-money/cunymap-2021 accross boroughs, districts, and types of donations or expenditures. 

In attempt to find correlation across money donated, money expended, and overall election outcome we will use dataparsing libraries for data assembly, a database machine learning model, and data vizualization libraries for dashboarding. 

## Questions
- Will a donation sum amount have any relationship to a candidate’s election result?
- Will a donation sum from a particular occupation or industry have a relationship to a candidate’s election result?

## Technologies

AMAZON RDS, JAVASCRIPT, PANDAS, PG SQL, PLOTLY, PYTHON3, TABLEAU, TENSORFLOW...


## Features to be Implemented

 - A pandas data parser to edit data into database entry format.

 - An Amazon Relational Database Service to host a PostgreSQL instance which will serve as a data repository, and a start and end point for the machine learning model. 

 - Supervised categorical machine learning approach using TensorFlow which predicts election outcomes on categorical column attributes.

 - Dashboard composition with Tableau and Plotly composed with distribution of data, outliers, trends, hypotheses, predictions and conclusions. 

## Week 1 Achievements

- We have the datasets which we will be using for our project. Refer to https://www.nyccfb.info/follow-the-money/cunymap-2021 in order to look at the individual and committee level contributions to our Mayor Candidates. 
- Refer to **2017_Mayor_IC.csv** and **2017_Mayor_CC.csv** files in our repository for sample data.
- At first we had decided to get data from Legistar API provided by NYC Coucil website. We were successfully able to read data from the API. Refer to LegistarAPI.ipynb file posted on https://github.com/ssheggrud/Mod_20_Project/tree/05_Pooja . Altough we later decided that had we used that data, it would have unnecessarily added complexity to our code. Hence, we decided to add each years election results manually to a manually sourced excel as as individual column. We will name this column "Won/Elected".
- We have successfully imported the election year results of 2017 indivdual and committee contributions to a DataFrame. Please refer to: https://github.com/ssheggrud/Mod_20_Project/tree/05_Riley
- We have successfully identified roles for all the team members and have a good outline for our project.

## Week 2 Anticipated Achievements (Work in progress)

  -  We have finished the presentation slide show: https://docs.google.com/presentation/d/1Y1IFccSH7uFPhK94G6A1tpfghD0K2uWRChJvdhHHcMU/edit?usp=sharing


## Data
Datasets date back from 2001 to present year 2021. 

**Data Resources:**

https://www.nyccfb.info/follow-the-money/data-library/

Please see the following screen shot that shows the home page of where our data files were stored before ETL

![Screenshot (119)](https://user-images.githubusercontent.com/81484054/132953388-e322ee90-fc3c-4f4c-9e1b-708fa13c51a2.png)


**For starters: The datasets:**

CandidateContributions:

        - COLUMNS: OCCUPATION	EMPNAME	EMPSTRNO	EMPSTRNAME	EMPCITY	EMPSTATE	AMNT	MATCHAMNT	PREVAMNT	PAY_METHOD	INTERMNO	INTERMNAME	INTSTRNO	INTSTRNM	INTAPTNO	INTCITY	INTST	INTZIP	INTEMPNAME	INTEMPSTNO	INTEMPSTNM	INTEMPCITY	INTEMPST	INTOCCUPA	PURPOSECD	EXEMPTCD	ADJTYPECD	RR_IND	SEG_IND	INT_C_CODE

**Draft Database Column Schema: **

Work in progress.

CandidateExpenditures:

        - COLUMNS: ELECTION	OFFICECD	CANDID	CANCLASS	CANDLAST	CANDFIRST	CANDMI	COMMITTEE	FILING	SCHEDULE	PAGENO	SEQUENCENO	REFNO	INV_DATE	DATE	NAME	C_CODE	ORG_IND	STRNO	STRNAME	APARTMENT	CITY	STATE	ZIP	PAY_METHOD	AMNT	PURPOSECD	PURPOSE	EXPLAIN	EXEMPTCD	RR_IND	SEG_IND
        
**Draft Database Column Schema: **

Work in progress.

**Entity Relationship Diagram:**

Work in progress.

### ETL Process

The steps taken to extract, transform, and load the data for analysis are as follows:
ETL Process
The steps taken to extract, transform, and load the data for analysis are as follows:
•	From the New York City Campaign Finance Board webpage download the previous six election years from 2001,2003,2005,2009,2013,2017, and the current 2021 data sets that contain individual and committee donation contributions per candidate as separate CSVs.

•	Extract the previous six election years for each candidate’s expenditures as separate data sets from the New York City Campaign Finance Board. 

•	Study each of the 18 Excel data sets and determine which columns hold value for our final outcome. 

•	Create a RDS and S3 within Amazon Web Services to store the following data sets and share publicly with team.

![Screenshot (118)](https://user-images.githubusercontent.com/81484054/132890400-b199f695-83da-4471-b0d1-9badb392497b.png)

•	Upload each election year csv for individual donations, committee donations, and candidate expenditures within Google Colab.

•	Perform Pyspark functions of reading CSVs in data frames, dropping columns, changing data types, changing column names, converting the value names within each column, filter the data frames to display only the mayor elections and participants within the mayor election year, create a total sum column that’s added by the donation amount, candidate match amount, and previous donation amount

•	Once the data frame is reviewed and approved by the team export the clean data frame into a new CSV

•	Export the clean data frame tables to connect with the RDS server and Postgres SQL.

•	Create the following tables of ________ from our control table to further transform our data frames for visual use and Machine Learning testing

•	Further joined the following tables for ___ use

**Pre ETL of the raw campaign data**

![Screenshot (121)](https://user-images.githubusercontent.com/81484054/132953447-5b6d9b48-aa2b-4e56-b8d6-6d71de150035.png)

**Post ETL of the cleaned campaign data**

![Screenshot (120)](https://user-images.githubusercontent.com/81484054/132953440-537b9778-6d13-4128-9703-190454493a7f.png)


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
- We aim to use a Random Forest Classifier algorithm for this model

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


