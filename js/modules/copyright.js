export default function() {
  if(parseInt(Date().split(" ")[3]) === 2021) {
    return "2021";
  }else{
    return "2021-" + (parseInt(Date().split(" ")[3])).toString();
  }
}