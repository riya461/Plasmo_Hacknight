export{urlval}




var urlval
chrome.contextMenus.create({
    id: "selectimg",
    title: "Find in shopifinder",
    contexts: ['image','link']
    

}

)
chrome.contextMenus.onClicked.addListener(
    ({mediaType,srcUrl})=>{
        console.log(mediaType)
        console.log(srcUrl)
        urlval = srcUrl
        
        });

console.log("Works fine ")
console.log(urlval)
