import React, { useState } from "react";
import { storage } from "../config/firebase.config";
import { ref, uploadBytes } from "firebase/storage";
import { nanoid } from "nanoid";
import Navbar from "./Navbar";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
export default function Profile({ auth }) {
  const [img, setImg] = useState("");

  const uploadImg = async () => {
    if (img !== null) {
      const fileName = Date.now().toString() + nanoid(5);
      const imgRef = ref(storage, `images/${fileName}`);
      await uploadBytes(imgRef, img).then((value) => {
        NotificationManager.success(
          "Image Uploaded Successfully",
          "Upload Image",
          2000,
          true
        );
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className="upload-file d-flex flex-column align-items-center justify-content-between my-5">
        <h3>upload image</h3>
        <input
          class="form-control form-control-lg w-50 mx-auto my-3"
          id="formFileLg"
          type="file"
          onChange={(e) => setImg(e.target.files[0])}
        />
        <button className="btn btn-info btn-lg w-50" onClick={uploadImg}>
          Upload
        </button>
        <NotificationContainer />
        <br />
      </div>
    </>
  );
}
