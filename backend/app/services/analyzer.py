import pandas as pd


class Analyzer:
    """
    Responsável por analisar a qualidade dos dados
    de uma planilha.
    """

    @staticmethod
    def analyze(sheet_name: str, dataframe: pd.DataFrame):

        rows = len(dataframe)
        columns = len(dataframe.columns)
        missing = int(dataframe.isnull().sum().sum())
        duplicates = int(dataframe.duplicated().sum())
        memory = round(
            dataframe.memory_usage(deep=True).sum() / 1024,
            2
        )

        column_types = {
            column: str(dtype)
            for column, dtype in dataframe.dtypes.items()
        }

        column_names = dataframe.columns.tolist()

   
        print("\n" + "=" * 50)
        print(f"PLANILHA: {sheet_name}")
        print("=" * 50)

        print(f"Linhas: {rows}")
        print(f"Colunas: {columns}")
        print(f"Valores nulos: {missing}")
        print(f"Linhas duplicadas: {duplicates}")
        print(f"Memória utilizada: {memory} KB")

        print("\nTipos das colunas:")
        for column, dtype in column_types.items():
            print(f"• {column}: {dtype}")

        print("\nColunas encontradas:")
        for column in column_names:
            print(f"✓ {column}")

        # Agora retorna os dados para a API
        return {
            "rows": rows,
            "columns": columns,
            "missing": missing,
            "duplicates": duplicates,
            "memory": memory,
            "column_types": column_types,
            "columns_list": column_names,
        }