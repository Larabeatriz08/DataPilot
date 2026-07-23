from app.utils.excel_reader import ExcelReader


class Analyzer:

    @staticmethod
    def analyze(file_path: str):

        sheets = ExcelReader.read(file_path)

        print("\n===== RELATÓRIO =====\n")

        for name, df in sheets.items():

            print(f"Planilha: {name}")
            print(f"Linhas: {len(df)}")
            print(f"Colunas: {len(df.columns)}")

            print("\nColunas:")

            for column in df.columns:
                print(f" - {column}")

            print("\nTipos:")

            print(df.dtypes)

            print("-" * 40)