import json
import os

# Configuration
INPUT_JSON = "medina_arabic_course_qwen.json"
OUTPUT_DIR_RU = "src/app/data/lessons/ru"

# Ensure output directory exists
os.makedirs(OUTPUT_DIR_RU, exist_ok=True)

def generate_lesson_file(lesson, locale="ru"):
    lesson_id = lesson["lesson_number"]
    
    # We only want lessons 14 to 82
    if not (14 <= lesson_id <= 82):
        return
        
    print(f"Generating Lesson {lesson_id}...")
    
    # Build title
    title = f'Урок {lesson_id}: {lesson.get("title", "")} ({lesson.get("arabic_title", "")})'
    grammar = lesson.get("title", "")
    
    # Build Theory Sections
    theory = lesson.get("theory", {})
    description = theory.get("description", "").replace('"', '\\"').replace('\n', '\\n')
    
    sections_str = f"""
            {{
                title: "📖 Описание",
                content: "{description}"
            }}"""
            
    # Add key rules if any
    key_rules = theory.get("key_rules", [])
    if key_rules:
        rules_str = "\\n- ".join(key_rules)
        sections_str += f""",
            {{
                title: "📝 Ключевые правила",
                content: "- {rules_str}"
            }}"""
            
    # Add examples if any
    examples = lesson.get("examples", [])
    if examples:
        examples_ts = []
        for ex in examples:
            arabic = ex.get("arabic", "").replace('"', '\\"')
            meaning = f'{ex.get("transcription", "")} — {ex.get("translation", "")}'
            if ex.get("explanation"):
                 meaning += f' ({ex.get("explanation", "")})'
            meaning = meaning.replace('"', '\\"')
            examples_ts.append(f'                    {{ arabic: "{arabic}", meaning: "{meaning}" }}')
            
        examples_joined = ",\n".join(examples_ts)
        sections_str += f""",
            {{
                title: "🗣️ Примеры",
                content: "Обратите внимание на следующие примеры:",
                examples: [
{examples_joined}
                ]
            }}"""
            
    # Add Vocabulary
    vocab = lesson.get("vocabulary", [])
    if vocab:
        vocab_ts = []
        for v in vocab:
             arabic = v.get("arabic", "").replace('"', '\\"')
             meaning = f'{v.get("transcription", "")} — {v.get("translation", "")}'.replace('"', '\\"')
             vocab_ts.append(f'                    {{ arabic: "{arabic}", meaning: "{meaning}" }}')
        
        vocab_joined = ",\n".join(vocab_ts)
        sections_str += f""",
            {{
                title: "📚 Словарь",
                content: "Новые слова из этого урока:",
                examples: [
{vocab_joined}
                ]
            }}"""

    # Build Tasks
    tasks_ts = []
    test_questions = lesson.get("test", {}).get("questions", [])
    
    for i, q in enumerate(test_questions):
        q_type = "multiple-choice"  # Default fallback mapping
        question = q.get("question", "").replace('"', '\\"').replace('\n', '\\n')
        options = q.get("options", [])
        correct_idx = q.get("correct", 0)
        
        if 0 <= correct_idx < len(options):
            correct_answer = options[correct_idx].replace('"', '\\"')
        else:
            correct_answer = options[0].replace('"', '\\"') if options else ""
            
        opts_joined = ", ".join(['"' + opt.replace('"', '\\"') + '"' for opt in options])
        
        task_str = f"""
        {{
            id: "{lesson_id}-{i+1}",
            type: "{q_type}",
            question: "{question}",
            options: [{opts_joined}],
            correctAnswer: "{correct_answer}"
        }}"""
        tasks_ts.append(task_str)

    tasks_joined = ",\n".join(tasks_ts)

    # Combine into file content
    file_content = f"""import {{ Lesson }} from '../../types';

export const lesson{lesson_id}: Lesson = {{
    id: {lesson_id},
    title: "{title}",
    grammar: "{grammar}",
    theory: {{
        sections: [{sections_str}
        ]
    }},
    tasks: [{tasks_joined}
    ]
}};
"""
    
    # Write file
    file_path = os.path.join(OUTPUT_DIR_RU, f"lesson_{lesson_id}.ts")
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(file_content)

def main():
    print("Reading JSON file...")
    with open(INPUT_JSON, "r", encoding="utf-8") as f:
        data = json.load(f)
        
    lessons = data.get("lessons", [])
    for lesson in lessons:
        generate_lesson_file(lesson, "ru")
        
    print("✅ Lesson generation complete.")

if __name__ == "__main__":
    main()
