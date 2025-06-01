import os
import json
import re
from dotenv import load_dotenv

load_dotenv()

def natural_sort_key(s):
    return [int(text) if text.isdigit() else text.lower() for text in re.split(r'(\d+)', s)]

def generate_json(base_dir):
    titles = {}
    for title in os.listdir(base_dir):
        title_path = os.path.join(base_dir, title)
        if not os.path.isdir(title_path):
            continue

        chapters = {}
        for chapter in os.listdir(title_path):
            chapter_path = os.path.join(title_path, chapter)
            if not os.path.isdir(chapter_path):
                continue

            pages = [page for page in os.listdir(chapter_path)
                     if page.lower().endswith(('.jpg', '.jpeg', '.webp', '.png'))]
            pages.sort(key=natural_sort_key)
            chapters[chapter] = pages

        sorted_chapters = dict(sorted(chapters.items(), key=lambda x: natural_sort_key(x[0])))
        titles[title] = {'chapters': sorted_chapters}

    return {'titles': titles}

base_dir = os.getenv('BASE_DIR_TITLES')
if not base_dir:
    raise EnvironmentError("[ERROR] BASE_DIR_TITLES is not set in the environment.")

json_data = generate_json(base_dir)

titles = list(json_data['titles'].keys())
print("[INFO] Titles found:\n---\n" + "\n".join(titles) + "\n---")
print(f"[INFO] Total titles: {len(titles)}")

output_file = 'titles.json'
with open(output_file, 'w', encoding='utf-8') as json_file:
    json.dump(json_data, json_file, indent=4, ensure_ascii=False)

print(f"[INFO] JSON file created successfully at {output_file}!")
