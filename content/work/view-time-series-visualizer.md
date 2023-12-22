---
title: Visualizador de Séries Temporais
date: '2020-04'
slug: 'view-time-series-visualizer'
selectedWork: true
description: 'Análise do crescimento do fórum da freeCodeCamp.org entre 2016 e 2019 utilizando Python'
previewImage: '/images/work/view-time-series-visualizer/box_plot.png'
---

Neste projeto, a tarefa é visualizar dados de séries temporais usando gráficos de linha, gráficos de barras e box plots. Utilizaremos as bibliotecas Pandas, Matplotlib e Seaborn para visualizar um conjunto de dados contendo o número de visualizações de página do fórum freeCodeCamp.org de 2016-05-09 a 2019-12-03. As visualizações dos dados ajudarão a entender os padrões nas visitas e identificar o crescimento anual e mensal.

### Conjunto de Dados: Dados do Fórum freeCodeCamp.org

**Estrutura do Conjunto de Dados:**

- **date:** A data correspondente aos dados de visualizações.
- **value:** O número de visualizações de página registradas para o respectivo dia.

|    date    | value |
| :--------: | :---: |
| 2016-05-09 | 1201  |
| 2016-05-10 | 2329  |
| 2016-05-11 | 1716  |
| 2016-05-12 | 10539 |
| 2016-05-13 | 6933  |

Conjunto de dados completo:

> [fcc-forum-pageviews.csv](https://gist.github.com/VinVaz/fe0cbd0db5e1acccdc76e845e99c5672)

## Etapa 1: Importação e Limpeza dos Dados

```python
# Importando bibliotecas necessárias
import matplotlib.pyplot as plt
import pandas as pd
import seaborn as sns
import matplotlib.ticker as ticker
import matplotlib.dates as mpl_dates
from pandas.plotting import register_matplotlib_converters

# Registrando conversores de data do pandas para matplotlib
register_matplotlib_converters()

# Importar dados
df = pd.read_csv('fcc-forum-pageviews.csv', )
df = df.set_index(['date'])
df.index = pd.to_datetime(df.index,format='%Y-%m-%d')

# Limpeza dos dados:
# Páginas vistas que estavam no top 2.5% do conjunto de dados
df = df[df['value'] <= df['value'].quantile(97.5/100)]

# Páginas vistas que estavam no bottom 2.5% do conjunto de dados.
df = df[df['value'] >= df['value'].quantile(2.5/100)]

sns.set_style('white')
```

## Etapa 2: Visualização dos Dados

### Gráfico de Linha: Visualização Diária

Essa função é responsável por criar um gráfico de linha que visualiza os dados de série temporal. Primeiro, ela filtra os dados para remover os valores extremos (2.5% superiores e 2.5% inferiores). Em seguida, utiliza a biblioteca `Matplotlib` para criar um gráfico de linha com a data no eixo x e as visualizações da página no eixo y. O gráfico é ajustado para um formato adequado e é salvo como uma imagem chamada `line_plot.png`.

```python
def draw_line_plot():
    # Criando o gráfico de linha
    fig, ax = plt.subplots()
    fig.set_figheight(5.61)
    fig.set_figwidth(18)
    ax.plot_date(df.index,
                 df['value'],
                 color='#d62728',
                 linestyle='solid',
                 linewidth = 1.8,
                 marker=None)

    ax.set_title('Daily freeCodeCamp Forum Page Views 5/2016-12/2019',fontsize=14.1 )
    ax.set_xlabel('Date', fontsize=12.7)
    ax.set_ylabel('Page Views', fontsize=12.7)
    ax.tick_params(axis='both', which='major', labelsize=12.7)    
    ax.xaxis.set_major_locator(ticker.MultipleLocator(6*29))

   # Formato das strings no eixo "x"
    date_format = mpl_dates.DateFormatter('%Y-%m')
    ax.xaxis.set_major_formatter(date_format)    

    # Salvando a imagem e retornando a figura
    fig.savefig('line_plot.png')

    return fig
```

### Gráfico de Barras: Média Diária por Mês e Ano

Nesta função, os dados são modificados para criar um gráfico de barras mensal. Primeiro, os dados são agrupados por ano e mês e a média das visualizações diárias é calculada. Em seguida, é criado um gráfico de barras usando a biblioteca `Seaborn` para mostrar a média diária de visualizações agrupadas por ano e mês. O gráfico tem o ano no eixo x e a média de visualizações no eixo y, e é salvo como uma imagem chamada `bar_plot.png`.

```python
def draw_bar_plot():

    # Copiando e modificando os dados para o gráfico de barras mensal
    df_bar = df.copy()
    df_bar['month'] = df.index.strftime('%B')
    df_bar['year'] = df.index.strftime('%Y')
    df_bar = df_bar.groupby(['year', 'month']).mean()
    df_bar = df_bar.unstack('month')
    df_bar.columns = df_bar.columns.map(lambda x: x[1])
    df_bar.columns.name = 'Months'
    new_order = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    df_bar = df_bar.reindex(new_order, axis=1)

    # Criando o gráfico de barras
    plot = df_bar.plot(kind='bar')
    plot.set_xlabel('Years')
    plot.set_ylabel('Average Page Views')
    fig = plot.get_figure()

    # A legenda deve mostrar os rótulos dos meses e ter um título "Meses".
   
    # Salvando a imagem e retornando a figura
    fig.savefig('bar_plot.png')

    return fig

```

### Gráficos de Caixa (Box Plots): Tendência Anual e Sazonalidade Mensal

Nesta função, os dados são preparados para criar dois gráficos de caixa (box plots). Primeiro, os dados são organizados por ano e mês. Em seguida, dois gráficos de caixa são criados usando a biblioteca `Seaborn`: um para mostrar a distribuição dos valores ao longo dos anos (tendência) e outro para mostrar a distribuição dos valores ao longo dos meses (sazonalidade). Os gráficos de caixa são ajustados adequadamente e são salvos como imagens chamadas `box_plot.png`.

```python

def draw_box_plot():

    # Preparando dados para os gráficos de caixa
    df_box = df.copy()
    df_box.reset_index(inplace=True)
    df_box['year'] = [d.year for d in df_box.date]
    df_box['month'] = [d.strftime('%b') for d in df_box.date]
    month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    df_box['month'] = pd.Categorical(df_box['month'], categories=month, ordered=True)
    df_box = df_box.sort_values(by=['month'], inplace=False)

    # Criando os gráficos de caixa (Seaborn)
    fig, axes = plt.subplots(figsize=(20, 7), ncols=2, sharex=False)
   
    ax1 = sns.boxplot(x='year', y='value', data=df_box, ax=axes[0])
    ax1.set_title('Year-wise Box Plot (Trend)')
    ax1.set_ylabel('Page Views')
    ax1.set_xlabel('Year')

    ax2 = sns.boxplot(x='month', y='value', data=df_box, ax=axes[1])
    ax2.set_title('Month-wise Box Plot (Seasonality)')
    ax2.set_ylabel('Page Views')
    ax2.set_xlabel('Month')

    # Salvando a imagem e retornando a figura
    fig.savefig('box_plot.png')

    return fig

# Chamando a função para criar o gráfico de caixa
draw_box_plot()

```

## Resultados

![Gráfico de Linha](/images/work/view-time-series-visualizer/line_plot.png)

![Gráfico de Barras](/images/work/view-time-series-visualizer/bar_plot.png)

![Gráficos de Caixa](/images/work/view-time-series-visualizer/box_plot.png)
