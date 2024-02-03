import propTypes from "prop-types";

function Movie({ coverImg, title, summary, genres }) {
    return (
        <div>
            <img alt={title} src={coverImg} />
            <h2>{title}</h2>
            <p>{summary}</p>
            <ul>
                {genres.map((genre) => (
                    <li key={genre}>{genre}</li>
                ))}
            </ul>
        </div>
    );
}

Movie.propTypes = {
    coverImg: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    genres: propTypes.arrayOf(propTypes.string.isRequired),
};
export default Movie;
