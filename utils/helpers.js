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
		const genres = [];
		for (i = 0; i < posts.length; i++) {
			if (genres.indexOf(posts[i].genre.genre_name) === -1) {
				genres.push(posts[i].genre.genre_name);
			}
		}
		return genres;
	}
}