import service from "./service.js";
import { momentsTmpl } from "./template.js";
const app = {};

app.init = async () => {
  let moments = await service.getmoments();
  const momentsContainer = document.querySelector(".moments-items");
  console.log("moments", moments);

  console.log("moment", JSON.stringify(moments[1], null, 2));
  moments.forEach((moment) => {
    momentsContainer.insertAdjacentHTML("beforeend", momentsTmpl(moment));
  });
};
app.init();
