from pathlib import Path

from app.services.import_service import ImportService


def main():

    file = Path("input/clientes.xlsx")

    workbook = ImportService.import_excel(file)

    print("\n========== IMPORTAÇÃO ==========\n")

    print(f"Total de abas: {len(workbook)}\n")

    for sheet_name, dataframe in workbook.items():

        print(f"Planilha: {sheet_name}")
        print(f"Linhas: {len(dataframe)}")
        print(f"Colunas: {len(dataframe.columns)}")
        print("-" * 35)


if __name__ == "__main__":
    main()