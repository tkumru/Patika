create table employee (
	id int, 
	name varchar(50),
	birthday date,
	email varchar(100)
);

insert into employee (name, birthday, email) values ('Raquela', '1931-09-08', 'rsegebrecht0@ow.ly');
insert into employee (name, birthday, email) values ('Kaycee', '1980-12-13', 'kcreenan1@dyndns.org');
insert into employee (name, birthday, email) values ('Griselda', '1946-01-10', 'gfolonin2@jiathis.com');
insert into employee (name, birthday, email) values ('Dewain', '1989-01-09', 'dmathwin3@altervista.org');
insert into employee (name, birthday, email) values ('Theodoric', '1944-11-01', 'tkindle4@bandcamp.com');
insert into employee (name, birthday, email) values ('Karlens', '1926-01-08', 'kgreatex5@hao123.com');
insert into employee (name, birthday, email) values ('Cristie', '1990-02-12', 'cmiddle6@github.com');
insert into employee (name, birthday, email) values ('Greggory', '1979-01-30', 'gomullen7@barnesandnoble.com');
insert into employee (name, birthday, email) values ('Loree', '1938-03-05', 'lmaccurley8@newyorker.com');
insert into employee (name, birthday, email) values ('Ludvig', '1945-01-11', 'lbrowse9@gravatar.com');
insert into employee (name, birthday, email) values ('Amandie', '1969-07-21', 'ahamnera@artisteer.com');
insert into employee (name, birthday, email) values ('Aila', '1963-07-09', 'akleinplacb@china.com.cn');
insert into employee (name, birthday, email) values ('Phylis', '1974-05-18', 'plivingstonc@storify.com');
insert into employee (name, birthday, email) values ('Bree', '1966-10-30', 'bambrogiottid@devhub.com');
insert into employee (name, birthday, email) values ('Matthew', '1987-08-08', 'msignorellie@bbb.org');
insert into employee (name, birthday, email) values ('Catharina', '1964-07-25', 'chorryf@businessweek.com');
insert into employee (name, birthday, email) values ('Melosa', '1951-11-30', 'matlingg@technorati.com');
insert into employee (name, birthday, email) values ('Adelaida', '1941-05-09', 'amayoralh@vistaprint.com');
insert into employee (name, birthday, email) values ('Kendall', '1971-11-04', 'kdunbabini@moonfruit.com');
insert into employee (name, birthday, email) values ('Skipton', '1929-02-16', 'skupisj@yahoo.co.jp');
insert into employee (name, birthday, email) values ('Torey', '2002-10-19', 'twestwoodk@omniture.com');
insert into employee (name, birthday, email) values ('Matilde', '1937-02-20', 'mbrimmanl@stumbleupon.com');
insert into employee (name, birthday, email) values ('Angelique', '1929-06-02', 'adobbingsm@mtv.com');
insert into employee (name, birthday, email) values ('Lorens', '1923-09-08', 'lcuttenn@friendfeed.com');
insert into employee (name, birthday, email) values ('Lonny', '1977-01-08', 'lehrato@desdev.cn');
insert into employee (name, birthday, email) values ('Keven', '1935-06-27', 'kvellp@fc2.com');
insert into employee (name, birthday, email) values ('Kimberlyn', '1923-02-21', 'kflipsenq@disqus.com');
insert into employee (name, birthday, email) values ('Dan', '1926-01-05', 'dsudworthr@aboutads.info');
insert into employee (name, birthday, email) values ('Kimberlyn', '1983-09-23', 'kwindowss@usgs.gov');
insert into employee (name, birthday, email) values ('Kikelia', '1970-10-31', 'knobbst@instagram.com');
insert into employee (name, birthday, email) values ('Roger', '1985-01-09', 'rmccorkellu@ovh.net');
insert into employee (name, birthday, email) values ('Elyssa', '2003-02-07', 'estammlerv@yahoo.co.jp');
insert into employee (name, birthday, email) values ('Costanza', '1941-04-22', 'cmardellw@fc2.com');
insert into employee (name, birthday, email) values ('Engelbert', '1998-04-16', 'egriffittx@storify.com');
insert into employee (name, birthday, email) values ('Nedda', '1986-12-28', 'nrogansy@businessinsider.com');
insert into employee (name, birthday, email) values ('Ros', '1963-05-01', 'rhanscomez@fc2.com');
insert into employee (name, birthday, email) values ('Carol-jean', '1992-02-04', 'cchapling10@house.gov');
insert into employee (name, birthday, email) values ('Kassia', '2003-05-09', 'kquenby11@wufoo.com');
insert into employee (name, birthday, email) values ('Robert', '1976-11-27', 'rleheude12@chronoengine.com');
insert into employee (name, birthday, email) values ('Urbano', '1985-01-07', 'ugoom13@time.com');
insert into employee (name, birthday, email) values ('Shelden', '1947-05-03', 'sblackborne14@accuweather.com');
insert into employee (name, birthday, email) values ('Shepherd', '1985-03-02', 'scastilla15@youtube.com');
insert into employee (name, birthday, email) values ('Dillon', '1953-02-26', 'dbanck16@pbs.org');
insert into employee (name, birthday, email) values ('Owen', '1956-10-10', 'ogallelli17@theguardian.com');
insert into employee (name, birthday, email) values ('Doralia', '2000-06-06', 'dceccoli18@4shared.com');
insert into employee (name, birthday, email) values ('Martelle', '1972-12-09', 'msaltman19@uiuc.edu');
insert into employee (name, birthday, email) values ('Ave', '1965-10-07', 'acaines1a@google.cn');
insert into employee (name, birthday, email) values ('Toinette', '1956-07-15', 'tbattrick1b@home.pl');
insert into employee (name, birthday, email) values ('Justina', '1946-10-06', 'jvandecappelle1c@t-online.de');
insert into employee (name, birthday, email) values ('Ashil', '1945-08-11', 'aeckert1d@tinypic.com');

update employee
set name='milenyum çocukları'
where birthday > '2000-01-01';

update employee
set name='memurlar'
where email like '%org';

update employee
set name='yaşlılar'
where birthday < '1950-01-01';

update employee
set name='gençler'
where birthday between '1990-01-01' and '2000-01-01';

update employee
set name='orta yaşlılar'
where birthday between '1975-01-01' and '1990-01-01';

delete from employee
where birthday > '2000-01-01';

delete from employee
where email like '%org';

delete from employee
where birthday < '1950-01-01';

delete from employee
where birthday between '1990-01-01' and '2000-01-01';

delete from employee
where birthday between '1975-01-01' and '1990-01-01';
