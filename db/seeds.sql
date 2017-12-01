INSERT INTO Users
    (user_name, user_email, github_id, google_id, active)
VALUES
    ('Drew Mercer', 'awmercer@gmail.com', 20029745, 1117264685222156322242, true);
    ('Rich McRary', 'rgmcrary@gmail.com', 26585293, 106251521784639852662,true);
INSERT INTO Projects
    (posted_date, project_title, project_details, primary_language, active, UserId)
VALUES
    ('2017-11-25 00:04:43','Repair drop downs of search box','I need a php dev to fix the "Search Hotels" box on the home page of Economadic.com','PHP, MySQL, HTML',true,1);
    ('2017-11-26 00:24:43','Node Socket Server Development','We are looking for Node.js ninjas who want to help us design cutting edge scalable products to meet our rapidly growing business. We are building out a team and looking for multiple levels but you should have at least 3 years of programming experience.','Node.js',true,3),
    ('2017-11-27 00:26:38','Angular Website Enhancement','Summary of Challenge:  Implement Angular website enhancement. Add searchable tags on FAQ section of website and add a few navigation items onto homepage.   \n\nTool Logic/Requirements\n•	FAQ Section\no	List items will be pulled from a SharePoint list\no	Depend','Angular',true,3),
    ('2017-11-29 00:28:24','Full Stack Engineer React.js','We are looking for an experienced JavaScript Engineer that has experience with React.js, Node.js and noSql. You will be working on our software application AcceleTrial, together with our Engineers on validating, writing test, and adding new features.','React.js, JavaScript, Node.js',true,1),
    ('2017-11-29 01:18:11','JSON to CSV converter','Looking for someone who can convert a large json file to CSV so I can access and use the data. Pretty simple one time job but there are no free online converters that handle this large of a file.\n\nIt would honestly probably take someone who knew what they','any',true,1),
    ('2017-12-01 00:47:41','Data Mining: Collecting Email Addresses & Research of Schools','I am in need of someone to research top Elementary, Middle and High Schools in select cities and to collect the email addresses of the college counselors, guidance counselors and PTA board members at the schools. There may be 2-8 email addresses per schoo','Any',true,1);
