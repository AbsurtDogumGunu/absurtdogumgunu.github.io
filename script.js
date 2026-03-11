function openRequest(conceptName) {
  document.getElementById("conceptInput").value = conceptName;
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth"
  });
}