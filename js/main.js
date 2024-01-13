//
const pageName = document.getElementById('pagename');
function getPageName ()
{
    let n =window.location.pathname;
    n = n.split('/');
    n = n[n.length - 1];    
    n = n.substr(0, n.lastIndexOf("."));
    n = n.replace(new RegExp("(%20|_|-)", "g"), " ");


    switch (n) {
        case 'index':
            n = 'Acceuil'
            break;
        case 'skills':
            n = 'Compétences'
            break;
    }

    n1 = n.charAt(0).toUpperCase() //Premiere Lettre
    n = n.substring(1) //Retirer la premiere lettre
    n = (n1 + n)
    return n;
}
function changePageTitle () 
{
    let t = document.title;
    let n = getPageName();
    
    document.title = `${n} - ${t}`;
}

//
changePageTitle()
pageName.textContent = getPageName();
