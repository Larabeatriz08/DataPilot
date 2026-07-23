from pathlib import Path

import pandas as pd


class ExcelReader:

    @staticmethod
    def read(file_path: str):

        path = Path(file_path)

        if not path.exists():
            raise FileNotFoundError(f"Arquivo não encontrado: {file_path}")

        excel = pd.ExcelFile(path)

        sheets = {}

        for sheet in excel.sheet_names:
            sheets[sheet] = pd.read_excel(path, sheet_name=sheet)

        return sheets