
let API = window.parent.API;
let data;
let moduleIndex=0;
let lessonIndex=0;
let progress=0;

async function loadData(){
 const res = await fetch('data.json');
 data = await res.json();
 initSCORM();
 renderSidebar();
 render();
}

function initSCORM(){
 if(API){
  API.LMSInitialize("");
  let saved = API.LMSGetValue("cmi.suspend_data");
  if(saved){
    let d = JSON.parse(saved);
    moduleIndex=d.module||0;
    lessonIndex=d.lesson||0;
    progress=d.progress||0;
  }
 }
}

function save(){
 if(API){
  API.LMSSetValue("cmi.suspend_data", JSON.stringify({module:moduleIndex,lesson:lessonIndex,progress}));
  API.LMSSetValue("cmi.core.lesson_status", progress===100?"completed":"incomplete");
  API.LMSCommit("");
 }
}

function calcProgress(){
 let total=0, done=0;
 data.modules.forEach((m,i)=>{
  m.lessons.forEach((l,j)=>{
    total++;
    if(i<moduleIndex || (i===moduleIndex && j<=lessonIndex)) done++;
  });
 });
 progress = Math.round((done/total)*100);
}

function renderSidebar(){
 const el = document.getElementById('sidebar');
 el.innerHTML="";
 data.modules.forEach((m,i)=>{
  let mod = `<div class="module"><div class="module-title">${m.title}</div>`;
  m.lessons.forEach((l,j)=>{
    mod += `<div class="lesson ${i===moduleIndex && j===lessonIndex?'active':''}" onclick="go(${i},${j})">${l.title}</div>`;
  });
  mod += "</div>";
  el.innerHTML += mod;
 });
}

function go(i,j){
 moduleIndex=i; lessonIndex=j;
 calcProgress(); save();
 renderSidebar(); render();
}

function next(){
 let m=data.modules[moduleIndex];
 if(lessonIndex < m.lessons.length-1){ lessonIndex++; }
 else if(moduleIndex < data.modules.length-1){ moduleIndex++; lessonIndex=0; }
 calcProgress(); save();
 renderSidebar(); render();
}

function render(){
 const lesson = data.modules[moduleIndex].lessons[lessonIndex];
 let html="";
 if(lesson.type==="text"){
  html = `<h1>${lesson.title}</h1><p>${lesson.content}</p><button onclick="next()">Next</button>`;
 }
 else if(lesson.type==="video"){
  html = `<h1>${lesson.title}</h1><video controls width="100%"><source src="${lesson.src}" type="video/mp4"></video><button onclick="next()">Continue</button>`;
 }
 else if(lesson.type==="quiz"){
  html = `<h1>${lesson.title}</h1><p>${lesson.question}</p>` +
    lesson.options.map((o,i)=>`<button onclick="answer(${i})">${o}</button>`).join("");
 }
 else{
  html = `<h1>Certificate</h1><p>You completed the course 🎉</p>`;
 }
 document.getElementById('content').innerHTML = html;
 document.getElementById('fill').style.width = progress+"%";
 document.getElementById('percent').innerText = progress+"% Complete";
}

function answer(i){
 const lesson = data.modules[moduleIndex].lessons[lessonIndex];
 alert(i===lesson.answer?"Correct":"Wrong");
 next();
}

window.onload = loadData;
