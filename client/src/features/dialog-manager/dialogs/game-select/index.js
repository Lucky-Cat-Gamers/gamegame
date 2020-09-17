import React       from 'react';
import { connect } from 'react-redux';

import Button            from '../../../../components/button';
import Dialog            from '../../../../components/dialog';
import Flame             from '../../../../components/flame';
import mainGameDialog    from '../../actions/main-game-dialog';
import endlessGameDialog from '../../actions/endless-game-dialog';

import './styles.scss';

const GameSelect = ({ mainGameDialog, endlessGameDialog }) => {

  return(
    <Dialog>
      <span className='flex-row game-select__title'>
        {' '}
      </span>

      <span className='flex-column game-select__text'>
        {'Welcome to Witchfall! Join Addie, the friendly witch, on her adventures.'}
      </span>

      <div className='flex-column game-select__button'>
        <Button
          style={{marginBottom: 16}}
          onClick={mainGameDialog}
          icon='feather-alt'
          title={'ENTER'} />

      </div>
    </Dialog>
  );
};

const actions = { mainGameDialog, endlessGameDialog };

export default connect(null, actions)(GameSelect);
