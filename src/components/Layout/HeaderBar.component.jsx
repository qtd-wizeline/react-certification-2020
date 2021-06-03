import React, { useState } from 'react';
import { Input, Avatar, Switch } from 'antd';
import { UserOutlined, SearchOutlined } from '@ant-design/icons';

import './HeaderBar.styles.css';

export function HeaderBar() {
  const [searchText, setSearchText] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <header className="main-header">
        <div>
          <button type="submit" className="toggle-button">
            <span className="toggle-button__bar" />
            <span className="toggle-button__bar" />
            <span className="toggle-button__bar" />
          </button>

          <Input
            placeholder="Buscar"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            prefix={<SearchOutlined />}
          />
        </div>

        <nav className="main-nav">
          <ul className="main-nav__items">
            <li className="main-nav__item">
              <Switch
                checked={darkMode}
                onChange={setDarkMode}
                style={{ marginRight: '10px' }}
              />
              <p>Dark mode</p>
            </li>
            <li className="main-nav__item">
              <Avatar icon={<UserOutlined />} />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
