import os
from dotenv import load_dotenv

load_dotenv()

def rename_files(folder_path):
    if not folder_path:
        print("[ERROR] Environment variable 'PATH_RENAME_TITLES' is not set.")
        return

    if not os.path.exists(folder_path):
        print(f"[ERROR] Folder path does not exist: {folder_path}")
        return

    if not os.path.isdir(folder_path):
        print(f"[ERROR] Path is not a directory: {folder_path}")
        return

    try:
        files = [f for f in os.listdir(folder_path) if os.path.isfile(os.path.join(folder_path, f))]
        images = [f for f in files if f.lower().endswith(('.jpg', '.jpeg', '.webp', '.png'))]
        images.sort()

        if not images:
            print(f"[WARNING] No image files found in folder: {folder_path}")
            return

        for i, filename in enumerate(images, start=1):
            new_filename = f"page_{i:03}{os.path.splitext(filename)[1]}"
            src = os.path.join(folder_path, filename)
            dst = os.path.join(folder_path, new_filename)

            if src != dst:
                os.rename(src, dst)
                print(f"[INFO] Renamed '{filename}' -> '{new_filename}'")

        print("[INFO] Files have been renamed successfully!")

    except Exception as e:
        print(f"[ERROR] An unexpected error occurred: {e}")

folder_path = os.getenv('PATH_RENAME_TITLES')
rename_files(folder_path)
