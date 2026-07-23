from pathlib import Path

import pandas as pd


class ExcelReader:
    """
    Responsável por ler arquivos Excel.
    """

    @staticmethod
    def read(path: Path) -> dict[str, pd.DataFrame]:

        excel = pd.ExcelFile(path)

        data = {}

        for sheet in excel.sheet_names:
            data[sheet] = pd.read_excel(path, sheet_name=sheet)

        return data