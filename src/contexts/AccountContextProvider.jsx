import React, { useState } from 'react';

const AccountContext = React.createContext({
  account: {
    id: null,
    name: null,
    avatar: null,
  },
  favoriteVideos: [],
  addFaveVideo: () => {},
  accountChange: () => {},
});

const AccountContextProvider = (props) => {
  const [account, setAccount] = useState(AccountContext.account);
  const [favoriteVideos, setFavoriteVideos] = useState([]);

  const addFaveVideo = (add) => {
    setFavoriteVideos((oldArray) => [...oldArray, add]);
  };

  const accountChange = (acc) => {
    setAccount(acc);
  };

  return (
    <AccountContext.Provider
      value={{ account, favoriteVideos, accountChange, addFaveVideo }}
    >
      {props.children}
    </AccountContext.Provider>
  );
};

export { AccountContext };

export default AccountContextProvider;
