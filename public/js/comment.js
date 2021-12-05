document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);

async function commentFormHandler(event) {
    event.preventDefault();

    const content = document.querySelector('textarea[name="post-text"]').value.trim();

    const post_id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];
    // Adds a comment.
    const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({
            content,
            post_id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    
    if (response.ok) {
        document.location.reload();
    } else {
        alert(response.statusText);
    }

}