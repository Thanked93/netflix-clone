import React, { useContext, useEffect, useState } from "react";
import { NETFLIX_ORIGINALS } from "../../api/requests";
import Banner from "../../components/banner/Banner";
import Row from "../../components/row/Row";
import StoreContext from "../../context/StoreContext";
import { ItemEntry } from "../../reducer/movie/movieReducer";
import "./Home.css";

const Home: React.FC = () => {
  const { movieState } = useContext(StoreContext);
  const [bigRow, setBigRow] = useState<ItemEntry | null>(null);
  const [otherRows, setOtherRows] = useState<ItemEntry[]>([]);

  useEffect(() => {
    let br: ItemEntry[] = movieState.filter(
      (item) => item.key === NETFLIX_ORIGINALS.url
    );
    setBigRow(br[0]);
    let or: ItemEntry[] = movieState.filter(
      (item) => item.key !== NETFLIX_ORIGINALS.url
    );
    setOtherRows(or);
  }, [setBigRow, setOtherRows, movieState]);

  if (!bigRow?.title || !bigRow.items || otherRows.length === 0) return null;
  else {
    return (
      <div className="home">
        <Banner>
          <div className="home__rows">
            <div key={`${0}-#`} className="home__row">
              <Row
                title={bigRow.title}
                itemObject={bigRow.items}
                row={0}
                isLarge={true}
              />
            </div>
            {otherRows.map((entry, i) => {
              return (
                <div
                  key={`${i + 1}-#`}
                  className={i > 0 ? "home__rowSm" : "home__row"}
                >
                  <Row
                    title={entry.title}
                    itemObject={entry.items}
                    row={i + 1}
                  />
                </div>
              );
            })}
          </div>
        </Banner>
      </div>
    );
  }
};
export default Home;
