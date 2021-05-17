// buttons
const savebtn = document.querySelector('#savebtn');
const cancelbtn = document.querySelector('#cancelbtn');
const newLinkAddBtn = document.querySelector('#newLinkSubmit');

// text values
const newName = document.querySelector('#newName');
const newbio = document.querySelector('#bioText');
const newLinks = document.getElementsByClassName('linktext');
const addlink = document.querySelector('#newLink');

//sections 
const linkList = document.querySelector('#linkList');

const links = [];

const save = () => {
    try{
        console.log(newName.value)
        console.log(newbio.value)
        // console.log(newLinks)
        for(let i = 0; i < newLinks.length; i++){
            // console.log(newLinks[i].textContent)
            if(links.includes(newLinks[i].textContent)){
                continue
            } else {
                links.push(newLinks[i].textContent)
            }
        }
        console.log(links)
    } catch (err) {
        console.log(err)
    }
}

const cancel = () => {
    try{
        url = url.slice(0, url.length - 5)
        window.location.href = url
    } catch (err) {
        console.log(err)
    }
}

const add = () => {
    // let addedlink = dom() look into this

    let newlink = document.createElement('div');
    let link = document.createElement('p');
    let anch = document.createElement('a');
    let btn = document.createElement('button');

    newlink.className = "pair";
    link.className = "linksEdit";
    anch.className = "linktest";
    btn.className = "delete";

    anch.value = addlink.value
    btn.value = "Delete"

    link.appendChild(anch);
    newlink.appendChild(link);
    newlink.appendChild(btn)

    console.log(addlink.value)
    links.push(addlink.value)
}

savebtn.addEventListener('click', save);
cancelbtn.addEventListener('click', cancel);
newLinkAddBtn.addEventListener('click', add)