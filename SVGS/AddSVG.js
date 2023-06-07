import React from "react";
import { SvgXml } from "react-native-svg";  
export default function AddSvg(){ const svgMarkup =`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg fill="#ffffff" width="800px" height="800px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
    <path d="M866.332 213v653.332H213v186.666h653.332v653.332h186.666v-653.332h653.332V866.332h-653.332V213z" fill-rule="evenodd"/>
</svg>`
const SvgImage = () => <SvgXml xml={svgMarkup}
height = {25} width={25}/>; 
 
return <SvgImage />;}