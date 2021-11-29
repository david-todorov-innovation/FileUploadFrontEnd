showFile = () => {
    let fileUploaded = document.getElementById("file-uploader").files[0];

    const reader = new FileReader();
    reader.onload = event => {
        let textFromFile = event.target.result;
        document.getElementById("textArea").textContent = textFromFile;
    }

    reader.readAsText(fileUploaded, "UTF-8")
}