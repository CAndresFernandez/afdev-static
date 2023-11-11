var english = document.getElementById("en"),
  french = document.getElementById("fr"),
  nav_home = document.getElementById("nav-home"),
  nav_about = document.getElementById("nav-about"),
  nav_projects = document.getElementById("nav-project"),
  nav_cv = document.getElementById("nav-cv"),
  nav_contact = document.getElementById("nav-contact"),
  //   homepage
  caption_home = document.getElementById("caption-home"),
  btn_about = document.getElementById("btn-about"),
  btn_projects = document.getElementById("btn-projects"),
  // about page
  header_about = document.getElementById("header-about"),
  author_desc = document.getElementById("author-desc"),
  //   from = auth_desc.getElementById("from"),
  //   living_in = auth_desc.getElementById("living"),
  //   speaks = auth_desc.getElementById("speaks"),
  //   interests = auth_desc.getElementById("interests"),
  caption2 = document.getElementById("caption2"),
  skills = document.getElementById("skills"),
  //   projects page
  header_projects = document.getElementById("header-projects"),
  git = document.getElementById("git"),
  //   caption_git = document.getElementById("caption-git"),
  //   cv page
  header_cv = document.getElementById("header-cv"),
  edu = document.getElementById("edu"),
  exp = document.getElementById("exp"),
  oclock = document.getElementById("oclock"),
  gsu = document.getElementById("gsu"),
  aia = document.getElementById("aia"),
  lcm = document.getElementById("lcm"),
  lblv = document.getElementById("lblv"),
  spr = document.getElementById("spr"),
  //   contact page
  header_contact = document.getElementById("header-contact"),
  linkedin = document.getElementById("linkedin");

// event listener for 'en' button
english.addEventListener(
  "click",
  function () {
    change(english, french);
  },
  false
);
// event listener for 'fr' button
french.addEventListener(
  "click",
  function () {
    change(french, english);
  },
  false
);
// change function to
function change(lang_on, lang_off) {
  if (!lang_on.classList.contains("current_lang")) {
    // if the span that the user clicks on does not have the "current_lang" class
    lang_on.classList.add("current_lang");
    // add the "current_lang" class to it
    lang_off.classList.remove("current_lang");
    // remove current_lang class from the other span
  }

  if (lang_on.innerHTML == "EN") {
    change_text.classList.add("english");
    change_text.classList.remove("french");
    change_text.innerHTML = "The text here will change";
  } else if (lang_on.innerHTML == "中文") {
    change_text.classList.add("chinese");
    // first line adds the corrent language class to the text
    change_text.classList.remove("english");
    // second and third line removes the other language classes
    // this allows you to apply CSS that is specific to each language
    change_text.classList.remove("japanese");
    change_text.innerHTML = "这里的文字会改变";
    // fourth line is where you key in the text that will replace what is currently on-screen
  } else if (lang_on.innerHTML == "日本語") {
    change_text.classList.add("japanese");
    change_text.classList.remove("english");
    change_text.classList.remove("chinese");
    change_text.innerHTML = "ここの文字は変わります";
  }
}
