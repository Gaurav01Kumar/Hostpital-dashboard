const local = "http://localhost:3000/api/v1";
export function getBaseDomain() {
  let basDomain = "";
  switch ("local") {
    case "local":
      basDomain += local;
      break;
    
  }
  
  return basDomain;
}
