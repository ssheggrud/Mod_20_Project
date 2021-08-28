# Mod_20_Project
Group Project

## Overview

This project aims to analyze the outcome of the mayoral election for New York City using primarily data from the New York City Campaign Finance Board's data repositories found here, https://www.nyccfb.info/, looking at 'Follow the Money NYC database for 'Candidate Contributions and 'Candidate Expenditures accross boroughs, districts, and types of donations or expenditures. 

In attempt to find correlation across money donated, money expended, and overall election outcome we will use dataparsing libraries for data assembly, a database machine learning model, and data vizualization libraries for dashboarding. 

## Data
Datasets date back to 1989 occur every 4 years to present year 2021. 

For starters:
  The datasets:
  
    'CandidateContributions:
            - starting columns: OCCUPATION	EMPNAME	EMPSTRNO	EMPSTRNAME	EMPCITY	EMPSTATE	AMNT	MATCHAMNT	PREVAMNT	PAY_METHOD	INTERMNO	INTERMNAME	INTSTRNO	INTSTRNM	INTAPTNO	INTCITY	INTST	INTZIP	INTEMPNAME	INTEMPSTNO	INTEMPSTNM	INTEMPCITY	INTEMPST	INTOCCUPA	PURPOSECD	EXEMPTCD	ADJTYPECD	RR_IND	SEG_IND	INT_C_CODE
            - draft database column schema: 

    'CandidateExpenditures:
            - starting columns: ELECTION	OFFICECD	CANDID	CANCLASS	CANDLAST	CANDFIRST	CANDMI	COMMITTEE	FILING	SCHEDULE	PAGENO	SEQUENCENO	REFNO	INV_DATE	DATE	NAME	C_CODE	ORG_IND	STRNO	STRNAME	APARTMENT	CITY	STATE	ZIP	PAY_METHOD	AMNT	PURPOSECD	PURPOSE	EXPLAIN	EXEMPTCD	RR_IND	SEG_IND
            - draft database column schema: 

  Entity Relationship Diagram:

## Technologies

AMAZON RDS, JAVASCRIPT, PANDAS, PG SQL, PLOTLY, PYTHON3, TABLEAU, TENSORFLOW...

### Features to be Implemented

 - A pandas data parser to edit data into database entries with 
   emphasis on the following columns. 

 - An Amazon Relational Database Service to host a PostgreSQL instance which will serve as a data repository, and a start and end point for the machine learning model. 

 - A supervised categorical machine learning approach using TensorFlow which predicts election outcomes on categorical column attributes.

 - Dashboard composition with Tableau and Plotly composed with distribution of data, outliers, trends, hypotheses, predictions and conclusions. 


## Roles
 ### Brandon
    - Co point for technologies
    - Co point for database schema
    - Co point for docs

### Abir
    - Point for machine learning

### Riley
    - Co point for database schema
    - Co point for docs

### Jose
    - Point for data visualization
    - Co point for technologies
    - Co point for integration

### Pooja
    - Point for data ops

### Sherry
    - Point for repository management
    - Co point for integration
    - Co point for docs

## Square
    - Sherry
## Triangle
    - Abir
    - Pooja
## Circle
    - Brandon
    - Riley
## X
    - Brandon
    - Jose


## ML Model

