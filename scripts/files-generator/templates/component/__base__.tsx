// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const template = `import React from 'react';

import styles from './{{ fileName }}.scss';

type Props = {};

const {{ fileName }}: React.FC<Props> = () => {
  return (
    <div className={styles.root}>
      <b>{{ fileName }}</b>
    </div>
  );
};

export default {{ fileName }};
`;

module.exports = template;
