import PythonLogo from '../assets/Python.svg'; 
import PythonMono from '../assets/Icons/Python_mono.svg';

var IconDict = {
    Python:{
        name: "Python",
        img: PythonMono
    }
}




export default function Icons(type){

    return IconDict[type].img
    


}

export function IconExist(name) {
    return name in IconDict
}

