import numpy as np

l = np.array([1,2,3,4]) # aynı type'da olmak zorunda

l = np.array([1,2,3,4], dtype="int32")  # type'lar belirlenebiliyor

l = np.zeros(10)  # zero array

l = np.zeros((3, 4))  # 3 row, 4 column [olabilir]

l = np.full((4,5), 5)  # 4 row, 5 column 5'den oluşsun

l = np.arange(0, 12)  # 0'dan 12'ye kadar (11) sıralı döndürür

l = np.linspace(1,2)  # 1 ve 2 dahil elli eşit parçaya böler

l = np.linspace(1,2, 3) # 1 ve 2 dahil 3 eşit parçaya böler

l = np.random.normal(1, 0, (4, 5))  # 4 row, 5 column dan oluşan mean=1 stardant sapması=0

l = np.random.randint(1, 10, (3, 4))  # 3 row, 4 colum 1'den 10'a kadar rastgele değer

l = np.eye(3, 4)  # identity matrix

l.shape # kaç row, kaç column 

l.ndim # kaç dimension

l.size  # kaç eleman

l.dtype # type 

l = np.arange(1 , 11)
l.reshape(2, 5)
l.reshape(5, 2)  # değiştirilebiliyor

a = np.array([1,2,3,4])
b = np.array([5,6,7,8,])
np.concatenate([a, b])  # concatenate
np.stack([a, b])  # yeni dimension oluştur üzerine ekle

l = np.array([0,1,2,3,4,5,6,7,8,9])
np.split(l, [2,5])  # indexe göre üç array oluşturur vsplit hsplit

np.sort(l)  # sıralar ama kaydetmez
