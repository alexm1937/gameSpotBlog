document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);

async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value.trim();
    const content = document.querySelector('textarea[name="post-text"]').value.trim();
    const genre = document.querySelector('input[name="post-genre"]').value.trim();
    

    const genreResponse = await fetch(`/api/genres`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((res) => {
        if (!res.ok) {
			return alert(`Error: ${res.statusText}`);
		}
		return res.json();
    });

    const genre_id = getId();
    
    function getId() {
        for (i = 0; i < genreResponse.length; i++) {
            if (genre.toLowerCase() === genreResponse[i].genre_name.toLowerCase()) {
                return genreResponse[i].id;
            }
        }
    }
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

    if (!postResponse.ok) {
        alert(genreResponse.statusText);
    }
}