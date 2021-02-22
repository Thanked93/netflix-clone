import React, { useContext, useEffect, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { useHistory, useLocation } from "react-router-dom";
import StoreContext from "../../../context/StoreContext";
import { CHANGE_QUERY } from "../../../reducer/account/accountReducer";
import "./Search.css";
interface SearchProps {}

const Search: React.FC<SearchProps> = () => {
  const location = useLocation();
  const router = useHistory();
  const { accountState, accountDispatch } = useContext(StoreContext);
  const [pushBrowse, setPushBrowse] = useState<boolean>(false);
  const [showInput, setShowInput] = useState<boolean>(false);
  useEffect(() => {
    if (pushBrowse) {
      if (!location.pathname?.includes("browse")) {
        router.push("/browse");
      }
    }
    setPushBrowse(false);
  }, [pushBrowse, setPushBrowse, accountState.searchQuery, location, router]);

  return (
    <div className="search" tabIndex={1}>
      <div className="search__container">
        <BiSearchAlt2
          color="white"
          size="30px"
          tabIndex={1}
          onClick={() => setShowInput(!showInput)}
        />
        {showInput && (
          <input
            onChange={(e) => {
              setPushBrowse(true);
              accountDispatch({
                type: CHANGE_QUERY,
                payload: { searchQuery: e.target.value },
              });
            }}
            className="search__input"
            type="text"
            maxLength={20}
            value={accountState.searchQuery}
            placeholder="Movie"
          />
        )}
      </div>
    </div>
  );
};

export default Search;
