import * as React from 'react';

export const EmailTemplate = ({
message, from
}) => (
  <div>
    <h3>{from}</h3>
    <p>{message}</p>
  </div>
);
