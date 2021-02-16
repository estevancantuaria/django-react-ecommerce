# django-react-ecommerce
Projeto de um site de ecommerce desenvolvido em ReactJS  no front com uma api em Django Rest Framework (Python) no back end.

## Rodando o projeto

### Executando a api

Primeiramente acesse a pasta backend crie um virtualenv e instale as dependências:

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

Para rodar o servidor local da API REST na porta 5000:

```bash
python manage.py runserver
```

### Executando o front React

Acesse a pasta frontend, instale as dependências e rode o projeto na porta 8000:

```bash
cd frontend
npm install
npm start
