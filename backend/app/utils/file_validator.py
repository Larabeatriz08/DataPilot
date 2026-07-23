from pathlib import Path


class FileValidator:
    """
    Responsável por validar arquivos antes da leitura.
    """

    SUPPORTED_EXTENSIONS = {".xlsx", ".xls"}

    @staticmethod
    def validate(file_path: str | Path) -> Path:
        path = Path(file_path)

        if not path.exists():
            raise FileNotFoundError(f"Arquivo não encontrado: {path}")

        if not path.is_file():
            raise ValueError(f"{path} não é um arquivo.")

        if path.suffix.lower() not in FileValidator.SUPPORTED_EXTENSIONS:
            raise ValueError(
                f"Formato inválido: {path.suffix}. Utilize arquivos .xlsx ou .xls."
            )

        return path