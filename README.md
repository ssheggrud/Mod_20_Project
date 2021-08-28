# GROUP PROJECT TITLE


## Overview

This project aims to analyze the outcome of the 2021 mayoral election for New York City using data primarily from the New York City Campaign Finance Board's data repositories found here, https://www.nyccfb.info/, looking at 'Follow the Money NYC database for 'Candidate Contributions and 'Candidate Expenditures accross boroughs, districts, and types of donations or expenditures. 

In attempt to find correlation across money donated, money expended, and overall election outcome we will use dataparsing libraries for data assembly, a database machine learning model, and data vizualization libraries for dashboarding. 

## Questions
- Will a donation sum amount have any relationship to a candidate’s election result?
- Will a donation sum from a particular occupation or industry have a relationship to a candidate’s election result?


## Data
Datasets date back to 1989 occur every 4 years to present year 2021. 

For starters: The datasets:

CandidateContributions:

        - COLUMNS: OCCUPATION	EMPNAME	EMPSTRNO	EMPSTRNAME	EMPCITY	EMPSTATE	AMNT	MATCHAMNT	PREVAMNT	PAY_METHOD	INTERMNO	INTERMNAME	INTSTRNO	INTSTRNM	INTAPTNO	INTCITY	INTST	INTZIP	INTEMPNAME	INTEMPSTNO	INTEMPSTNM	INTEMPCITY	INTEMPST	INTOCCUPA	PURPOSECD	EXEMPTCD	ADJTYPECD	RR_IND	SEG_IND	INT_C_CODE

Draft Database Column Schema: 

CandidateExpenditures:

        - COLUMNS: ELECTION	OFFICECD	CANDID	CANCLASS	CANDLAST	CANDFIRST	CANDMI	COMMITTEE	FILING	SCHEDULE	PAGENO	SEQUENCENO	REFNO	INV_DATE	DATE	NAME	C_CODE	ORG_IND	STRNO	STRNAME	APARTMENT	CITY	STATE	ZIP	PAY_METHOD	AMNT	PURPOSECD	PURPOSE	EXPLAIN	EXEMPTCD	RR_IND	SEG_IND

Draft Database Column Schema: 

  Entity Relationship Diagram:

## Technologies

AMAZON RDS, JAVASCRIPT, PANDAS, PG SQL, PLOTLY, PYTHON3, TABLEAU, TENSORFLOW...

### Features to be Implemented

 - A pandas data parser to edit data into database entries with 
   emphasis on the following columns. 

 - An Amazon Relational Database Service to host a PostgreSQL instance which will serve as a data repository, and a start and end point for the machine learning model. 

 - A supervised categorical machine learning approach using TensorFlow which predicts election outcomes on categorical column attributes.

 - Dashboard composition with Tableau and Plotly composed with distribution of data, outliers, trends, hypotheses, predictions and conclusions. 


## ML Model (ADD HERE ABIR)


## Roles

### Abir
    - Point for machine learning
    - TRIANGLE
    
### Brandon
    - Co point for technologies
    - Co point for database schema
    - Co point for docs
    - CIRCLE
  

### Riley
    - Co point for database schema
    - Co point for docs
    - CIRCLE

### Jose
    - Point for data visualization
    - Co point for technologies
    - Co point for integration
    - X

### Pooja
    - Point for data ops
    - TRIANGLE

### Sherry
    - Point for repository management
    - Co point for integration
    - Co point for docs
    - SQUARE

## Preliminary Schema

The steps taken to extract, transform, and load the data for analysis are as follows:

-Choose the optimal spreadset to analyze, then download in .csv format

-Observe in Excel which columns to keep and which to drop in Notebook, and out of which to keep, which to join together (some columns observed were for the same type but split across different categories, e.g. NAME, EMPNAME, INTERMNAME, and INTEMPNAME.)

-Clean data of stray marks, unnecessary prefixes/suffixes, and other imperfections to ensure smooth, error-free processing.

-usedummies for desired string values, e.g. for donor's profession and recipient candidate.

-Perform SMOTEENN analysis and generate associated figures (balanced accuracy score, confusion matrix, and classification report)

-TBA
