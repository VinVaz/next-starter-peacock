---
title: Predição do Nível Marítimo
date: '2019-12'
slug: 'sea-level-predictor'
selectedWork: true
description: 'Previsão da mudança do nível do mar até o ano de 2050 utilizando a média global do nível do mar desde 1880.'
previewImage: '/images/work/sea-level-predictor/sea_level_plot.png'
---

Nesta análise, foi explorado o conjunto de dados do nível do mar da Agência de Proteção Ambiental dos EUA. Utilizando Python e bibliotecas como pandas e matplotlib, foi conduzida uma análise estatística de regressão para compreender padrões e prever futuras elevações do nível do mar.

## Preparo

Importar bibliotecas e carregar os dados

```python
import pandas as pd
import matplotlib.pyplot as plt
from scipy.stats import linregress

# Leitura dos dados
df = pd.read_csv('epa-sea-level.csv')
```

```python
# Imprima os últimos valores
print(df.tail())
```

| Year | CSIRO Adjusted Sea Level | Lower Error Bound | Upper Error Bound | NOAA Adjusted Sea Level |
| :--: | :----------------------: | :---------------: | :---------------: | :---------------------: |
| 2009 |       8.586614164        |    8.311023614    |    8.862204715    |       8.04635409        |
| 2010 |       8.901574794        |    8.618110227    |    9.185039361    |       8.122972567       |
| 2011 |        8.96456692        |    8.661417314    |    9.267716526    |       8.053065004       |
| 2012 |       9.326771644        |    8.992125975    |    9.661417313    |       8.457057629       |
| 2013 |       8.980314951        |    8.622047235    |    9.338582668    |       8.546648227       |

O conjunto de dados pode ser encontrado em:

> [epa-sea-level.csv](https://gist.github.com/VinVaz/b78f0947af1dd11464b64e49d700c6bc)

## Gráfico de Dispersão

Criação do gráfico de dispersão usando Matplotlib. O gráfico terá os anos ('Year') no eixo x e os níveis do mar ajustados ('CSIRO Adjusted Sea Level') no eixo y.

```python
fig = plt.figure()
ax = fig.add_subplot(111)
ax.scatter(x=df['Year'], y=df['CSIRO Adjusted Sea Level'])
```

## Criação das Linhas de Melhor Ajuste

A função linregress da biblioteca SciPy é usada para calcular os parâmetros da linha de melhor ajuste (regressão linear)

```python
slope, intercept, r_value, p_value, std_err = linregress(x=df['Year'], y=df['CSIRO Adjusted Sea Level'])
```

## Criação da Linha de Melhor Ajuste Estendida para 2050

Aqui, uma linha de melhor ajuste estendida é criada para o período completo (1880-2050) usando a função arange do NumPy para gerar anos estendidos. O método plot é usado para adicionar essa linha ao gráfico de dispersão.

A linha de melhor ajuste é determinada pelos coeficientes de inclinação (slope) e interceptação (intercept) obtidos a partir da regressão linear. Esses coeficientes representam a melhor "ajuste" ou aproximação linear para os dados existentes.

Ao estender essa linha para o futuro, estamos fazendo uma suposição de que a tendência linear observada nos dados históricos continuará no mesmo padrão até o ano 2050. É importante notar que essa é uma simplificação e pressupõe que as condições que afetam os dados permanecerão as mesmas. A criação desta linha pode ser útil para fornecer uma estimativa visual de como os dados podem se comportar em um futuro próximo

```python
year_extended_1 = np.arange(1880, 2050, 1)

y1 = ( intercept + slope * year_extended_1 )[:, np.newaxis]
x1 = year_extended_1[:, np.newaxis]

ax.plot(x1, y1, color='#10ff15')
```

## Criação da Linha de Melhor Ajuste Estendida para 2050 (a partir de 2000):

Similar à etapa anterior, mas aqui o data frame é filtrado para incluir apenas dados a partir de 2000, e uma segunda linha de melhor ajuste é criada para esse subconjunto de dados.

A criação da linha de melhor ajuste estendida para o período a partir de 2000 até 2050 serve para analisar e visualizar a tendência mais recente dos dados.

Ao focar em um intervalo específico, neste caso, a partir de 2000, podemos observar se há uma mudança na trajetória da linha de melhor ajuste em comparação com o período completo, revelando possíveis alterações nas tendências ao longo do tempo.

```python
df = df[df['Year'] >= 2000]
year_extended_2 = np.arange(2000, 2050, 1)

slope, intercept, r_value, p_value, std_err = linregress(x=df['Year'], y=df['CSIRO Adjusted Sea Level'])
y2 = ( intercept + slope * year_extended_2 )[:, np.newaxis]
x2 = year_extended_2[:, np.newaxis]
ax.plot(x2, y2, color='#ff25a6')
```

## Adição de Rótulos e Título ao Gráfico

São adicionados rótulos aos eixos x e y, além de um título ao gráfico.

```python
plt.xlabel('Year')
plt.ylabel('Sea Level (inches)')
plt.title('Rise in Sea Level')
```

## Salvar o Gráfico e Exibir

O gráfico é salvo como uma imagem PNG chamada 'sea_level_plot.png', e plt.show() é chamado para exibir o gráfico no ambiente de execução.

```python
plt.savefig('sea_level_plot.png')
plt.show()
```

## Resultado

![Gráfico de Disperção com Tendência](/images/work/sea-level-predictor/sea_level_plot.png)
