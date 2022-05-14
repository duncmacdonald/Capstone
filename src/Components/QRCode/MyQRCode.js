import "./MyQRCode.css";

export default function MyQRCode({url, listener}){
  return(
    <div className="QRCode" onClick={listener}>
      <img src={url} alt="Scannable QR code"/>
    </div>
  )
}