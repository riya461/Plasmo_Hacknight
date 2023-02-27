

import type { GoogleLensParameters } from "serpapi";
import { getJson } from "serpapi";



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
        


const params = {
    url: urlval,
    api_key: "fbf87c0c209e4751541fa9f18a624f07d91ce2b808ef7a4ee8a7c7a0927450e0"
  } satisfies GoogleLensParameters;
  
  // Show result as JSON
  const response =  getJson("google_lens", params);
  console.log("work page ")
  console.log(response["visual_matches"]);
        
        });

console.log("Works fine ")
console.log(urlval)
