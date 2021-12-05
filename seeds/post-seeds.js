const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    user_id: 3,
    genre_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    user_id: 8,
    genre_id: 2
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    content: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    user_id: 1,
    genre_id: 3
  },
  {
    title: 'Nunc purus.',
    content: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
    user_id: 4,
    genre_id: 7
  },
  {
    title: 'Pellentesque eget nunc.',
    content: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?',
    user_id: 7,
    genre_id: 2
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    content: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    user_id: 4,
    genre_id: 8
  },
  {
    title: 'In hac habitasse platea dictumst.',
    content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
    user_id: 10,
    genre_id: 7
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    content: 'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
    user_id: 1,
    genre_id: 6
  },
  {
    title: 'Duis ac nibh.',
    content: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.',
    user_id: 6,
    genre_id: 8
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    content: 'In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. ',
    user_id: 5,
    genre_id: 4
  },
  { 
    title: 'In hac habitasse platea dictumst.',
    content: 'lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus felis eu vulputate vulputate.',
    user_id: 3,
    genre_id: 2
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    content: 'But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted.',
    user_id: 9,
    genre_id: 1
  },
  {
    title: 'Donec dapibus.',
    content: 'The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32',
    user_id: 8,
    genre_id: 5
  },
  {
    title: 'Nulla tellus.',
    content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    user_id: 3,
    genre_id: 6
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    content: 'Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)',
    user_id: 3,
    genre_id: 8
  },
  {
    title: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    content: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    user_id: 7,
    genre_id: 7
  },
  {
    title: 'In hac habitasse platea dictumst.',
    content: 'There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...',
    user_id: 6,
    genre_id: 5
  },
  {
    title: 'Etiam justo.',
    content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    user_id: 4,
    genre_id: 1
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    content: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea?',
    user_id: 6,
    genre_id: 6
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    content: 'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat',
    user_id: 7,
    genre_id: 3
  },
  {
    title: 'which of us ever undertakes laborious physical exercise, except to obtain some advantage from it?',
    content: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.',
    user_id: 7,
    genre_id: 8
  },
  {
    title: 'No one rejects, dislikes, or avoids pleasure itself',
    content: 'Et harum quidem rerum facilis est et expedita distinctio.',
    user_id: 7,
    genre_id: 4
  },
  {
    title: 'Itaque earum rerum hic tenetur a sapiente delectus',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    user_id: 7,
    genre_id: 5
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;