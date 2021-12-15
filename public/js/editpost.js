
async function editFormHandler(event) {
    event.preventDefault();
    
    const title = document.querySelector('input[name="post-title"]').value;
    const contents = document.querySelector('textarea[name="post-text"]').value;
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];


    const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title,
        contents
    }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then( (response) => {
        console.log(response);
        return response.json();
    }).then( (data) => {
        console.log(data);
        document.location.replace('/dashboard/');
    }).catch((error) =>  {
        console.log(error);
        document.location.reload();
    });

  
  }
  document.querySelector('.updatepost-form').addEventListener('submit', editFormHandler);  