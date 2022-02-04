select rating, count(*) from film
group by rating;

select replacement_cost, count(*) from film
group by replacement_cost
having count(*) > 50;