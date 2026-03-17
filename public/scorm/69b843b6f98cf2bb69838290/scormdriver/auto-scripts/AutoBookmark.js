// version: 7.12.0.a.1.4.0
// sha: 0e5202cba19a8f313f9582767ec541bc709a1615
function SetBookmark(){var o=window.parent,t=window.location.href;o.SetBookmark(t.substring(t.toLowerCase().lastIndexOf("/scormcontent/")+14,t.length),document.title),o.CommitData()}SetBookmark();