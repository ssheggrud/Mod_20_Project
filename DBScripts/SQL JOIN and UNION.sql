-- Create Table
create table merge_2013(
Election TEXT,
CandidateID TEXT,
CandidateName TEXT,
"Date" DATE,
ContributerType TEXT,
City TEXT,
"State" TEXT,
ZipCode INT,
Amount DOUBLE PRECISION,
MatchAmt DOUBLE PRECISION,
PrevAmt DOUBLE PRECISION,
TotalAmount DOUBLE PRECISION,
ExpenditureAmount int,
PurposeCode text,
Purpose text
);

drop table merged_2013
Select * from committee_2021
Select * from individual_2021
Select * from expenditures_2021


Select individual_2021.candidatename,
individual_2021.date,
individual_2021.city,
individual_2021.contributertype,
individual_2021.Amount,
individual_2021.boroughname
FROM individual_2021
FULL OUTER JOIN committee_2021
on individual_2021.date = committee_2021.date
Order by individual_2021.date;

SELECT
Election, Candidateid, CandidateName, Date, "Name", ContributerType, BoroughName, City, "State", "ZipCode", ContributionState, Amount,
MatchAmt, PrevAmt, PayMethod, TotalAmount 
FROM individual_2021
UNION ALL
SELECT 
Election, Candidateid, CandidateName, Date, "Name", ContributerType, BoroughName, City, "State", "ZipCode", ContributionState, Amount,
MatchAmt, PrevAmt, PayMethod, TotalAmount 
FROM committee_2021;