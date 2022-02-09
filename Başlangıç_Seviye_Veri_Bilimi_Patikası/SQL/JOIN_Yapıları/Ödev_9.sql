select city, country from city
inner join country on country.country_id=city.country_id;

select payment_id, first_name, last_name from payment
inner join customer on customer.customer_id=payment.customer_id;

select rental_id, first_name, last_name from rental
inner join customer on customer.customer_id=rental.customer_id;