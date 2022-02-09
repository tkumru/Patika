def sum(*numbers):
    res = 0
    for e in numbers:
        res += e
    return res

def student(**kwargs):
    for v in kwargs.values():
        print(v)

print(student(name="Talha", id="864"))