// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const template = `import React from 'react';

type Props = {};

const {{ fileName }}: React.FC<Props> = () => {
  return (
    <div>
      <b>{{ fileName }}</b>
    </div>
  );
};

export default {{ fileName }};
`;

module.exports = template;
