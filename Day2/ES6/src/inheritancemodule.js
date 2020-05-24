class Base{
    displayBase(){
        console.log("Hello from base");
    }
}

class derived extends Base{
    displayDerived(){
        console.log("Hello frm derived");
    }
}

export default Base;
export default derived;