function allblogs(){
    document.getElementById("popular-blogs-id").style.display="none";
    document.getElementById("latest-blogs-id").style.display="none";
    document.getElementById("all-blogs-id").style.display="block";
}
function popularblogs(){
    document.getElementById("popular-blogs-id").style.display="block";
    document.getElementById("latest-blogs-id").style.display="none";
    document.getElementById("all-blogs-id").style.display="none";
}
function latestblogs(){
    document.getElementById("popular-blogs-id").style.display="none";
    document.getElementById("latest-blogs-id").style.display="block";
    document.getElementById("all-blogs-id").style.display="none";
}
allblogs();
