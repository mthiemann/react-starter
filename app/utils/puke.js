import React from 'react';

const puke = obj => <pre>{JSON.stringify(obj, null, ' ')}</pre>;

export default puke;
