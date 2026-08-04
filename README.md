# DataPilot

DataPilot é uma aplicação para análise de planilhas Excel desenvolvida com **FastAPI** e **React**. O sistema permite importar arquivos `.xlsx`, processar múltiplas planilhas, analisar a qualidade dos dados e apresentar os resultados por meio de uma interface web intuitiva.



## Funcionalidades

- Upload de arquivos Excel (`.xlsx` e `.xls`)
- Limpeza automática dos dados
- Análise de qualidade dos dados
- Detecção de valores ausentes
- Identificação de linhas duplicadas
- Exibição dos tipos de dados
- Dashboard com métricas e gráficos



## Tecnologias

### Backend

<p>
  <img src="https://skillicons.dev/icons?i=python,fastapi" />
</p>

**Bibliotecas**

- Pandas
- OpenPyXL
- Uvicorn

### Frontend

<p>
  <img src="https://skillicons.dev/icons?i=react,ts,vite,tailwind" />
</p>

**Bibliotecas**

- Recharts
- Lucide React


## Instalação

### Backend

Clone o repositório

```bash
git clone <url-do-repositorio>
```

Entre na pasta

```bash
cd backend
```

Crie o ambiente virtual

```bash
python -m venv .venv
```

Ative o ambiente virtual

Windows

```bash
.venv\Scripts\activate
```

Linux/macOS

```bash
source .venv/bin/activate
```

Instale as dependências

```bash
pip install -r requirements.txt
```

Execute a API

```bash
uvicorn app.api:app --reload
```

A API estará disponível em

```
http://127.0.0.1:8000
```

Documentação da API

```
http://127.0.0.1:8000/docs
```



### Frontend

Entre na pasta

```bash
cd frontend
```

Instale as dependências

```bash
npm install
```

Execute a aplicação

```bash
npm run dev
```

A interface estará disponível em

```
http://localhost:5173
```

## Made By

Developed with <img src="https://img.icons8.com/ios-filled/50/ffffff/coffee.png" width="16"/> and code by **Lara Lima** 

## Licença

Este projeto está licenciado sob a licença MIT.
