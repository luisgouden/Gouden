// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
	{
		title: 'daylights',
		slug: 'daylights',
		images: 4
	},

	{
		title: 'chillwave',
		slug: 'chillwave',
		images: 9
	},

	{
		title: 'stellar',
		slug: 'stellar',
		images: 5

	},

	{
		title: '36daysoftype',
		slug: '36daysoftype',
		images: 2

	},

	{
		title: 'journey',
		slug: 'journey',
		images: 8

	},

	{
		title: 'geometry',
		slug: 'geometry',
		images: 3

	}
];

posts.forEach(post => {post.html});

export default posts;
