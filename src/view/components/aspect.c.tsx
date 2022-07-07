
import { observer } from 'mobx-react';
import * as React from 'react';
import { Aspect_D } from '../../modelling/types';
export const Aspect_C = observer(
  ({name, notes, ideas}: Aspect_D) => { 
    return (  
      <aspect-view>
        {name}
        Notes: {notes.length}
        Ideas: {ideas.length}
      </aspect-view>
  )
})