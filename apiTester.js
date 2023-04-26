const axios = require('axios');


axios.post('http://localhost:3000/comments', {
    body: 'Added from a post',
    postId: 66
})
.then(resp => {
    //console.log(resp.data[0].body)
    console.log(resp)
})
.catch(error => {
    console.log(error)
});


axios.get('http://localhost:3000/comments')
    .then(resp => {
        //console.log(resp.data[0].body)
        console.log(resp)
    })
    .catch(error => {
        console.log(error)
    });

