import "./footer.scss"
export default function Footer() {

  const handleClick = () => {
    window.open("https://github.com/CineraM/Streaming-Site");
  };

  return (
    
    <div className="footer">
        <div className="container" >
                <div className="info" onClick={handleClick}>
                    <img src="https://i.imgur.com/4cHixEY.png" alt="" />
                    <span> - GitHub.com/CineraM </span>
                </div>
        </div>
    </div>
  )
}


