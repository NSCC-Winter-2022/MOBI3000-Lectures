
var headingClick = () => {
    var heading = document.getElementById('hello');
    heading.style.color = 'red';
}

ReactDOM.render(
    React.createElement('h1', {id:'hello', onClick:headingClick}, 'Hello World!'),
    document.getElementById('root')
)