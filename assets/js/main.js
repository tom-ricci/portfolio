export function scrollbar() {
  document.addEventListener("DOMContentLoaded", function() {
    OverlayScrollbars(document.querySelectorAll("body"), {className: "os-theme-light"});
  });
}

export function age() {
  return Math.round(((Date.now() - Date.parse("Nov 15 2004")) / 31709800000)).toString();
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