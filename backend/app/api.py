from pathlib import Path
import shutil

from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from app.services.import_service import ImportService
from app.services.analyzer import Analyzer
from app.automation.cleaning import Cleaning

app = FastAPI(
    title="DataPilot API",
    version="1.0.0"
)

# Permite que o frontend (React) acesse a API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {
        "message": "DataPilot API está funcionando!"
    }


@app.post("/analyze")
async def analyze(file: UploadFile = File(...)):

 
    if not file.filename.endswith((".xlsx", ".xls")):
        raise HTTPException(
            status_code=400,
            detail="Envie um arquivo Excel (.xlsx ou .xls)."
        )

    try:
    
        input_folder = Path("input")
        input_folder.mkdir(exist_ok=True)

        upload_path = input_folder / file.filename

       
        with open(upload_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)

       
        workbook = ImportService.import_excel(upload_path)

        result = {}

        for sheet_name, dataframe in workbook.items():

            dataframe = Cleaning.clean(dataframe)

            analysis = Analyzer.analyze(
                sheet_name,
                dataframe
            )

            result[sheet_name] = analysis

        return {
            "success": True,
            "filename": file.filename,
            "totalSheets": len(workbook),
            "analysis": result
        }

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Erro ao processar o arquivo: {str(e)}"
        )