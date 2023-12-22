---
title: 'Cálculos Estatísticos em Matriz Bidimensional'
date: '2021-01-20'
slug: 'mean-var-std'
description: 'Pequenas dicas para criar visualizações de dados claras e impactantes.'
category: 'notes'
tags:
  - numpy
  - mean
  - variance
  - standard deviation
---

Esse projeto é um script Python que realiza uma série de cálculos estatísticos em uma matriz 3x3 criada a partir de listas. Os cálculos incluem a média, a variância, o desvio padrão, o máximo, o mínimo e a soma para as linhas, colunas e elementos da matriz.

## Inicio

Exemplo escolhido de valores:

```python
a_list = [0,1,2,3,4,5,6,7,8]
```

### Criação da matriz 3x3

A lista de nove elementos é convertida em um array numpy de dimensões 3x3.

```python
npArray = np.array(a_list).reshape(3, 3)
```

## Cálculos estatísticos

São realizados os cálculos estatísticos para média, variância, desvio padrão, máximo, mínimo e soma, tanto para as linhas quanto para as colunas, além dos valores globais para a matriz completa.

### Média

```python
mean = [npArray.mean(axis=0).tolist(),
        npArray.mean(axis=1).tolist(),
        np.mean(npArray.flatten())]
```

### Variancia

```python
var = [npArray.var(axis=0).tolist(),
        npArray.var(axis=1).tolist(),
        np.var(npArray.flatten())]
```

### Desvio Padrão

```python
std_deviation = [npArray.std(axis=0).tolist(),
        npArray.std(axis=1).tolist(),
        np.std(npArray.flatten())]
```

### Valor Máximo

```python
max = [npArray.max(axis=0).tolist(),
        npArray.max(axis=1).tolist(),
        np.max(npArray.flatten())]
```

### Valor Mínimo

```python
min = [npArray.min(axis=0).tolist(),
        npArray.min(axis=1).tolist(),
        np.min(npArray.flatten())]
```

### Soma Total

```python
sum = [npArray.sum(axis=0).tolist(),
        npArray.sum(axis=1).tolist(),
        np.sum(npArray.flatten())]
```

## Conclusão

Esse script é útil para realizar cálculos estatísticos simples em uma matriz 3x3 e pode ser facilmente adaptado para aceitar matrizes de diferentes tamanhos.
