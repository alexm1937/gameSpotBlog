const { Comment } = require('../models');

const commentdata = [
    {
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        user_id: 1,
        post_id: 1
    },
    {
        content: 'A iaculis at erat pellentesque.',
        user_id: 1,
        post_id: 1
    },
    {
        content: 'Nunc sed id semper risus in.',
        user_id: '3',
        post_id: '3'
    },
    {
        content: 'Orci ac auctor augue mauris augue neque gravida in fermentum.',
        user_id: '4',
        post_id: '4'
    },
    {
        content: 'Ac tincidunt vitae semper quis lectus nulla at volutpat. Faucibus turpis in eu mi bibendum neque.',
        user_id: '5',
        post_id: '5'
    },
    {
        content: 'Egestas purus viverra accumsan in nisl nisi. Quam elementum pulvinar etiam non quam lacus suspendisse.',
        user_id: '6',
        post_id: '6'
    },
    {
        content: 'Congue mauris rhoncus aenean vel elit scelerisque. ',
        user_id: '7',
        post_id: '7'
    },
    {
        content: 'Venenatis lectus magna fringilla urna porttitor. Tellus molestie nunc non blandit massa. Nulla aliquet enim tortor at.',
        user_id: '8',
        post_id: '8'
    },
    {
        content: 'Lacinia quis vel eros donec ac odio tempor orci dapibus. ',
        user_id: '9',
        post_id: '9'
    },
    {
        content: 'Erat velit scelerisque in dictum non consectetur a. ',
        user_id: '10',
        post_id: '10'
    },
    {
        content: 'Scelerisque fermentum dui faucibus in ornare.',
        user_id: '1',
        post_id: '11'
    },
    {
        content: 'Sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. Dictum fusce ut placerat orci. Eget est lorem ipsum dolor sit amet.',
        user_id: '2',
        post_id: '12'
    },
    {
        content: 'Leo in vitae turpis massa sed elementum tempus egestas.',
        user_id: '3',
        post_id: '13'
    },
    {
        content: 'Pretium vulputate sapien nec sagittis aliquam malesuada. Sit amet mauris commodo quis. ',
        user_id: '4',
        post_id: '14'
    },
    {
        content: 'Sit amet porttitor eget dolor morbi non arcu risus quis.',
        user_id: '5',
        post_id: '16'
    },
    {
        content: 'Amet mauris commodo quis imperdiet massa tincidunt.',
        user_id: '7',
        post_id: '17'
    },
    {
        content: 'Nulla posuere sollicitudin aliquam ultrices. Dictum fusce ut placerat orci nulla. Purus faucibus ornare suspendisse sed. ',
        user_id: '8',
        post_id: '18'
    },
    {
        content: 'Justo nec ultrices dui sapien eget. Mi tempus imperdiet nulla malesuada.',
        user_id: '9',
        post_id: '19'
    },
    {
        content: 'Tellus orci ac auctor augue mauris. Risus sed vulputate odio ut enim blandit volutpat maecenas.',
        user_id: '1',
        post_id: '20'
    },
    {
        content: 'Aliquam vestibulum morbi blandit cursus risus at ultrices. Facilisis volutpat est velit egestas dui.',
        user_id: '10',
        post_id: '11'
    },
    {
        content: 'Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. ',
        user_id: '4',
        post_id: '11'
    },
    {
        content: 'Vestibulum sed arcu non odio euismod lacinia. Mattis molestie a iaculis at erat pellentesque adipiscing commodo. Euismod lacinia at quis risus sed vulputate odio.',
        user_id: '7',
        post_id: '14'
    },
    {
        content: 'Amet massa vitae tortor condimentum lacinia quis vel eros.',
        user_id: '9',
        post_id: '19'
    },
    {
        content: 'Scelerisque varius morbi enim nunc faucibus a pellentesque sit. Quisque non tellus orci ac. Morbi tristique senectus et netus.',
        user_id: '6',
        post_id: '11'
    },
    {
        content: 'Amet consectetur adipiscing elit pellentesque habitant. Netus et malesuada fames ac turpis egestas integer eget aliquet.',
        user_id: '1',
        post_id: '12'
    },
    {
        content: 'Metus vulputate eu scelerisque felis. Enim ut sem viverra aliquet eget sit.',
        user_id: '5',
        post_id: '21'
    },
    {
        content: 'Aliquet porttitor lacus luctus accumsan tortor posuere. Viverra tellus in hac habitasse platea dictumst vestibulum. Id eu nisl nunc mi ipsum.',
        user_id: '10',
        post_id: '23'
    },
    {
        content: 'Sed odio morbi quis commodo odio aenean sed adipiscing. Dis parturient montes nascetur ridiculus mus mauris vitae.',
        user_id: '8',
        post_id: '21'
    },
    {
        content: 'Urna cursus eget nunc scelerisque viverra. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis.',
        user_id: '8',
        post_id: '22'
    },
    {
        content: 'Quam elementum pulvinar etiam non quam lacus suspendisse. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero. Diam vulputate ut pharetra sit amet.',
        user_id: '5',
        post_id: '21'
    },
    {
        content: 'In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Viverra adipiscing at in tellus. Dolor purus non enim praesent. Nisi est sit amet facilisis magna etiam tempor orci eu.',
        user_id: '2',
        post_id: '23'
    },
    {
        content: 'Curabitur gravida arcu ac tortor dignissim convallis aenean et tortor.',
        user_id: '2',
        post_id: '23'
    },
    {
        content: 'Orci porta non pulvinar neque laoreet suspendisse. At tempor commodo ullamcorper a. Arcu non odio euismod lacinia. Quis enim lobortis scelerisque fermentum dui.',
        user_id: '1',
        post_id: '21'
    },
    {
        content: 'Adipiscing diam donec adipiscing tristique risus nec feugiat. Accumsan lacus vel facilisis volutpat est velit egestas dui. Nec feugiat nisl pretium fusce id velit ut tortor. ',
        user_id: '3',
        post_id: '15'
    },
    {
        content: 'Elementum sagittis vitae et leo. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Malesuada fames ac turpis egestas integer eget. Porta lorem mollis aliquam ut.',
        user_id: '9',
        post_id: '23'
    }
]

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;