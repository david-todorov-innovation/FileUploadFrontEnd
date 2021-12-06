showFile = () => {
    let fileUploaded = document.getElementById("file-uploader").files[0];

    const reader = new FileReader();
    reader.onload = event => {
        document.getElementById("textArea").textContent = event.target.result;
    }

    reader.readAsText(fileUploaded, "UTF-8")
//
//     const formData = new FormData();
//
//     formData.append("username", "david.todorov");
//     formData.append("accountnum", 123456); // number 123456 is immediately converted to a string "123456"
//
// // HTML file input, chosen by user
//     formData.append("file", document.getElementById("file-uploader").files[0]);
//
// // JavaScript file-like object
//     let content = '<a id="a"><b id="b">hey!</b></a>'; // the body of the new file...
//     const blob = new Blob([content], {type: "text/xml"});
//
//     formData.append("fileContent", blob);
//
//     const request = new XMLHttpRequest();
//     request.open("POST", "http://localhost:8080/upload");
//     request.send(formData);

}