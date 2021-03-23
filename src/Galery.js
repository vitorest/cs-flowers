import React from 'react';

function Galery() {
  return (
    <div>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src="https://i.postimg.cc/vBJYt5qt/053.jpg" alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export default Galery;
