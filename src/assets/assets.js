import PythonLogo from '../assets/Python.svg'; 

var IconDict = {
    Python:{
        name: "Python",
        img: PythonLogo
    }
}




export default function Icons(type){

    return IconDict[type].img
    


}

export function IconExist(name) {
    return name in IconDict
}

