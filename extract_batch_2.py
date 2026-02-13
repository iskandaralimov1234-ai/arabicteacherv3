import zipfile
import xml.etree.ElementTree as ET
import os

lessons_dir = r'c:\AI\arabicteacher v3\Lessons'
files = ['10.docx', '11.docx', '12.docx']

def get_docx_text(path):
    try:
        if not os.path.exists(path):
            return f"File not found: {path}"
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

with open('docx_contents_batch_2.txt', 'w', encoding='utf-8') as out:
    for filename in files:
        path = os.path.join(lessons_dir, filename)
        out.write(f"=== CONTENT OF {filename} ===\n")
        out.write(get_docx_text(path))
        out.write("\n" + "="*50 + "\n\n")

print("Done. Check docx_contents_batch_2.txt")
