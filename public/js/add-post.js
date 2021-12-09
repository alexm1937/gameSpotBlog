const dropdown = document.querySelector('.dropdown')
const genre = dropdown.querySelector('.genre')
dropdown.addEventListener('click', newDropdownHandler);

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);

async function newDropdownHandler(event) {
    event.preventDefault();

    dropdown.setAttribute('class', 'dropdown is-active')
    if(event.target.getAttribute('data-genre-id')) {
        dropdown.setAttribute('class', 'dropdown')
        genre.setAttribute('data-genre-id', event.target.getAttribute('data-genre-id'))
        genre.textContent = event.target.textContent;
    }
}


async function newFormHandler(event) {
    event.preventDefault();
    
    const title = document.querySelector('input[name="post-title"]').value.trim();
    const content = document.querySelector('textarea[name="post-text"]').value.trim();
    const genre_id = genre.getAttribute('data-genre-id');
    
    if (title && content && genre_id) {
        // Adds a post.
        const postResponse = await fetch(`/api/posts`, {
            method: 'POST',
            body: JSON.stringify({
                title,
                content,
                genre_id
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (postResponse.ok) {
            document.location.reload();
        } else {
            alert(postResponse.statusText);
        }
    } else {
        alert("Please fill all fields.")
    }
}

