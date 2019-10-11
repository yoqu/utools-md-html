const { clipboard } = require('electron')
const os = require('os');
writeHtml= function(html){
    if(os.type()=="Linux"){//linux系统
        clipboard.writeHTML(html,"selection")
    }else{
        clipboard.writeHTML(html)
    }
}

writeText = function(text){
    if(os.type()=="Linux"){//linux系统
        clipboard.writeText(text,"selection")
    }else{
        clipboard.writeText(text)
    }
}
readText = function(text){
    if(os.type()=="Linux"){//linux系统
        return clipboard.readText("selection")
    }else{
        return clipboard.readText()
    }
}