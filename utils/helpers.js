module.exports = {
	format_date: date => {
		return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
			date
		).getFullYear()}`;
	},
	format_plural: (word, amount) => {
		if (amount !== 1) {
			return `${word}s`;
		}
		return word;
	},
	genre: (posts) => {
		// Returns an array of genres in the database.
		const genres = [[posts[0].genre.id, posts[0].genre.genre_name]];
		
		for (i = 1; i < posts.length; i++) {
			var addToArray = true;
			for (j = 0; j < genres.length; j++) {
				if (genres[j][0] === posts[i].genre.id) {
					addToArray = false;
				}
			}
			if (addToArray) {
				genres.push([posts[i].genre.id, posts[i].genre.genre_name]);
			}
		}
		return genres;
	},
	post_summary: (posts, genre) => {
		const postList = [];
		for (i = 0; i < posts.length; i++) {
			if (posts[i].genre.genre_name.toLowerCase() === genre.toLowerCase() && postList.length < 5) {
				let temp = [posts[i].title, posts[i].user.username, posts[i].created_at]
				postList.push(temp);
			}
		}
		return postList;
	}
}