CREATE TABLE ContributerTypeCodes
(
    ID SERIAL PRIMARY KEY,
    Code TEXT ,
    Description TEXT
);


INSERT INTO ContributerTypeCodes (Code,Description)
VALUES ( 'Can', 'Candidate' );

INSERT INTO ContributerTypeCodes (Code,Description)
VALUES ( 'CORP', 'Corporation' );

INSERT INTO ContributerTypeCodes (Code,Description)
VALUES ( 'EMPO', 'Labor Union' );

INSERT INTO ContributerTypeCodes (Code,Description)
VALUES ( 'FAM', 'Candidate''s Family' );

INSERT INTO ContributerTypeCodes (Code,Description)
VALUES ( 'IND', 'Individual' );

INSERT INTO ContributerTypeCodes (Code,Description)
VALUES ( 'LLC', 'Limited Liability Company' );

INSERT INTO ContributerTypeCodes (Code,Description)
VALUES ( 'OTHR', 'Other' );

INSERT INTO ContributerTypeCodes (Code,Description)
VALUES ( 'PART', 'Partnership' );

INSERT INTO ContributerTypeCodes (Code,Description)
VALUES ( 'PCOMC', 'Candidate Committee' );

INSERT INTO ContributerTypeCodes (Code,Description)
VALUES ( 'PCOMP', 'Political Action Committee' );

INSERT INTO ContributerTypeCodes (Code,Description)
VALUES ( 'PCOMZ', 'Party Committee' );

INSERT INTO ContributerTypeCodes (Code,Description)
VALUES ( 'SPO', 'Candidate''s Spouse' );

INSERT INTO ContributerTypeCodes (Code,Description)
VALUES ( 'UNKN', 'Unknown' );





