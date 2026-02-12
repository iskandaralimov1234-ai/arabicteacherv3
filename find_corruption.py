import os
import re

def check_file(filepath):
    # Regex to find mixed characters: 
    # [a-zA-Z\u0400-\u04FF] (Latin/Cyrillic) adjacent to [\u0600-\u06FF] (Arabic)
    pattern = re.compile(r'([a-zA-Z\u0400-\u04FF][\u0600-\u06FF]|[\u0600-\u06FF][a-zA-Z\u0400-\u04FF])')
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        matches = pattern.findall(content)
        if matches:
            print(f"\n[!] Found potential corruption in {filepath}:")
            # Find lines with matches
            lines = content.split('\n')
            for i, line in enumerate(lines):
                if pattern.search(line):
                    print(f"  Line {i+1}: {line.strip()}")

def main():
    root = 'src/app/data/lessons'
    for filename in os.listdir(root):
        if filename.endswith('.ts'):
            check_file(os.path.join(root, filename))

if __name__ == "__main__":
    main()
