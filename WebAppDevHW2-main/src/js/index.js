window.onload = function() {
    // Fetch from URL
    // fetch('https://api.npoint.io/6395d40491d7ebc4115a')
    // Fetch from file
    fetch('./res/json/posts.json')
        .then((response) => response.json())
        .then(json => {
            console.log('Getting data from json')

            json.forEach(element => {
                // Post info
                let postUsername = element.username
                let postDate = element.date
                let postImgSrc = element.img_source
                let postDescription = element.description
                let postUsernamesrc = element.username_source
                // Implementing to index.html
                // HTML elements
                let main = document.getElementById('main')
                let postArticle = document.createElement('article')
                let postSection = document.createElement('section')
                let postUsera = document.createElement('img')
                let postSectionUsername = document.createElement('p')
                let postSectionDate = document.createElement('p')
                let postADesc = document.createElement('p')
                let postLike = document.createElement('img')
                // HTML element values and classes
                postUsera.src = postUsernamesrc
                postSectionUsername.innerHTML = postUsername + '&ensp;' + '&ensp;'
                postSectionDate.innerHTML = postDate
                postADesc.innerHTML = postDescription
                postLike.src = 'https://png.pngitem.com/pimgs/s/0-6252_facebook-thumb-up-icon-transparent-likes-facebook-hd.png'
                postArticle.className = 'Article'
                postSection.className = 'UserDate'
                postUsera.className = 'user_icon'
                postLike.className = 'like'
                // Appendings
                main.appendChild(postArticle)
                postArticle.appendChild(postSection)
                // If post has image
                if (postImgSrc != '') {
                    let postImg = document.createElement('img')
                    postImg.className = 'image'
                    postImg.src = postImgSrc
                    postArticle.appendChild(postImg)
                }
                postArticle.appendChild(postADesc)
                postArticle.appendChild(postLike)
                postSection.appendChild(postUsera)
                postSection.appendChild(postSectionUsername)
                postSection.appendChild(postSectionDate)
            });
            console.log('Json data read')
        })
    }