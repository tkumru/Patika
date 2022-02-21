import pandas as pd

df = pd.read_csv("metadata.csv", low_memory=False)

df['year'] = pd.DatetimeIndex(df['publish_time']).year

df = df.groupby("year").size()

df.to_csv('year_cord19.csv')
