import { useEffect, useState } from "react"



function IndexPopup() {
  const [currentUrl, setCurrentUrl] = useState<string>("")
  const getCurrentUrl = async () => {
    
  
    const [tab] = await chrome.tabs.query({active:true, currentWindow:true})

    setCurrentUrl(tab.url)
  }

  useEffect(() => {
    getCurrentUrl()
  }, [currentUrl])

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16
      }}>
      <h2>
        Shopifinder 
      </h2>
      <h3>You are at the  website below :  </h3>{currentUrl}
      

      
    </div>
  )
}

export default IndexPopup
