select city, country from city
left join country on country.country_id=city.country_id;

select payment_id, first_name, last_name from payment
right join customer on customer.customer_id=payment.customer_id;

select rental_id, first_name, last_name from rental
full join customer on customer.customer_id=rental.customer_id;