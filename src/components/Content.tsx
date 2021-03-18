import { MovieCard } from "./MovieCard";

interface ContentProps {
  movies: Array<{
    Title:string,
    Poster: string,
    Runtime:string,
    Ratings: Array<{
      Value:string
    }>
  }>
}


export function Content( { movies }: ContentProps) {
  return (
    <main>
          <div className="movies-list">
            {movies.map(movie => (
              <MovieCard title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
  )
}