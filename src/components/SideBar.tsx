import { List, AutoSizer, ListRowRenderer } from "react-virtualized"
import { Button } from './Button';

interface SideBarProps {
  genres: Array<{
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }>,
  selectedGenreId: number,
  handleClickButton: Function

}

export function SideBar({ genres, selectedGenreId, handleClickButton }: SideBarProps) {

  // @dev - it is not necessary to use react-virtualized here.
  // it was only used for study purposes.
  const rowRender: ListRowRenderer = ({ index, key, style }) => {

    const genre = genres[index];
    return (
      <div key={key} style={style}>
        <Button
          key={genre.id}
          id={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => handleClickButton(genre.id)}
          selected={selectedGenreId === genre.id}
        />
      </div>
    )
  }

  return (
    <nav className="sidebar" >
      <span>Watch<p>Me</p></span>

      <div className="buttons-container" style={{ height:"100vh"}}>

        <AutoSizer >
          {({ height, width }) => (
            <List
              height={height}
              width={width}
              rowHeight={82}
              overscanRowCount={5}
              rowCount={genres.length}
              rowRenderer={rowRender}
            />
          )}
        </AutoSizer> 

       
      </div>

    </nav>
  )
}