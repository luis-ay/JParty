import React from "react";
import { SvgXml } from "react-native-svg";  
export default function CheckSvg(){const svgMarkup =`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg fill="#000000" width="800px" height="800px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M5 16.577l2.194-2.195 5.486 5.484L24.804 7.743 27 9.937l-14.32 14.32z"/></svg>`
const SvgImage = () => <SvgXml xml={svgMarkup}
height = {350}/>; 
 
return <SvgImage />;}