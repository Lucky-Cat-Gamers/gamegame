import React       from 'react';
import { connect } from 'react-redux';

import toggleSettings from '../../dialog-manager/actions/toggle-settings';

import './styles.scss';

const LeaderBoard = ({ toggleSettings }) => {

  return(
    <button onClick={toggleSettings}
      className='game-settings__button white-border'>

      <i className={`fas fa-trophy game-settings__icon`} />

    </button>
  );
};

const actions = { toggleSettings };

export default connect(null, actions)(LeaderBoard);