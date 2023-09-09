import { useState } from "react";
import "./styles.css";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";

export default function App() {
  const [ImgUrl, setImgUrl] = useState("");

  const deleteImage = (img) => {
    console.log("Start Delete");

    let image = firebase.storage().refFromURL(img);

    image
      .delete()
      .then(function () {
        console.log("image deleted");
      })
      .catch(function (error) {
        // Uh-oh, an error occurred!
        console.log("an error occurred");
      });
  };

  const handleFileUpload = (event) => {
    for (let i = 0; i < event.target.files.length; i++) {
      const selectedFile = event.target.files[i];
      if (selectedFile) {
        const storageRef = firebase.storage().ref();
        const fileRef = storageRef.child(selectedFile.name);

        fileRef.put(selectedFile).then((snapshot) => {
          snapshot.ref.getDownloadURL().then((downloadURL) => {
            console.log(downloadURL);
            setImgUrl(downloadURL);
          });
        });
      } else {
        console.log("No file selected!");
      }
    }
  };

  return (
    <div className="App">
      <h1>Upload Image</h1>
      <input multiple type="file" onChange={handleFileUpload} />
      <input
        type="text"
        placeholder="Add Image URL"
        className="text-black"
        value={ImgUrl}
        onChange={(e) => setImgUrl(e.target.value)}
      />
      <button onClick={(e) => deleteImage(ImgUrl)}>Delete</button>
    </div>
  );
}
