import React from "react";
import { SvgXml } from "react-native-svg";  
export default function BackButtonSvg(){const svgMarkup =`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg fill="#6A41FF" width="800px" height="800px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M14.19 16.005l7.869 7.868-2.129 2.129-9.996-9.997L19.937 6.002l2.127 2.129z"/></svg>`
const SvgImage = () => <SvgXml xml={svgMarkup}
height = {50}
width = {50}/>; 
 
return <SvgImage />;}