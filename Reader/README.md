# Reader Project

## Overview
The Reader project is a web application that allows users to browse through a collection of titles and chapters, displaying images associated with each chapter. The application is built using JavaScript for the frontend and Python for backend tasks such as generating JSON data and renaming image files.

## File Descriptions

- **script.js**: Contains the main JavaScript code for the web application. It manages user interactions, loads images based on selected titles and chapters, and maintains the application state using local storage.

- **generate_json.py**: A Python script that scans a specified directory for titles and chapters, generating a `titles.json` file that describes the structure of the titles and their associated images. It employs natural sorting for chapter names.

- **renamer.py**: This Python script renames image files in a specified directory to a standardized format (e.g., page_001, page_002). It ensures that only valid image files are renamed and handles any errors that may occur during the process.

- **START.bat**: A batch file that automates the setup process. It runs the `generate_json.py` script, starts a simple HTTP server, and opens the web application in a private browser window.

- **.env.example**: A template file for environment variables required by the Python scripts. It specifies paths for the titles and renaming directories, which need to be set in a `.env` file for the scripts to function correctly.

## Setup Instructions

1. **Clone the Repository**: 
   Clone this repository to your local machine.

2. **Install Dependencies**:
   Ensure you have Python installed. You may need to install the `python-dotenv` package for environment variable management. You can do this using pip:
   ```
   pip install python-dotenv
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the project root based on the `.env.example` template. Set the `BASE_DIR_TITLES` to the path where your title folders are located and `PATH_RENAME_TITLES` to the path for renaming images.

4. **Prepare Your Titles**:
   Organize your image files into folders representing titles and chapters. Ensure that images are in supported formats (e.g., .jpg, .jpeg, .webp, .png).

5. **Generate JSON Data**:
   Run the `START.bat` file. This will generate the `titles.json` file and start a local HTTP server.

6. **Access the Application**:
   After running the batch file, your default web browser will open in private mode, displaying the application. You can navigate through the titles and chapters using the UI.

## Usage
- Select a title from the dropdown menu to view its chapters.
- Use the "Previous" and "Next" buttons or the left/right arrow keys to navigate through chapters.
- The application will remember your last viewed title and chapter using local storage.

## Contributing
Contributions are welcome! If you have suggestions or improvements, please feel free to submit a pull request.

## License
This project is open-source and available under the MIT License.