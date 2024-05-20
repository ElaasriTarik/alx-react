import $ from 'jquery';
import { debounce } from 'lodash';


const body = $('body');
body.append($('<p>').text('Holberton Dashboard'));
body.append($('<p>').text('Dashboard data for the students'));
body.append('<button>Click here to get started</button>');
body.append($('<p>').attr('id', 'count'));
body.append($('<p>').text('Copyright - Holberton School'));

let count = 0;
function updateCounter() {
    count++;
    $('#count').text(`${count} clicks on the button`);
}
const button = $('button');
button.on('click', debounce(updateCounter, 500));
