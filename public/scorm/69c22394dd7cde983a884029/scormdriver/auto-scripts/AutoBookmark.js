// version: 7.12.0.a.1.4.1
// sha: 5d8e9020de613ed90881a5eb55369c6badd45130
function SetBookmark(){var o=window.parent,t=window.location.href;o.SetBookmark(t.substring(t.toLowerCase().lastIndexOf("/scormcontent/")+14,t.length),document.title),o.CommitData()}SetBookmark();