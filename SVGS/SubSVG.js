import React from "react";
import { SvgXml } from "react-native-svg";  
export default function SubSvg(){ const svgMarkup =`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg fill="#ffffff" width="800px" height="800px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
    <path d="M288 864v192h1344V864z" fill-rule="evenodd"/>
</svg>`
const SvgImage = () => <SvgXml xml={svgMarkup}
height = {20} width={20}/>; 
 
return <SvgImage />;}