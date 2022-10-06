export function scrollbar() {
  document.addEventListener("DOMContentLoaded", function() {
    OverlayScrollbars(document.querySelectorAll("body"), {className: "os-theme-light"});
  });
}

export function copyright() {
  if(parseInt(Date().split(" ")[3]) === 2021) {
    return "2021";
  }else{
    return "2021-" + (parseInt(Date().split(" ")[3])).toString();
  }
}

export function years() {
  return (parseInt(Date().split(" ")[3]) - 2018).toString();
}

export function float() {
  setTimeout(() => {
    document.getElementById("expand").classList.add("animated");
  }, 1500)
}
