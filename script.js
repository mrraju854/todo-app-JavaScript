let inputbox = document.querySelector("#input-box");
let listcontainer = document.querySelector("#list-container");
let btn = document.querySelector(".btn");
btn.addEventListener("click", function(){
    if(inputbox.value === ''){
        alert("You must write somethimg...");
    } else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = "";
    savedata();
});

listcontainer.addEventListener("click", function(dets){
    if(dets.target.tagName === "LI"){
        dets.target.classList.toggle("checked");
        savedata();
    }
    else if(dets.target.tagName === "SPAN"){
        dets.target.parentElement.remove();
        savedata();
    }
}, false);

function savedata(){
    localStorage.setItem("data", listcontainer.innerHTML);
}
function showtask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showtask();



// // ===============================
// // 📋 TO-DO LIST APP JAVASCRIPT
// // ===============================

// // 1️⃣ HTML elements को पकड़ना (input, list, button)
// let inputbox = document.querySelector("#input-box");   // Input field (जहाँ यूज़र टास्क लिखेगा)
// let listcontainer = document.querySelector("#list-container"); // <ul> जहाँ टास्क दिखेंगे
// let btn = document.querySelector(".btn");              // "Add" बटन

// // 2️⃣ जब यूज़र "Add" बटन पर क्लिक करे
// btn.addEventListener("click", function() {

//     // अगर इनपुट खाली है तो अलर्ट दिखाओ
//     if (inputbox.value === '') {
//         alert("You must write something...");
//     } 
//     else {
//         // 3️⃣ नया <li> बनाओ और उसमें यूज़र का लिखा हुआ टेक्स्ट डालो
//         let li = document.createElement("li");
//         li.innerHTML = inputbox.value;

//         // इस <li> को list-container (<ul>) में जोड़ दो
//         listcontainer.appendChild(li);

//         // 4️⃣ अब हर टास्क के साथ एक ❌ (डिलीट बटन) बनाओ
//         let span = document.createElement("span");
//         span.innerHTML = "\u00d7";   // Unicode symbol for ×
//         li.appendChild(span);
//     }

//     // 5️⃣ इनपुट बॉक्स को खाली कर दो
//     inputbox.value = "";

//     // 6️⃣ डेटा localStorage में सेव करो
//     savedata();
// });


// // 7️⃣ जब यूज़र किसी टास्क या × पर क्लिक करे
// listcontainer.addEventListener("click", function(event) {

//     // अगर <li> पर क्लिक हुआ तो उसे checked/un-checked करो
//     if (event.target.tagName === "LI") {
//         event.target.classList.toggle("checked");
//         savedata(); // हर बदलाव के बाद डेटा फिर से सेव करो
//     }

//     // अगर <span> (× बटन) पर क्लिक हुआ तो उस टास्क को हटा दो
//     else if (event.target.tagName === "SPAN") {
//         event.target.parentElement.remove();
//         savedata();
//     }

// }, false);


// // 8️⃣ LocalStorage में डेटा सेव करने का फंक्शन
// function savedata() {
//     // पूरे list-container की HTML को "data" नाम से localStorage में सेव करता है
//     localStorage.setItem("data", listcontainer.innerHTML);
// }


// // 9️⃣ पेज दोबारा खोलने पर LocalStorage से डेटा दिखाने का फंक्शन
// function showtask() {
//     // localStorage में जो सेव है, वही फिर से लिस्ट में डाल देता है
//     listcontainer.innerHTML = localStorage.getItem("data");
// }

// // 10️⃣ जब पेज लोड हो तो पहले से सेव टास्क दिखाओ
// showtask();
