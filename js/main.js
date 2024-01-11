function getName ()
{
    let n =window.location.pathname
    n = n.split('/')
    n = n[n.length - 1]
    n = n.substr(0, n.lastIndexOf("."));

    switch (n) {
        case 'index':
            n = ' acceuil '
            break;
    }
    return n;
}

const pageName = document.getElementById('pagename');
pageName.textContent = getName()
