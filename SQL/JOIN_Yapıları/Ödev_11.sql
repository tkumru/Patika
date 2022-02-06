select first_name from customer
union all
select first_name from actor;

select first_name from customer
intersect all
select first_name from actor;

select first_name from actor
except
select first_name from customer;