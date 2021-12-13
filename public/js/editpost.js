//const dropdown = document.querySelector('.dropdown')
//const genre = dropdown.querySelector('.genre')
//dropdown.addEventListener('click', newDropdownHandler);

async function newDropdownHandler(event) {
    event.preventDefault();

    dropdown.setAttribute('class', 'dropdown is-active')
    if(event.target.getAttribute('data-genre-id')) {
        dropdown.setAttribute('class', 'dropdown')
        genre.setAttribute('data-genre-id', event.target.getAttribute('data-genre-id'))
        genre.textContent = event.target.textContent;
    }
}

async function editFormHandler(event) {
    event.preventDefault();
    
    const title = document.querySelector('input[name="post-title"]').value;
    const contents = document.querySelector('textarea[name="post-text"]').value;
    //const genre_id = genre.getAttribute('data-genre-id');
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];

    console.log(id, title, contents);

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