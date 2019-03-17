var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    image: 'images/img-1.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    image: 'images/img-2.jpeg'
  },
  {
    id: 3,
    title: 'Chłopaki nie płaczą',
    desc: 'Klasyk',
    image: 'images/img-3.jpeg'
  },
  {
    id: 4,
    title: 'Kiler',
    desc: 'Klasyk numer 2',
    image: 'images/img-4.jpg'
  }
];


MovieTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
  },
  render: function() {
    return React.createElement('h2', {}, this.props.title)
  }
})

MovieDesc = React.createClass({
  propTypes: {
    desc: React.PropTypes.string.isRequired,
  },
  render: function() {
    return React.createElement('p', {}, this.props.desc)
  }
})

Movie = React.createClass({
  propTypes: {
      movie: React.PropTypes.object.isRequired,
  },
	render: function() {
		return React.createElement('li', {},
		    React.createElement(MovieTitle, { title: this.props.movie.title }),
		    React.createElement(MovieDesc, { desc: this.props.movie.desc }),
		    React.createElement('img', {src: this.props.movie.image})
		);	
	}  
});

var MoviesList = React.createClass({
    propTypes: {
        movies: React.PropTypes.array.isRequired,
    },
    render: function () {
        return (
            React.createElement('ul', {}, this.props.movies.map(function (movie) {
                return React.createElement(Movie, { key: movie.id, movie: movie })
            }))
        )
    }
});

var element = React.createElement('div', {},
    React.createElement(MoviesList, { className: 'movie-list', movies: movies })
);

ReactDOM.render(element, document.getElementById('app'));