
import { render } from 'react-dom'
import * as React from 'react';
import { observer } from 'mobx-react';
import { Aspect_D, DataItem, DataListKey, Idea_D, Note_D } from '../../modelling/types';
import { store } from '../store';
type ListProps = {
  dataListKey: DataListKey
}
export const List_V = observer(({dataListKey}: ListProps) => {
  return (
    <div>
      {store[dataListKey].map(item => 
        <list-item>
          {item.name}
        </list-item>  
      )}
    </div>
  )
})