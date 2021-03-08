import React from 'react';
import {Spinner} from 'react-bootstrap';
import {Alert} from 'react-bootstrap';

function Message({variant,children}){
    return(
      <Alert variant={variant}>
          {children}
      </Alert>
    )
}

export default Message;