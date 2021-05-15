const post = document.querySelector('#post');
const friend = document.querySelector('#friends');
const edit = document.querySelector('#editProfile')



let url = window.location.href;

const postRender = () => {
    // console.log('post working')
    try{
        // fetch(url, {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        // })
        url = url.slice(0, url.length - 8)
        window.location.href = url
        // console.log(url)
    } catch (err) {
        console.log(err);
    }
}

const friendRender = () => {
    // console.log('friend working');
    try {
        // fetch(url + '/friends', {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     redirect: url + '/friends',
        // })
        window.location.href = url + '/friends'
    } catch (err) {
        console.log(err);
    }
}

const editRender = () => {
    try{
        window.location.href = url + '/edit';
    } catch (err) {
        console.log(err);
    }
}


post.addEventListener('click', postRender);
friend.addEventListener('click', friendRender);
edit.addEventListener('click', editRender);