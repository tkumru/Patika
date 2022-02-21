import pandas as pd
import seaborn as sbn
import matplotlib.pyplot as plt

df = pd.read_csv('year_cord19.csv')
print(df)

sbn.distplot(df['year'].values)
plt.savefig('distribution.png')
plt.show()

plt.scatter(df['year'].values, df['0'].values)
plt.savefig('scatterplot.png')
plt.show()
