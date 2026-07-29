from pathlib import Path

from app.services.import_service import ImportService

from app.utils.sample_generator import SampleGenerator

from app.services.analyzer import Analyzer

from app.automation.cleaning import Cleaning


def main():

    SampleGenerator.create()

    file = Path("input/clientes.xlsx")

    # Verificações
    print(f"Arquivo: {file}")
    print(f"Existe? {file.exists()}")
    print(f"Extensão: {file.suffix}")

    workbook = ImportService.import_excel(file)

    print("\n========== IMPORTAÇÃO ==========\n")

    print(f"Total de abas: {len(workbook)}\n")

    for sheet_name, dataframe in workbook.items():
        print(f"\nProcessando {sheet_name}...")

        dataframe = Cleaning.clean(dataframe)

        Analyzer.analyze(sheet_name, dataframe)

if __name__ == "__main__":
    main()