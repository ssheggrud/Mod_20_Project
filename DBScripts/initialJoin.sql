Select a.election, a.candidatename, a.candidateid, a.date as individualDate, a.totalamount as individualContribution,
b.date as committeeDate, b.totalamount as committeeContribution
into combined_2017 from individual_2017 as a INNER JOIN committee_2017 as b ON
a.candidateid = b.candidateid;

Select * from combined_2017