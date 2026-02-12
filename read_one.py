import zipfile
import xml.etree.ElementTree as ET
import os
import sys

def get_docx_text(path):
    document = zipfile.ZipFile(path)
    xml_content = document.read('word/document.xml')
    document.close()
    tree = ET.XML(xml_content)
    ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
    paragraphs = []
    for para in tree.iterfind('.//w:p', ns):
        texts = [node.text for node in para.iterfind('.//w:t', ns) if node.text]
        paragraphs.append(''.join(texts))
    return '\n'.join(paragraphs)

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python read_one.py <filename>")
        sys.exit(1)
    filename = sys.argv[1]
    path = os.path.join(r'c:\AI\arabicteacher v3\Lessons', filename)
    print(get_docx_text(path))
