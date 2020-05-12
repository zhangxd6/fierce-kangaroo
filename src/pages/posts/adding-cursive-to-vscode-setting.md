---
title: Adding cursive to vscode setting
date: 2020-05-12T02:37:45.786Z
hide_header: false
template: post
---




\`\``

{

"editor.fontFamily":"'Fira Code iScript', 'FiraCode', 'JetBrains Mono',Menlo, Monaco, 'Courier New', monospace",

"editor.fontLigatures":true,

"editor.fontWeight":"100",

"go.formatTool":"goimports",

"editor.minimap.maxColumn":30,

"go.useLanguageServer":true,

"editor.minimap.enabled":false,

"breadcrumbs.enabled":true,

"editor.renderWhitespace":"all",

"editor.renderControlCharacters":true,

"window.zoomLevel":0,

"workbench.colorTheme":"Winter is Coming (Dark Black)",

"editor.fontSize":15,

"editor.tokenColorCustomizations": {

"textMateRules": [

{

"scope": [

//following will be in italic

"comment",

"keyword",//import, export, return…

"storage.modifier",//static keyword

"storage.type.class.js",//class keyword

],

"settings": {

"fontStyle":"italic"

}

},

{

"scope": [

//following will nor be in italic

"entity.name.function",

"variable.other.property",

"variable.other"

],

"settings": {

"fontStyle":""

}

}

]

}

}

\`\``