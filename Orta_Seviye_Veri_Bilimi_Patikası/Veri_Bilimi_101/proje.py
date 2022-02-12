import pandas as pd
import numpy as np
import math
from sklearn.ensemble import RandomForestClassifier
from pandas.api.types import is_numeric_dtype

dt = pd.read_csv("wn.csv", low_memory=False)
dt_frame = pd.DataFrame(dt)

def fix_missing(df, col, name, nan_dict, is_train):  # Eğer dataframe'de None değer varsa column'ın medyanı ile None değeri değiştirir.
    if is_train:
        if is_numeric_dtype(col):
            if pd.isnull(col).sum:
                df[name + "_na"] = pd.isnull(col)
                nan_dict[name] = col.median()
                df[name] = col.fillna(nan_dict[name])

    else:
        if is_numeric_dtype(col):
            if name in nan_dict:
                df[name + "_na"] = pd.isnull(col)
                df[name] = col.fillna(nan_dict[name])

            else:
                df[name] = col.fillna(df[name].median())

def numericalize(df, col, name):
    if not is_numeric_dtype(col):
        df[name] = col.cat.codes + 1

def proc_df(df, y_fld, nan_dict=None, is_train=True):
    df = df.copy()
    y = df[y_fld].values

    df.drop(y_fld, axis=1, inplace=True)

    if nan_dict is None:
        nan_dict = dict()

    for n, c in df.items():
        fix_missing(df, c, n, nan_dict, is_train)
        numericalize(df, c, n)

    if is_train:
        return df, y, nan_dict

    return df, y

def split_train_val(df, n):
    return df[: n].copy(), df[n:].copy()

raw_train, raw_valid = split_train_val(dt_frame, 600)
x_train, y_train, nas = proc_df(raw_train, "quality")
x_valid, y_valid = proc_df(raw_valid, "quality", nas, False)

model = RandomForestClassifier(n_estimators=10, bootstrap=True, n_jobs=-1)  # Eğitilmiş model oluşmuş olur
model.fit(x_train, y_train)

def root_mean_square_error(x, y):
    return math.sqrt(((x - y)**2).mean())

def print_score(model):
    print(f"Root Mean Square Error of train set {root_mean_square_error(model.predict(x_train), y_train)}")
    print(f"Root Mean Square Error of validation set {root_mean_square_error(model.predict(x_valid), y_valid)}")
    print(f"R^2 of train set {model.score(x_train, y_train)}")
    print(f"R^2 of validation set {model.score(x_valid, y_valid)}")

print_score(model)

print("-" * 100)
# Veri çok fazla olunca az veri üzerinden train oluşturulur
def get_sample(df, n):  # subsetler oluşturur
    idxs = np.random.permutation(len(df))[: n]

    return idxs, df.iloc[idxs].copy()

idxs, x_train = get_sample(x_train, 100)
y_train = y_train[idxs]

model2 = RandomForestClassifier(n_estimators=10, bootstrap=True, n_jobs=-1)
model2.fit(x_train, y_train)

print_score(model2)
