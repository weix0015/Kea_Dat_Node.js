import fs from "fs";


export function readPage(path) {
  return fs.readFileSync(path).toString();
}

// nullish coalesce operator ??  ||
// const value = "";

// console.log(value ?? "some other value");
// console.log(value || "some other value"); // type coerces... takes falsy values and coerce

const footer = fs.readFileSync("./public/components/footer/footer.html").toString();

export function renderPage(page, config={}) {
  const header = fs.readFileSync("./public/components/header/header.html").toString();
  return header.replace("$TAB_TILES$", config.tabTile ?? "DogInder")
  .replace("$CSS_LINKS$", config.CSSLinks ?? "")
  + page 
  + footer;
}

