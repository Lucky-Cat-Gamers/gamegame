import React       from 'react';
import { connect } from 'react-redux';

import Button        from '../../../../components/button';
import Dialog        from '../../../../components/dialog';
import backToSelect  from '../../actions/back-to-select';
import startMainGame from '../../../world/actions/start-main-game';

import './styles.scss';

const MainGameStart = ({ startMainGame, backToSelect }) => {
  return(
    <Dialog
      goBack={backToSelect}
      onKeyPress={startMainGame}>

      <span className='flex-row game-start__title'>
        {'Story Mode'}
      </span>

      <span className='flex-column game-start__text'>
        {'In this section of the game, explore the town of Pumpkin Falls'}
      </span>

      <div className='flex-column game-start__button'>
        <Button
          onClick={startMainGame}
          icon='compass'
          title={'Explore Town'} />
      </div>

    </Dialog>
  );
};

const actions = { backToSelect, startMainGame };

export default connect(null, actions)(MainGameStart);
