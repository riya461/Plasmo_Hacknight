import { urlval } from "~background";

import type { GoogleLensParameters } from "serpapi";
import { getJson } from "serpapi";



const params = {
    url: urlval,
    api_key: "fbf87c0c209e4751541fa9f18a624f07d91ce2b808ef7a4ee8a7c7a0927450e0"
  } satisfies GoogleLensParameters;
  
  // Show result as JSON
  const response = await getJson("google_lens", params);
  console.log("work page ")
  console.log(response["visual_matches"]);