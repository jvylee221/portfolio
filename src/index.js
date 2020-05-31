import "./styles.scss";
import $ from "jquery";

let PORTFOLIO_DATA = [
  {
    name: "todo list",
    img: "https://miro.medium.com/max/1400/1*bubW56HD3dK44Uj2Jvs-UA.png",
    link: "https://google.com"
  },
  {
    name: "calendar",
    img: "https://6ixrn.csb.app/src/calendar.png"
  },
  {
    name: "financial accounting/ money recording",
    img:
      "https://cdn.dribbble.com/users/1903251/screenshots/6091059/financial_calculator_app_4x.jpg?compress=1&resize=1200x900"
  },
  {
    name: "health tracker",
    img:
      "https://zapier.cachefly.net/storage/photos/789f11868656a8d95782fbfbe63df611.png"
  }
];
init();

function init() {
  $("<h1/>")
    .text("Ivy Lee's Portfolio")
    .appendTo("#app");

  $("<div />")
    .attr("id", "portfolio-list")
    .appendTo("#app");

  PORTFOLIO_DATA.forEach(function(v) {
    let entry = $("<div />")
      .addClass("portfolio-entry")
      .appendTo("#portfolio-list");

    let atag = $("<a />")
      .attr("href", v.link)
      .attr("target", "_blank")
      .appendTo(entry);

    $("<img />")
      .attr("src", v.img)
      .appendTo(atag);

    $("<div />")
      .text(v.name)
      .appendTo(entry);
  });
}
