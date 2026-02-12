import os

directory = r'c:\AI\arabicteacher v3\src\app\data\lessons\ru'

for filename in os.listdir(directory):
    if filename.endswith(".ts"):
        filepath = os.path.join(directory, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        if "from '../types'" in content:
            new_content = content.replace("from '../types'", "from '../../types'")
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Fixed {filename}")
