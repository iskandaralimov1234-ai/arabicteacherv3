import zipfile
import xml.etree.ElementTree as ET
import os

lessons_dir = r'c:\AI\arabicteacher v3\Lessons'
files = ['1.docx', '2.docx', '3.docx', '4.docx']

def get_docx_text(path):
    try:
        document = zipfile.ZipFile(path)
        xml_content = document.read('word/document.xml')
        document.close()
        
        tree = ET.XML(xml_content)
        ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
        
        paragraphs = []
        for para in tree.iterfind('.//w:p', ns):
            texts = [node.text for node in para.iterfind('.//w:t', ns) if node.text]
            if texts:
                paragraphs.append(''.join(texts))
            else:
                paragraphs.append('') # Preserve empty lines
                
        return '\n'.join(paragraphs)
    except Exception as e:
        return f"Error reading {path}: {e}"

for filename in files:
    path = os.path.join(lessons_dir, filename)
    print(f"--- CONTENT OF {filename} ---")
    print(get_docx_text(path))
    print("\n" + "="*50 + "\n")
