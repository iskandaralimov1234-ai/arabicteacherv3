import zipfile
import xml.etree.ElementTree as ET
import os

docx_path = r'c:\AI\arabicteacher v3\Lessons\4.docx'

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

text = get_docx_text(docx_path)
print(f"Total length: {len(text)}")
# Split in two parts to avoid terminal limits if any
mid = len(text) // 2
print("--- PART 1 ---")
print(text[:mid])
print("--- PART 2 ---")
print(text[mid:])
