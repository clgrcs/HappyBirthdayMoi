  onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    alert("Kani lang sa nga flowers HAHAHA");
    clearTimeout(c);
  }, 1000);
};