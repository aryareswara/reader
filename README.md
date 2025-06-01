# Reader

## Overview

Reader is a web application for browsing and reading image-based chapters (such as comics or manga) organized by title and chapter. The frontend is built with JavaScript and HTML, while Python scripts handle backend tasks like generating the chapter/image structure and renaming files.

## Features

- Browse a collection of titles and their chapters.
- View all images in a chapter.
- Navigate chapters using buttons or arrow keys.
- Remembers your last viewed title and chapter using local storage.

## How It Works

1. **Image Organization:**  
   Place your titles and chapters as folders inside the directory specified by `BASE_DIR_TITLES`. Each chapter folder contains image files (e.g., .jpg, .png).
    ```
    download/
    titles/
    └── Manhwa title here/
        └── Chapter 1/
            ├── page_001.jpg
            ├── page_002.jpg
            └── ... (other images)
    renamer.py
    generate_json.py
    index.html
    START.bat
    ```

2. **Generate JSON:**  
   Run `generate_json.py` (or use `START.bat`) to scan your folders and create a `titles.json` file describing the structure.

3. **Web App:**  
   Open `index.html` in your browser. The app loads `titles.json`, lets you select a title and chapter, and displays the images.

4. **Renaming Images:**  
   Use `renamer.py` to standardize image file names in a chapter folder (e.g., page_001.jpg).

## File Descriptions

- **script.js**: Handles UI, navigation, and image loading.
- **generate_json.py**: Scans your folders and generates `titles.json`.
- **renamer.py**: Renames images in a chapter folder to a consistent format.
- **START.bat**: Runs the generator, starts a local server, and opens the app.
- **.env.example**: Template for environment variables.

## Setup

1. Copy `.env.example` to `.env` and set the paths.
2. Install Python and `python-dotenv`.
3. Run `START.bat` or the Python scripts as needed.
4. Open the app in your browser.

## Usage

- Select a title from the dropdown.
- Use "Previous"/"Next" or arrow keys to change chapters.
- Images for the selected chapter will be displayed.
