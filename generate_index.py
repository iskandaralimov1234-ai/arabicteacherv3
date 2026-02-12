import os

lessons_dir = r'c:\AI\arabicteacher v3\src\app\data\lessons'
files = [f for f in os.listdir(lessons_dir) if f.startswith('lesson_') and f.endswith('.ts')]
# Sort by lesson number
files.sort(key=lambda x: int(x.split('_')[1].split('.')[0]))

imports = []
exports = []

for f in files:
    lesson_num = f.split('_')[1].split('.')[0]
    var_name = f"lesson{lesson_num}"
    module_name = f"./lesson_{lesson_num}"
    imports.append(f"import {{ {var_name} }} from '{module_name}';")
    exports.append(var_name)

output = "\n".join(imports) + "\n\n"
output += f"export const madinaCurriculum = [\n    " + ",\n    ".join(exports) + "\n];\n"

with open(os.path.join(lessons_dir, 'index.ts'), 'w', encoding='utf-8') as f:
    f.write(output)

print(f"Generated index with {len(exports)} lessons.")
