const uploadInput = document.querySelector('#upload-input');
const uploadZone = document.querySelector('.file-uploader__inner');
const titleElement = document.querySelector('.file-uploader__open-text');
const selectedFileWrapper = document.querySelector('.selected-file');
const selectedFileName = document.querySelector('.selected-file__name');
const removeElement = document.querySelector('.selected-file__remove');
const progress = document.querySelector('#progress');

// открываем окно finder по клику
uploadZone.addEventListener('click', function() {
    uploadInput.click();
})

// после выбора файла
uploadInput.addEventListener('change', function(event) {
    const selectedFile = event.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);

    reader.addEventListener('loadstart', function() {
        selectedFileWrapper.style.display = 'flex';
    });

    reader.addEventListener('progress', function(event) {
        progress.value = Math.ceil(event.loaded * 100 / event.total);
    });

    reader.addEventListener('load', function() {
        selectedFileName.textContent = selectedFile.name;
        selectedFileName.setAttribute('title', selectedFile.name);
    });
})

// удаление файла
removeElement.addEventListener('click', function() {
    uploadInput.value = '';
    selectedFileWrapper.style.display = 'none';
    progress.value = '0';
})
