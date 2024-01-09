// TODO: write your code here

export default function getActions(obj, sortingArr = []) {
    let propsArr = [];
    let i = 0;
    for (propsArr[i++] in obj);
  
    const sortArr = [];
  
    for (const prop of sortingArr) {
      if (propsArr.includes(prop)) {
        sortArr.push(prop);
      }
    }
  
    for (const prop of propsArr.sort()) {
      if (!sortArr.includes(prop)) {
        sortArr.push(prop);
      }
    }
  
    propsArr = [];
    for (const prop of sortArr) {
      propsArr.push({ key: prop, value: obj[prop] });
    }
  
    return propsArr;
  }
  
  export function getSpecialActions(character) {
    const actions = [];
    for (const action of character.special) {
      const {
        description = 'Описание недоступно',
      } = action;
      action.description = description;
      actions.push(action);
    }
  
    return actions;
  }