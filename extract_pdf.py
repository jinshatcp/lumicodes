from pdfminer.high_level import extract_text
import os

pdf_path = r"C:\Users\TQE-200-LENOVO-IT-PC\Documents\lumi\Purple Modern Company Profile Presentation 10 Page (1).pdf"

try:
    if os.path.exists(pdf_path):
        text = extract_text(pdf_path)
        print("--- START PDF TEXT ---")
        print(text)
        print("--- END PDF TEXT ---")
    else:
        print(f"File not found: {pdf_path}")
except Exception as e:
    print(f"Error extracting text: {e}")
