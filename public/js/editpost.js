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
    const contents = document.querySelector('input[name="post-content"]').value;
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
    });
  
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
    if (response.ok) {
        document.location.reload();
    } else {
        alert(response.statusText);
    }
  }
  
  document.querySelector('.updatepost-form').addEventListener('submit', editFormHandler);