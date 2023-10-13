import React, { useState, useEffect } from "react";
import { storage } from "../config/firebase.config";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import Navbar from "./Navbar";
export default function HomePage() {
  const [imgUrl, setImgUrl] = useState([]);

  useEffect(() => {
    listAll(ref(storage, "images")).then((imgs) => {
      if (imgs.length < 0) return;
      imgs.items.forEach((val) => {
        getDownloadURL(val).then((url) => {
          setImgUrl((data) => [...data, url]);
        });
      });
    });
  }, []);

  return (
    <>
      <Navbar />

      <ul
        style={{ width: "600px", margin: "auto", listStyle: "none" }}
        className=""
      >
        {imgUrl.length === 0 ? (
          <p>No Images Added Yet!</p>
        ) : (
          imgUrl.map((url) => (
            <li className="m-3" key={url}>
              <img src={url} height="300px" width="300px" alt="img" />
              <br />
            </li>
          ))
        )}
      </ul>
    </>
  );
}
