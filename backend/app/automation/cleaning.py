import pandas as pd


class Cleaning:
    """
    Responsável pela limpeza automática dos dados.
    """

    @staticmethod
    def clean(dataframe: pd.DataFrame) -> pd.DataFrame:

        df = dataframe.copy()

        print("\nIniciando limpeza...")

      
        before = len(df)

        df = df.dropna(how="all")

        removed_empty = before - len(df)

       
        before = len(df)

        df = df.drop_duplicates()

        removed_duplicates = before - len(df)

      
        df.columns = (
            df.columns
            .str.strip()
            .str.lower()
            .str.replace(" ", "_")
        )

      
        for column in df.select_dtypes(include="object"):

            df[column] = (
                df[column]
                .astype(str)
                .str.strip()
            )

        print("Limpeza concluída!")

        print(f"Linhas vazias removidas: {removed_empty}")
        print(f"Duplicados removidos: {removed_duplicates}")

        return df