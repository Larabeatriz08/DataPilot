import pandas as pd


class Analyzer:
    """
    Responsável por analisar a qualidade dos dados
    de uma planilha.
    """

    @staticmethod
    def analyze(sheet_name: str, dataframe: pd.DataFrame):

        print("\n" + "=" * 50)
        print(f"PLANILHA: {sheet_name}")
        print("=" * 50)

        print(f"Linhas: {len(dataframe)}")
        print(f"Colunas: {len(dataframe.columns)}")

        print(f"\nValores nulos: {dataframe.isnull().sum().sum()}")

        print(f"Linhas duplicadas: {dataframe.duplicated().sum()}")

        print(
            f"Memória utilizada: "
            f"{round(dataframe.memory_usage(deep=True).sum()/1024, 2)} KB"
        )

        print("\nTipos das colunas:")

        for coluna, tipo in dataframe.dtypes.items():
            print(f"• {coluna}: {tipo}")

        print("\nColunas encontradas:")

        for coluna in dataframe.columns:
            print(f"✓ {coluna}")