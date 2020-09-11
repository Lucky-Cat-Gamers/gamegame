import items from '../../../data/items';

export default function loadStartingItems() {
  return (dispatch, getState) => {

    dispatch({
      type: 'GET_ITEM',
      payload: items.weapons.staff
    });

    dispatch({
      type: 'EQUIP_ITEM',
      payload: getState().inventory.items[0]
    });
  };
}