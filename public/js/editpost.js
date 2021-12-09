document.querySelector('.updatepost-form').addEventListener('click', editFormHandler);

async function editFormHandler(event) {
    event.preventDefault();
    console.log("Edit Clicked");
  
    const title = document.querySelector('input[name="post-title"]').value;
    const content = document.querySelector('input[name="post-contents"]').value;
    const genre = document.querySelector('input[name="dropdown-content"]').value;
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title,
        content,
        genre
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
  }
  