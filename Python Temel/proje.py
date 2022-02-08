from collections.abc import Iterable

def flat_list(array):
    for value in array:
        if isinstance(value, Iterable) and not isinstance(value, (str, bytes)):
            yield from flat_list(value)
        else:
            yield value

def turn_list(array):
    array = array[::-1]
    
    count = 0
    for value in array:
        if type(value) == list:
            array[count] = value[::-1]
        count += 1

    return array    
