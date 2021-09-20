-- Create Table
CREATE TABLE individual_x (
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
Amount FLOAT,
MatchAmt INT,
PrevAmt INT,
PayMethod TEXT,
TotalAmount INT
);

CREATE TABLE committee_x (
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
Amount FLOAT,
MatchAmt INT,
PrevAmt INT,
PayMethod TEXT,
TotalAmount INT
);

CREATE TABLE expenditures_x(
Election TEXT,
CandidateID INT,
CandidateLastName TEXT,
CandidateFirstName TEXT,
ContributionType TEXT,
City TEXT,
"State" TEXT,
"ZipCode" TEXT,
Amount FLOAT,
PurposeCode TEXT,
Purpose TEXT
);

CREATE TABLE merged_x(
Election TEXT,
CandidateID TEXT,
CandidateName TEXT,
Date DATE,
ContributerType, TEXT,
City TEXT,
State TEXT,
ZipCode INT,
Amount FLOAT,
MatchAmt INT,
PrevAmt INT,
TotalAmount INT,
Expenditure_Amount INT,
Purpose Code TEXT,
Purpose TEXT
)

CREATE TABLE merged_2005(
Election TEXT,
CandidateID TEXT,
CandidateName TEXT,
Date DATE,
ContributionType TEXT,
City TEXT,
State TEXT,
ZipCode INT,
Amount FLOAT,
MatchAmt INT,
PrevAmt INT,
TotalAmount INT,
Expenditure_Amount INT,
PurposeCode TEXT,
Purpose TEXT
)


CREATE TABLE merged_2009(
Election TEXT,
CandidateID TEXT,
CandidateName TEXT,
Date DATE,
ContributionType TEXT,
City TEXT,
State TEXT,
ZipCode INT,
Amount FLOAT,
MatchAmt FLOAT,
PrevAmt FLOAT,
TotalAmount FLOAT,
Expenditure_Amount INT,
PurposeCode TEXT,
Purpose TEXT
)


CREATE TABLE merged_2013(
Election TEXT,
CandidateID TEXT,
CandidateName TEXT,
Date DATE,
ContributionType TEXT,
City TEXT,
State TEXT,
ZipCode INT,
Amount FLOAT,
MatchAmt FLOAT,
PrevAmt FLOAT,
TotalAmount FLOAT,
Expenditure_Amount INT,
PurposeCode TEXT,
Purpose TEXT
)


CREATE TABLE merged_2017(
Election TEXT,
CandidateID TEXT,
CandidateName TEXT,
Date DATE,
ContributionType TEXT,
City TEXT,
State TEXT,
ZipCode INT,
Amount FLOAT,
MatchAmt FLOAT,
PrevAmt FLOAT,
TotalAmount FLOAT,
Expenditure_Amount INT,
PurposeCode TEXT,
Purpose TEXT
)


CREATE TABLE merged_2021(
Election TEXT,
CandidateID TEXT,
CandidateName TEXT,
Date DATE,
ContributionType TEXT,
City TEXT,
State TEXT,
ZipCode INT,
Amount FLOAT,
MatchAmt FLOAT,
PrevAmt FLOAT,
TotalAmount FLOAT,
Expenditure_Amount INT,
PurposeCode TEXT,
Purpose TEXT
)