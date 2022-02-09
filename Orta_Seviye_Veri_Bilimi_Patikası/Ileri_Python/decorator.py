def print_func():
    print("Hey")

def decorator_func(func):
    def wrapper_func():
        print("Decorator")
        return func()

    return wrapper_func

decorated_print = decorator_func(print_func)
decorated_print()

#-----------------------------------------------

@decorator_func
def print_func():
    print("Hello")

print_func()