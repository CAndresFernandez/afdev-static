const lang_switcher = {
  // for local storage of language setting
  data: {
    language: "en",
  },

  init: function () {
    lang_switcher.previewWrapper = document.getElementById("preview-wrapper");
    lang_switcher.english = document.getElementById("en");
    lang_switcher.french = document.getElementById("fr");
    lang_switcher.nav_home = document.getElementById("nav-home");
    lang_switcher.nav_about = document.getElementById("nav-about");
    lang_switcher.nav_projects_prev =
      document.getElementById("nav-projects-prev");
    lang_switcher.nav_projects_next =
      document.getElementById("nav-projects-next");
    //   homepage
    lang_switcher.caption_home = document.getElementById("caption-home");
    lang_switcher.btn_about = document.getElementById("btn-about");
    lang_switcher.btn_projects = document.getElementById("btn-projects");
    // about page
    lang_switcher.header_about = document.getElementById("header-about");
    lang_switcher.author_desc = document.getElementById("author-desc");
    lang_switcher.caption2 = document.getElementById("caption2");
    lang_switcher.skills = document.getElementById("skills");
    //   projects page
    lang_switcher.header_projects = document.getElementById("header-projects");
    lang_switcher.git = document.getElementById("git");
    //   cv page
    lang_switcher.header_cv = document.getElementById("header-cv");
    lang_switcher.edu = document.getElementById("edu");
    lang_switcher.exp = document.getElementById("exp");
    lang_switcher.oclock = document.getElementById("oclock");
    lang_switcher.gsu = document.getElementById("gsu");
    lang_switcher.aia = document.getElementById("aia");
    lang_switcher.lcm = document.getElementById("lcm");
    lang_switcher.lblv = document.getElementById("lblv");
    lang_switcher.spr = document.getElementById("spr");
    //   contact page
    lang_switcher.header_contact = document.getElementById("header-contact");
    lang_switcher.linkedin = document.getElementById("linkedin");

    // event listeners for 'en' and 'fr' buttons
    lang_switcher.english.addEventListener("click", this.handleClick);
    lang_switcher.french.addEventListener("click", this.handleClick);

    lang_switcher.initLocalData();
    lang_switcher.initLanguageSwitch();
  },

  // change function to replace all html on every document
  switch: function (lang_on, lang_off) {
    if (!lang_on.classList.contains("current_lang")) {
      // if the span that the user clicks on does not have the "current_lang" class
      lang_on.classList.add("current_lang");
      // add the "current_lang" class to it
      lang_off.classList.remove("current_lang");
      // remove current_lang class from the other span
    }

    if (lang_on.innerHTML !== "EN") {
      // about page
      if (window.location.href.includes("about")) {
        lang_switcher.header_about.innerHTML =
          '<h2>Qui suis-<span class="primary">je?</span><span class="title-bg"></span></h2><p>Après une carrière de 18 ans en tant que chef de cuisine, j\'ai fait un gros virage vers la programmation. Je suis désormais à la recherche de belles aventures dans la tech.</p>';
        lang_switcher.author_desc.innerHTML =
          "<p><b>De:</b> Atlanta, Georgia</p><p><b>Habite:</b> Paris, France</p><p><b>Parle:</b> Français, English, Español, Deutsch, 한국어</p><p><b>Intérêts:</b> Arsenal FC, Jeux-vidéos, Tennis, Randonnée, Amari, Guitarre</p>";
        lang_switcher.caption2.innerHTML =
          "Un profil décidément atypique, mais je suis insatiablement curieux, méticuleux et passionné par du code propre et scalable. Mieux encore, j'arrive équipé d'un bon nombre de 'soft skills' et d'un souci du détail que seule l'expérience peut fournir.";
        lang_switcher.skills.innerHTML = "Compétences techniques";
        lang_switcher.nav_home.innerHTML = "&larr; Accueil";
        lang_switcher.nav_projects_next.innerHTML = "Projets &rarr;";
      }
      //   projects page
      else if (window.location.href.includes("projects")) {
        lang_switcher.header_projects.innerHTML =
          '<h2>Mes <span class="primary">projets</span><span class="title-bg"></span></h2><p>Revenez souvent... cette page est en perpétuelle évolution.</p>';
        lang_switcher.git.innerHTML =
          "<h4>Mon Github</h4><p>Parcourir mon compte Github</p>";
        lang_switcher.nav_about.innerHTML = "&larr; Moi";
      }
      //   cv page
      else if (window.location.href.includes("cv")) {
        lang_switcher.header_cv.innerHTML =
          '<h2 id="title-cv"> Mon <span class="primary">CV</span><span class="title-bg"></span></h2><p id="caption-cv">Professionnel déterminé, méticuleux et passionné. Vaste expérience dans l\'exécution autonome et collaborative de tâches complexes qui exigent un degré élevé de compétences analytiques, réflexion critique et adaptabilité. Apprenti insatiable et geek de longue date en quête éternelle de maîtriser son métier, quel que soit le défi.</p><a href="./downloads/AndresFernandez_CV_B_FR.pdf" class="cv-download" download="AndresFernandezCV_FR">Télécharger mon CV</a>';
        lang_switcher.edu.innerHTML = "Éducation";
        lang_switcher.exp.innerHTML = "Expérience";
        lang_switcher.oclock.innerHTML =
          "<h5>École O'clock</h5><span>Mai - Octobre 2023</span><p> Développement web Full-stack <br />Spécialisation PHP/Symfony</p>";
        lang_switcher.gsu.innerHTML =
          "<h5>Georgia State University</h5><span>2006 - 2007</span><p>Histoire, Langue Allemande</p>";
        lang_switcher.aia.innerHTML =
          "<h5>Art Institute of Atlanta</h5><span>2004 - 2006</span><p>Arts Culinaire &amp; Gestion Hôtelière</p>";
        lang_switcher.lcm.innerHTML =
          "<h5>Les Cuistots Migrateurs</h5><span>2017 - 2022</span><p><b>Associé Gérant &amp; Directeur Culinaire</b><br />Responsable de la planification, l'approvisionnement, la production, l'embauche et la formation du personnel, la R&amp;D et la gestion des coûts au cours d'une période de croissance exponentielle.<br />Développement du programme culinaire pour l'École des Cuistots Migrateurs, une école de cuisine à but non lucratif fondée par l'entreprise en 2021.</p>";
        lang_switcher.lblv.innerHTML =
          "<h5>La Bourse et La Vie</h5><span>2015 - 2017</span><p><b>Chef de cuisine</b><br />Gestion et direction de l'ouverture et l'opération restaurant, y compris le développement de menus, la planification, l'approvisionnement, l'embauche et la formation du personnel, l'exécution des services et la gestion des coûts.<br />Cultivation de l'esprit d'excellence, de simplicité et de précision pour lesquels l'entreprise est reconnue.</p>";
        lang_switcher.spr.innerHTML =
          "<h5>Spring</h5><span>2013 - 2015</span><p><b>Sous-Chef de cuisine</b> <br />Membre clé d'une équipe haute performance offrant une cuisine et un service de niveau Michelin.</p>";
        lang_switcher.nav_projects_prev.innerHTML = "&larr; Projets";
      }
      //   contact page
      else if (window.location.href.includes("contact")) {
        lang_switcher.header_contact.innerHTML =
          '<h2>Contactez-<span class="primary">moi</span><span class="title-bg"></span></h2><p>N\'hésitez pas à me contacter si vous avez des questions, ou simplement envie de discuter.</p>';
        lang_switcher.linkedin.innerHTML = "cliquez pour voir mon profil";
      }
      //   homepage
      else {
        lang_switcher.caption_home.innerHTML =
          "Développeur back-end et ancien chef de cuisine à Paris qui, ces jours-ci, envoie beaucoup plus de fraîcheur en code que dans l'assiette.<br />N'hésitez pas à fouiller pour vous faire une idée plus précise.";
        lang_switcher.btn_about.innerHTML = "Moi";
        lang_switcher.btn_projects.innerHTML = "Projets";
      }
    }
  },

  handleClick: function (event) {
    event.preventDefault();
    if (event.currentTarget.id == "en") {
      // clear local storage to remove 'fr'
      localStorage.clear();
      //   reload page to reload the static english version
      location.reload();
    } else if (event.currentTarget.id == "fr") {
      // switch from english to french
      lang_switcher.switch(lang_switcher.french, lang_switcher.english);
      //   close the tab
      lang_switcher.previewWrapper.classList.toggle("extend");
      //   set the language in local storage as 'fr'
      lang_switcher.data.language = "fr";
      //   save to json
      appLocalStorage.saveToJson("lang_switcher", lang_switcher.data);
    }
  },

  initLocalData: function () {
    // init localStorage value
    // recuperate localStorage
    const localStorageData = appLocalStorage.getFromJson("lang_switcher");
    if (localStorageData) {
      lang_switcher.data = localStorageData;
    }
  },

  initLanguageSwitch: function () {
    const language = lang_switcher.data.language;
    if (language == "fr") {
      // switch if 'fr' is found, otherwise will load default
      lang_switcher.switch(lang_switcher.french, lang_switcher.english);
    }
  },
};

lang_switcher.init();
