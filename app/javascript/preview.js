function previewImages() {
  const postForm = document.getElementById('photos_form');
  const previewList = document.getElementById('previews');

  if (!postForm || !previewList) return;

  const imageLimits = 10;

  const buildPreviewImage = (dataIndex, blob) => {
    const previewWrapper = document.createElement('div');
    previewWrapper.setAttribute('class', 'preview');
    previewWrapper.setAttribute('data-index', dataIndex);

    const previewImage = document.createElement('img');
    previewImage.setAttribute('class', 'preview-image');
    previewImage.setAttribute('src', blob);

    const deleteButton = document.createElement("div");
    deleteButton.setAttribute("class", "image-delete-button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click", () => deleteImage(dataIndex));

    previewWrapper.appendChild(previewImage);
    previewWrapper.appendChild(deleteButton);
    previewList.appendChild(previewWrapper);
  };

  const buildNewFileField = () => {
    const newFileField = document.createElement('input');
    newFileField.setAttribute('type', 'file');
    newFileField.setAttribute('name', 'photo[images][]');

    const lastFileField = document.querySelector('input[type="file"][name="photo[images][]"]:last-child');
    const nextDataIndex = Number(lastFileField.getAttribute('data-index')) + 1;
    newFileField.setAttribute('data-index', nextDataIndex);

    newFileField.addEventListener("change", changedFileField);

    const fileFieldsArea = document.querySelector('.click-upload');
    fileFieldsArea.appendChild(newFileField);
  };

  const deleteImage = (dataIndex) => {
    const deletePreviewImage = document.querySelector(`.preview[data-index="${dataIndex}"]`);
    if (deletePreviewImage) deletePreviewImage.remove();

    const deleteFileField = document.querySelector(`input[type="file"][data-index="${dataIndex}"]`);
    if (deleteFileField) deleteFileField.remove();

    const imageCount = document.querySelectorAll(".preview").length;
    if (imageCount === imageLimits - 1) buildNewFileField();
  };

  const changedFileField = (e) => {
    const dataIndex = e.target.getAttribute('data-index');
    const file = e.target.files[0];

    if (!file) {
      deleteImage(dataIndex);
      return;
    }

    const blob = window.URL.createObjectURL(file);

    const alreadyPreview = document.querySelector(`.preview[data-index="${dataIndex}"]`);
    if (alreadyPreview) {
      const alreadyPreviewImage = alreadyPreview.querySelector("img");
      alreadyPreviewImage.setAttribute("src", blob);
      return;
    }

    buildPreviewImage(dataIndex, blob);

    const imageCount = document.querySelectorAll(".preview").length;
    if (imageCount < imageLimits) buildNewFileField();
  };

  const fileField = document.querySelector('input[type="file"][name="photo[images][]"]');
  if (fileField) {
    fileField.addEventListener('change', changedFileField);
  }
}

window.addEventListener("turbo:load", previewImages);
window.addEventListener("turbo:render", previewImages);