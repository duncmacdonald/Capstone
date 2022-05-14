import React, { useEffect, useRef, useState } from "react";
// import "./styles.css";
import QRCodeStyling from "qr-code-styling";
import returnCode from "../../Assets/return.png";
import "./QRCode.css";

const URL = "http://localhost:3333/";

const qrCode = new QRCodeStyling({
  width: 300,
  height: 300,
  image: "",
  dotsOptions: {
    color: "#4267b2",
    type: "rounded"
  },
  imageOptions: {
    crossOrigin: "anonymous",
    margin: 20
  }
});

export default function QRCode({orderId, listener}) {
    // state= {
    //     url: "https://qr-code-styling.com"
    // }
  const [url, setUrl] = useState(`${URL}return/${orderId}`);
  const [fileExt, setFileExt] = useState("png");
  const ref = useRef(null);

  //componentdidupdate kinda...
  useEffect(() => {
    qrCode.append(ref.current);
  }, []);

  useEffect(() => {
    qrCode.update({
      data: url
    });
  }, [url]);

  const onUrlChange = (event) => {
    event.preventDefault();
    setUrl(event.target.value);
  };

  const onExtensionChange = (event) => {
    setFileExt(event.target.value);
  };

  const onDownloadClick = () => {
    qrCode.download({
      extension: fileExt
    });
  };

  return (
    <div className="QRCode">
      <img src={returnCode} alt="Scannable order code" onClick={() => listener()}></img>
    </div>
    // <div className="App">
    //   <div style={styles.inputWrapper}>
    //     <input value={url} onChange={onUrlChange} style={styles.inputBox} />
    //     <select onChange={onExtensionChange} value={fileExt}>
    //       <option value="png">PNG</option>
    //       <option value="jpeg">JPEG</option>
    //       <option value="webp">WEBP</option>
    //     </select>
    //     <button onClick={onDownloadClick}>Download</button>
    //   </div>
    //   {/* <div ref={ref} /> */}
    // </div>
  );
}

const styles = {
  inputWrapper: {
    margin: "20px 0",
    display: "flex",
    justifyContent: "space-between",
    width: "100%"
  },
  inputBox: {
    flexGrow: 1,
    marginRight: 20
  }
};
