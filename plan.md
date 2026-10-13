Root  /patients 
    we can have logic here. 
    if no patients we redirect to upload
/patients          → PatientHome (recent 5 by default, search if >5 total)
/upload            → UploadForm (pick file, click "Process Document")
/patients/:id      → PatientViewer (the active/resolved card view we designed earlier)
                    this will show many options one of which will be summary
/patients/:id/summary -> Patient Summary