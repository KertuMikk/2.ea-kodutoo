# 2. kodutöö – kirjutamise mängu täiendamine

Autorid: 
Kertu Mikk
Kärt Nigols

Funktsionaalsus:
1) mängija saab 10 punkti iga korrektse sõna eest ja kaotab 1 punkti iga vale tähe eest (kärt)
2) night mode (kärt)
3) counter ja -5p kui mängija ei kirjuta sõna piisavalt kiirelt (kertu)
4) menu (single page app stiil) (kärt)
5)local storage ja scoreboard (kertu)
![skeem](https://user-images.githubusercontent.com/31847335/37821533-89e2e7c0-2e8c-11e8-880a-c1295b395b50.png)


Mängu eesmärk on võimalikult kiiresti ekraanile tekkivaid sõnu ära trükkida. Sõnad on võetud [Eesti Keele Instituudi lehelt](http://www.eki.ee/tarkvara/wordlist/) – [lemmad2013](http://www.eki.ee/tarkvara/wordlist/lemmad2013.txt). Aluseks tuleb võtta kood **[eesrakenduste-arendamine-2018k/klahvimine](https://github.com/eesrakenduste-arendamine-2018k/klahvimine)**. 

### Tähtpäev 26.03.2018 23:59

## Nõuded

1. Töö tuleb teha vähemalt kahekesi, eelnevalt kokkuleppel on lubatud ka kolm liiget. GitHub'is peab eristuma, kes mida tegi!
1. README.md fail sisaldab:
    * autorite nimesid; 
    * repositooriumisse lisatud pilti/skeemi rakenduse tööprotsessidest (sh skoori moodustamine); 
    * skoori moodustamise ja lisatud funktsionaalsuste tekstipõhist kirjeldust.
1. Mängu on lisatud täiendavad funktsionaalsused:  
    * eraldi on mängu tutvustav leht, kus kirjeldatakse mängu, saab sisestada mängija nime ning alustada mängu (ühe-lehe-rakenduse stiilis); 
    * mängijate kohta hoitakse meeles ja salvestakse skoor, nt kasutades [localStorage](https://www.w3schools.com/html/html5_webstorage.asp)'it; 
    * skoori arvutus on lahendatud keerulisemalt kui seda on juba olemasolev arvatud sõnade loetlemine; 
    * eraldi näidatakse välja 10 parima mängija skoori (brauseri põhjal kui kasutate localStorage'it); 
    * mängule on lisatud mõni lisafunktsioon, nt:
        * valesti tähe trükkimisel on tagajärg (nt mõjutab skoori, ekraan vilgub, vms)
        * kasutaja saab ise valida raskusastme või teda huvitavad sõnad (sõnapikkuse vms järgi)
        * eraldi on öörežiim (ingl *dark mode*)
        * mängus on animatsioonid (nt tähed lendavad ära pärast trükkimist)
        * ...
    * [EI OLE KOHUSTUSLIK] eraldi on statistika leht, kus näidatakse ära arvatud sõnade ja kasutajate kohta statistikat (nt eksimuste arv, kirjutamise kiirus vms)
    * [EI OLE KOHUSTUSLIK] juba mängitud sõnu enam ei loosita
    * [EI OLE KOHUSTUSLIK] skoori ja kõiki muid andmeid hoitakse serveris 
    * [EI OLE KOHUSTUSLIK] mängu loogika on serveris ja kasutatakse mängus petmist ennetatakse – *cheat*'imine on kõvasti keerulisem

## Abimaterjal
* Lintimiseks on ühe võimalusena vaja paigaldada [Node.js](https://nodejs.org/en/), [VSCode](https://code.visualstudio.com/) ja VSCode plugin [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint). Loe lähemalt kursuse [3.loangu materjalist](https://github.com/eesrakenduste-arendamine-2018k/kursus#3-loeng). Abiks Vajalike asjade paigaldamiseks projektis: `npm install`
* Sündmuste loetelu [HTML DOM Events](http://www.w3schools.com/jsref/dom_obj_event.asp)
* Ajal põhinevad sündmused [JavaScript Timing Events](http://www.w3schools.com/js/js_timing.asp)
* Canvas retina ekraani jaoks [High DPI Canvas](https://www.html5rocks.com/en/tutorials/canvas/hidpi/)
* Mäng 60fps [requestAnimationFrame](http://creativejs.com/resources/requestanimationframe/) ja näide 60fps töötavast mängust [Typer60fps](eesrakenduste-arendamine-2017k/https://github.com/eesrakenduste-arendamine-2017k/Typer60fps) 
