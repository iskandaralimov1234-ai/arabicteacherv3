import zipfile
import xml.etree.ElementTree as ET
import os

docx_path = r'c:\AI\arabicteacher v3\Lessons\1.docx'

if not os.path.exists(docx_path):
    print(f"File not found: {docx_path}")
    exit(1)

def get_docx_text(path):
    document = zipfile.ZipFile(path)
    xml_content = document.read('word/document.xml')
    document.close()
    
    tree = ET.XML(xml_content)
    
    # Define namespace map
    ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
    
    paragraphs = []
    # Iterate over paragraphs
    for para in tree.iterfind('.//w:p', ns):
        texts = [node.text for node in para.iterfind('.//w:t', ns) if node.text]
        if texts:
            paragraphs.append(''.join(texts))
            
    return '\n'.join(paragraphs)

try:
    text = get_docx_text(docx_path)
    print("Successfully extracted text:")
    print("-" * 20)
    print(text[:2000]) # Print first 2000 chars
    print("-" * 20)
except Exception as e:
    print(f"Error reading docx: {e}")
