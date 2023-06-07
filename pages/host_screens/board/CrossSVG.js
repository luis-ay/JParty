import React from "react";
import { SvgXml } from "react-native-svg";  
export default function CrossSvg(){ const svgMarkup= `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg fill="#000000" width="800px" height="800px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M7.004 23.087l7.08-7.081-7.07-7.071L8.929 7.02l7.067 7.069L23.084 7l1.912 1.913-7.089 7.093 7.075 7.077-1.912 1.913-7.074-7.073L8.917 25z"/></svg>`
const SvgImage = () => <SvgXml xml={svgMarkup}
height = {350}/>; 
 
return <SvgImage />;}