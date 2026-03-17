var API = null;
var initialized = false;

function findAPI(win) {
  var attempts = 0;
  while (win && !win.API && attempts < 10) {
    if (win.parent && win.parent !== win) { win = win.parent; }
    else if (win.opener) { win = win.opener; }
    else { break; }
    attempts++;
  }
  return win && win.API ? win.API : null;
}

function getAPI() {
  API = findAPI(window);
  if (!API && window.opener) API = findAPI(window.opener);
  return API;
}

function setStatus(msg, cls) {
  var el = document.getElementById("status");
  el.textContent = msg;
  el.className = cls || "";
}

function doInitialize() {
  if (initialized) { setStatus("Already initialized.", "status-info"); return; }
  getAPI();
  if (!API) { setStatus("SCORM API not found – running standalone.", "status-err"); return; }
  var result = API.LMSInitialize("");
  if (result === "true" || result === true) {
    initialized = true;
    API.LMSSetValue("cmi.core.lesson_status", "incomplete");
    API.LMSCommit("");
    setStatus("Initialized. Status: incomplete", "status-info");
    document.getElementById("btnComplete").disabled = false;
  } else {
    setStatus("LMSInitialize failed: " + API.LMSGetLastError(), "status-err");
  }
}

function doComplete() {
  if (!initialized || !API) { setStatus("Initialize first.", "status-err"); return; }
  API.LMSSetValue("cmi.core.lesson_status", "completed");
  API.LMSSetValue("cmi.core.score.raw", "80");
  API.LMSCommit("");
  API.LMSFinish("");
  initialized = false;
  setStatus("✓ Course completed! Score: 80", "status-ok");
  document.querySelector(".card").classList.add("completed");
  document.getElementById("btnStart").disabled = true;
  document.getElementById("btnComplete").disabled = true;
}
