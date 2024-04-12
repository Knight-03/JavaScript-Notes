// const RootNode = document.getRootNode();
// const htmlElementNode =  RootNode.childNodes[0];
// // console.log(htmlElementNode.childNodes) // NodeList(3) [head, text, body]

// const headElementNode =  htmlElementNode.childNodes[0];
// const textNode1 =  htmlElementNode.childNodes[1];
// const bodyElementNode =  htmlElementNode.childNodes[2];

// // console.log(headElementNode.childNodes) NodeList(5) [text, title, text, script, text] go through DOM Tree jpg 
// console.log(headElementNode.nextSibling) // aa property thi je text vado bhag che matlab "\n  " access thashe 
// console.log(headElementNode.nextElementSibling) // ama je element node hashe aa madse text node ne ignore karse

// console.log(bodyElementNode.childNodes)

// const header = document.querySelector("h1")
// // console.log(header.parentElement)
// const div = header.parentElement;
// div.style.backgroundColor = "#efefef";
// div.style.color = "#333";

// const head = document.head
// console.log(head); 
// ama pn badhi property use kari shakiye

// const head = document.querySelector("head");
// const title = head.querySelector("title")
// console.log(title.childNodes)

// to get the elements only and not printing text("\n   ") 
const container = document.querySelector(".container")
//  * usefull proeprty che 
console.log(container.children) // it will give HTMLCollection of  only elements 

