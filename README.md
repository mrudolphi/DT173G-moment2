# dt173g-moment2
### Moment 2 i kursen DT173G - Webbutveckling III
Automatiserings-processens syfte är att sammanslå, komprimera och konvertera filer för att skapa en mindre katalog med endast de filer som behövs för publicering.

#### Paket och verktyg som använts:
Node.js - Ramverk för Javascript backend.
Gulp - Verktyg för automatisering.
Gulp-concat - Sammanslår javascript-filer.
Gulp-uglify - Minimerar javascript-filer.
Gulp-concat-css - Sammanslår CSS-filer.
Gulp-clean-css - Minimerar CSS-filer.
Gulp-imagemin - Minimerar bilder.
Gulp-watch - Används för att bevaka ändringar i filerna.
Git - Används för versionshantering och uppladdning till GitHub.

#### Systemet och användning av det
I mitt projekt har jag skapat en katalog "src" där arbetsfilerna ligger, och en katalog "pub" dit publicerings-filerna kopieras med hjälp av Gulp. I root-katalogen finns en fil "package.json" som innehåller inställningar för node.js-projektet, inklusive de npm som används, dessa installeras när kommandot npm install körs.
Jag har skapat en fil "gulpfile.js" för att hantera autmoatiseringen, där läser jag in de paket som ska användas och skapar sen tasks för alla olika filer som ska kopieras, sammanslås och/eller minimeras. Det är en task för att kopiera html-filerna till pub-katalogen, en task för att sammanslå, minimera och kopiera js-filerna till pub-katalogen, och liknande task för css-filerna, även en task för att minimera bildefilerna.
Därefter finns en task "watcher" för att bevaka ändirngar i alla filer och när ändringar skapas körs den berörda tasken igen. Slutligen har jag skapat en default-task som körs då endast kommandot "gulp" skrivs, utan något specifikt task-namn, då körs alla tasks och sist körs watcher som ej körs färidgt utan fortsätter att vara uppe och bevaka filerna.
För att se så detta fungerar har jag skapat en liten enkel webbplats med tre html-sidor och ett par enkla javascript-funktioner som skriver ut dagens datum och en rubrik, enbart för att ha flera olika filer att sammanslå.
