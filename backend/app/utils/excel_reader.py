from pathlib import Path

import pandas as pd


class ExcelReader:
    """
    Responsável por ler arquivos Excel.
    """

    @staticmethod
    def read(path: Path) -> dict[str, pd.DataFrame]:

       
        if not path.exists():
            raise FileNotFoundError(f"Arquivo não encontrado: {path}")


        if path.suffix == ".xlsx":
            engine = "openpyxl"
        elif path.suffix == ".xls":
            engine = "xlrd"
        else:
            raise ValueError(
                f"Formato de arquivo não suportado: {path.suffix}"
            )

        
        excel = pd.ExcelFile(path, engine=engine)

       
        data = {}

        for sheet in excel.sheet_names:
            data[sheet] = pd.read_excel(
                path,
                sheet_name=sheet,
                engine=engine
            )

        return data