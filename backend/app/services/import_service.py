from app.utils.excel_reader import ExcelReader
from app.utils.file_validator import FileValidator


class ImportService:
    """
    Coordena todo o processo de importação.
    """

    @staticmethod
    def import_excel(file_path):

        path = FileValidator.validate(file_path)

        return ExcelReader.read(path)