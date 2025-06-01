let currentTitle = localStorage.getItem('currentTitle') || '';
let currentChapter = parseInt(localStorage.getItem('currentChapter')) || 1;
let titlesData = {};

fetch('titles.json')
.then(response => response.json())
.then(data => {
    titlesData = data.titles;
    populateTitleSelect();
});

function populateTitleSelect() {
    const titleSelect = document.getElementById('title-select');
    titleSelect.innerHTML = '';
    for (const title in titlesData) {
        const option = document.createElement('option');
        option.value = title;
        option.textContent = title;
        titleSelect.appendChild(option);
    }
    titleSelect.value = currentTitle;
    titleSelect.addEventListener('change', () => {
        currentTitle = titleSelect.value;
        currentChapter = 1;
        loadImages(currentChapter);
        updateTitle();
        updateChapterDisplay();
        saveState();
    });
    if (currentTitle) {
        loadImages(currentChapter);
        updateTitle();
        updateChapterDisplay();
    }
}

function loadImages(chapter) {
    const imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = '';
    const chapters = titlesData[currentTitle]?.chapters || {};
    const chapterKey = `Chapter ${chapter}`;
    if (chapters[chapterKey]) {
        chapters[chapterKey].forEach(page => {
            const img = document.createElement('img');
            img.src = encodeURI(`titles/${currentTitle}/${chapterKey}/${page}`);
            img.alt = page;
            imageContainer.appendChild(img);
        });
    }
    window.scrollTo(0, 0);
}

function updateTitle() {
    const titleElement = document.getElementById('title');
    if (titleElement) titleElement.textContent = currentTitle;
}

function updateChapterDisplay() {
    const chapterDisplay = document.getElementById('chapter-display');
    if (chapterDisplay) chapterDisplay.textContent = `Chapter ${currentChapter}`;
}

function saveState() {
    localStorage.setItem('currentTitle', currentTitle);
    localStorage.setItem('currentChapter', currentChapter);
}

document.getElementById('prev-chapter').addEventListener('click', () => {
    if (currentChapter > 1) {
        currentChapter--;
        loadImages(currentChapter);
        updateChapterDisplay();
        saveState();
    }
});

document.getElementById('next-chapter').addEventListener('click', () => {
    const chapters = titlesData[currentTitle]?.chapters || {};
    if (chapters[`Chapter ${currentChapter + 1}`]) {
        currentChapter++;
        loadImages(currentChapter);
        updateChapterDisplay();
        saveState();
    }
});

document.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') {
        if (currentChapter > 1) {
            currentChapter--;
            loadImages(currentChapter);
            updateChapterDisplay();
            saveState();
        }
    } else if (event.key === 'ArrowRight') {
        const chapters = titlesData[currentTitle]?.chapters || {};
        if (chapters[`Chapter ${currentChapter + 1}`]) {
            currentChapter++;
            loadImages(currentChapter);
            updateChapterDisplay();
            saveState();
        }
    }
});
