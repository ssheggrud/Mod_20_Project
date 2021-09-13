-- Create Table
CREATE TABLE individual_2017 (
 Election TEXT,
 Candidateid INT,
 CandidateName TEXT,
 Date TEXT,
"Name" TEXT,
ContributerType TEXT,
BoroughName TEXT,
City TEXT,
"State" TEXT,
"ZipCode" INT,
ContributionState TEXT,
Amount INT,
MatchAmt INT,
PrevAmt INT,
PayMethod TEXT,
TotalAmount INT
);
-- Create Table
CREATE TABLE committee_2017 (
 Election TEXT,
 Candidateid INT,
 CandidateName TEXT,
 Date TEXT,
"Name" TEXT,
ContributerType TEXT,
BoroughName TEXT,
City TEXT,
"State" TEXT,
"ZipCode" TEXT,
ContributionState TEXT,
Amount INT,
MatchAmt INT,
PrevAmt INT,
PayMethod TEXT,
TotalAmount INT
);
create table expenditures_2017(
Election TEXT,
CandidateID INT,
CandidateLastName TEXT,
CandidateFirstName TEXT,
ContributionType TEXT,
City TEXT,
"State" TEXT,
"ZipCode" TEXT,
Amount INT,
PurposeCode TEXT,
Purpose TEXT
);
Select * from individual_2017
Select * from committee_2017
Select * from expenditures_2017
Drop table individual_2017
Drop table committee_2017
Drop table expenditures_2017