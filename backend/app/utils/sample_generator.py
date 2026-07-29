from pathlib import Path

import pandas as pd


class SampleGenerator:
    """
    Gera uma planilha de exemplo para testes.
    """

    @staticmethod
    def create():

        input_folder = Path("input")
        input_folder.mkdir(exist_ok=True)

        file = input_folder / "clientes.xlsx"

        clientes = pd.DataFrame({
            "ID": [1, 2, 3, 4, 5],
            "Nome": [
                "Ana",
                "João",
                "Maria",
                "Carlos",
                "Fernanda"
            ],
            "Cidade": [
                "São Paulo",
                "Campinas",
                "Santos",
                "Sorocaba",
                "Osasco"
            ],
            "Valor": [
                1500.50,
                2300.00,
                980.25,
                4100.75,
                1890.00
            ]
        })

        vendas = pd.DataFrame({
            "Pedido": [101, 102, 103, 104],
            "Cliente": [
                "Ana",
                "João",
                "Maria",
                "Carlos"
            ],
            "Quantidade": [
                2,
                5,
                1,
                3
            ]
        })

        with pd.ExcelWriter(file, engine="openpyxl") as writer:
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

        print("Planilha de exemplo criada com sucesso!")