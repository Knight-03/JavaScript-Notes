function myFunction(){
    let cnt = 0;
    return () => {
        if(cnt == 0)
        {
            cnt++;
            console.log("Hi, You Called Me!!")
        }
        else{
            console.log("Mai already ek bar call ho chuka hon")
        }
    }
}
const myfunc = myFunction();
myfunc();
myfunc();