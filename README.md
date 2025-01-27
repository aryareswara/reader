# Manga/Manhwa Directory Organizer

This project helps you organize your manga/manhwa collection in a structured directory format. It also includes scripts to update the list of titles and start reading.

## Directory Structure
[title]/
├── Chapter [num]/
│ ├── page_[num].[ext]

## How to Use

1. **Set the Base Directory:**
   - Set the `base_dir` variable in `update_titles.py` and `start_reading.py` to the path where your manga/manhwa titles are stored.

2. **Update Titles:**
   - Run `UPDATE.bat` to update the `titles.json` file with the current directory structure.

3. **Start Reading:**
   - Run `START.bat` to start reading your manga/manhwa collection.

## Files

- `UPDATE.bat`: Updates the `titles.json` file.
- `START.bat`: Starts the reading process.
- `update_titles.py`: Script to update the `titles.json` file.
- `start_reading.py`: Script to start reading the manga/manhwa.

## Example
Iam gud person/
├── Chapter 1/
│ ├── page_01.jpeg
│ ├── page_02.jpeg
├── Chapter 2/
│ ├── page_01.jpeg
│ ├── page_02.jpeg

## Notes

- Ensure that your images are named correctly (e.g., `page_01.jpeg`, `page_02.jpeg`).
- The `titles.json` file will be automatically updated when you run `UPDATE.bat`.
