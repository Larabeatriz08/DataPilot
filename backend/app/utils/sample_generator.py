from pathlib import Path
import pandas as pd


class SampleGenerator:

    @staticmethod
    def create():

        output = Path("input/clientes.xlsx")

        output.parent.mkdir(parents=True, exist_ok=True)

        clientes = pd.DataFrame([
            {
                "ID": 1,
                "Nome": "Ana Silva",
                "Idade": 24,
                "Cidade": "São Paulo",
                "Email": "ana@email.com"
            },
            {
                "ID": 2,
                "Nome": "João Santos",
                "Idade": 31,
                "Cidade": "Rio de Janeiro",
                "Email": "joao@email.com"
            },
            {
                "ID": 3,
                "Nome": "Maria Oliveira",
                "Idade": 28,
                "Cidade": "São Paulo",
                "Email": "maria@email.com"
            },
            {
                "ID": 4,
                "Nome": "Carlos Souza",
                "Idade": 45,
                "Cidade": "Belo Horizonte",
                "Email": "carlos@email.com"
            },
            {
                "ID": 5,
                "Nome": "Beatriz Lima",
                "Idade": 22,
                "Cidade": "São Paulo",
                "Email": "beatriz@email.com"
            },
            {
                "ID": 5,
                "Nome": "Beatriz Lima",
                "Idade": 22,
                "Cidade": "São Paulo",
                "Email": "beatriz@email.com"
            }
        ])

        vendas = pd.DataFrame([
            {
                "ID Venda": 1,
                "Cliente": "Ana Silva",
                "Produto": "Notebook",
                "Valor": 4500
            },
            {
                "ID Venda": 2,
                "Cliente": "João Santos",
                "Produto": "Mouse",
                "Valor": 150
            },
            {
                "ID Venda": 3,
                "Cliente": "Maria Oliveira",
                "Produto": "Teclado",
                "Valor": 300
            },
            {
                "ID Venda": 4,
                "Cliente": "Carlos Souza",
                "Produto": "Monitor",
                "Valor": 1200
            },
            {
                "ID Venda": 5,
                "Cliente": "Beatriz Lima",
                "Produto": "Headset",
                "Valor": 450
            }
        ])

        with pd.ExcelWriter(
            output,
            engine="openpyxl"
        ) as writer:

            clientes.to_excel(
                writer,
                sheet_name="Clientes",
                index=False
            )

            vendas.to_excel(
                writer,
                sheet_name="Vendas",
                index=False
            )

        print(f"Arquivo criado com sucesso: {output}")