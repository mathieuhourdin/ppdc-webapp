import{d as i,c as s,i as t,t as a,h as l,n,k as r,m as u}from"./index-32cbd093.js";const o={class:"m-20"},c={key:0,class:"text-xl font-bold mb-5"},d=n('<div class="text-xl font-bold mb-5">Bienvenue sur la plateforme !</div><div class="my-2"> Le but de la plateforme est de permettre de construire et de suivre des processus intellectuels. Un processus intellectuel se matérialise par des inputs (les livres, les articles qu&#39;on lit, les films qu&#39;on va voir au cinéma...) et les outputs (des articles qu&#39;on écrit, les musiques qu&#39;on produit...). Actuellement on peut seulement écrire et commenter des articles. </div><div class="my-2"> L&#39;écriture des articles est rendue la plus collaborative possible. On peut notamment ajouter des commentaires dans le texte des articles déjà écrits ou en cours d&#39;écriture (click droit sur l&#39;endroit où on veut commenter). Chaque article est lié à un auteur qui est le seul à pouvoir faire des modifications dans l&#39;article. Les autres peuvent simplement commenter. </div><div class="my-2"> Une fois l&#39;article publié, on le modifie à l&#39;aide d&#39;un éditeur de texte propre à la plateforme. Cet éditeur de texte s&#39;améliore constamment, mais il souffre encore de quelques manques par rapport aux editeurs de textes classiques (impossible de copier coller avec certains navigateurs, fleches verticales ne permettent pas de se déplacer...). </div><div class="my-2"> Il permet une mise en page simple, inspirée du langage markdown. Pour mettre un paragraphe ou une ligne en gras, il faut commencer la ligne par un &quot;#&quot;. Pour créer une liste à puce, il faut commencer le paragraphe par un &quot;*&quot;. </div><div class="mt-5"> Les articles sont classés par trois stades de maturation : <ul class="list-disc list-inside"><li><strong>Idée</strong> : non formalisé, peut être repris par quelqu&#39;un d&#39;autre</li><li><strong>Relecture</strong> : bien avancé, mais peut bénéficier de l&#39;aide d&#39;un autre utilisateur </li><li><strong>Terminé</strong> : état satisfaisant, peut ête lu de façon agréable par n&#39;importe qui </li></ul></div><div class="my-2"> Il n&#39;est pas possible de stocker des images sur la plateforme. Pour associer une image à un article, vous devez indiquer l&#39;url d&#39;une image disponible sur internet, par exemple en la cherchant sur google images. </div>',7),g=i({__name:"PlatformPresentationView",setup(m){const{user:e}=u();return(p,v)=>(r(),s("div",o,[t(e)?(r(),s("div",c,"Bonjour "+a(t(e).first_name)+",",1)):l("",!0),d]))}});export{g as default};
