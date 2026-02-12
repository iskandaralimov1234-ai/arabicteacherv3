import os
import re
import json

def validate_lesson_file(filepath):
    errors = []
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
        # Check for mixed script corruption (BiDi)
        corruption_pattern = re.compile(r'([a-zA-Z\u0400-\u04FF][\u0600-\u06FF]|[\u0600-\u06FF][a-zA-Z\u0400-\u04FF])')
        if corruption_pattern.search(content):
            errors.append("Mixed script characters (BiDi corruption) detected.")

        # Basic structure validation (check for tasks and mandatory fields)
        # We can use regex to find tasks and ensure they have required fields
        task_blocks = re.findall(r'\{\s*"id":\s*"(.*?)",\s*"type":\s*"(.*?)",.*?\n\s+\}', content, re.DOTALL)
        
        # Since these are .ts files, not pure JSON, full parsing is hard without a TS parser.
        # But we can look for specific missing blocks.
        
        mc_tasks = re.findall(r'"type":\s*"multiple-choice"(.*?)\}', content, re.DOTALL)
        for i, task in enumerate(mc_tasks):
            if '"options"' not in task:
                errors.append(f"Multiple-choice task {i+1} is missing 'options' array.")
            if '"correctAnswer"' not in task:
                errors.append(f"Multiple-choice task {i+1} is missing 'correctAnswer'.")

        ws_tasks = re.findall(r'"type":\s*"word-scramble"(.*?)\}', content, re.DOTALL)
        for i, task in enumerate(ws_tasks):
            if '"arabic"' not in task:
                errors.append(f"Word-scramble task {i+1} is missing 'arabic' string.")
            if '"scrambledWords"' not in task:
                errors.append(f"Word-scramble task {i+1} is missing 'scrambledWords' array.")

    return errors

def main():
    root = 'src/app/data/lessons'
    all_errors = {}
    for filename in sorted(os.listdir(root)):
        if filename.endswith('.ts'):
            path = os.path.join(root, filename)
            file_errors = validate_lesson_file(path)
            if file_errors:
                all_errors[filename] = file_errors

    if all_errors:
        print("\n❌ DATA VALIDATION FAILED:")
        for file, errors in all_errors.items():
            print(f"\n[{file}]")
            for err in errors:
                print(f"  - {err}")
    else:
        print("\n✅ DATA VALIDATION PASSED: All lessons are structurally sound.")

if __name__ == "__main__":
    main()
