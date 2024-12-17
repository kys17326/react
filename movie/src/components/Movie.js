import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({id, coverImg, year, title, summary, genres}) {
    return (
        <div>
            <h2>MOVIE {year}</h2>
            <img src={coverImg} alt={title}/>
            {/* <h2><a href={`/movie/${id}`}>{title}</a></h2> */}
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <p>{summary.length > 235 ? `${summary.slice(0, 235)}` : summary}</p>
            <ul>
                {genres.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
        </div>
    );
}

Movie.prototype = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;