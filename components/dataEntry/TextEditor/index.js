import React, { useCallback, useState, useMemo, useEffect } from 'react';
import Prism from 'prismjs';

import { Slate, Editable, withReact } from 'slate-react';
import { createEditor } from 'slate';
import { withHistory } from 'slate-history';

import Element from './components/Element';

const initialValue = [
  {
    type: 'code-block',
    children: [
      {
        type: 'code-line',
        children: [{ text: 'const variable = "made of string"' }]
      },
      { type: 'code-line', children: [{ text: '' }] },
      { type: 'code-line', children: [{ text: 'function() {' }] },
      { type: 'code-line', children: [{ text: '  return "A string"' }] },
      { type: 'code-line', children: [{ text: '}' }] },
      { type: 'code-line', children: [{ text: '' }] },
      {
        type: 'code-line',
        children: [{ text: 'code[class*="language-"],' }]
      },
      {
        type: 'code-line',
        children: [{ text: 'pre[class*="language-"] {  ' }]
      },
      { type: 'code-line', children: [{ text: '  color: #f7f7f7;  ' }] },
      { type: 'code-line', children: [{ text: '  background: none;  ' }] },
      {
        type: 'code-line',
        children: [{ text: '  text-shadow: 0 1px rgba(0, 0, 0, 0.3);  ' }]
      },
      {
        type: 'code-line',
        children: [
          {
            text:
              '  font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;  '
          }
        ]
      },
      { type: 'code-line', children: [{ text: '  font-size: 1em;  ' }] },
      { type: 'code-line', children: [{ text: '  text-align: left;  ' }] },
      { type: 'code-line', children: [{ text: '  white-space: pre;  ' }] },
      { type: 'code-line', children: [{ text: '}' }] }
    ]
  }
];

const TextEditor = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const [slateValue, setValue] = useState(initialValue);

  const editor = useMemo(() => withHistory(withReact(createEditor())), []);
  const renderElement = useCallback(elProps => <Element {...elProps} />, []);

  return (
    <>
      <Slate
        editor={editor}
        value={slateValue}
        onChange={value => setValue(value)}
      >
        <Editable renderElement={renderElement} placeholder="Start typing..." />
      </Slate>
    </>
  );
};

export default TextEditor;
