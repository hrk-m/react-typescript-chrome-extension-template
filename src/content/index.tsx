import React from 'react';
import { createRoot } from 'react-dom/client';

import { Content } from './Content';

const Main = ({
  translatedText,
  originalText,
  targetLang,
}: {
  translatedText: string;
  originalText: string;
  targetLang: string;
}) => {
  return (
    <div
      style={{
        position: 'absolute',
        width: '100%',
        left: '0px',
        top: '0px',
        zIndex: 2147483550,
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: '10px', // 自由に変えて良い
          top: '10px', // 自由に変えて良い
          zIndex: 2147483550,
        }}
      >
        <Content
          translatedText={translatedText}
          originalText={originalText}
          targetLang={targetLang}
        />
      </div>
    </div>
  );
};

chrome.runtime.onMessage.addListener(async function (message, sender, sendResponse) {
  if (message.type === 'SHOW') {
    if (document.getElementsByTagName('my-extension-root').length > 0) {
      document.getElementsByTagName('my-extension-root')[0].remove();
    }
    const container = document.createElement('my-extension-root');
    document.body.after(container);
    createRoot(container).render(
      <Main
        translatedText={message.data.translatedText.toString()}
        originalText={message.data.originalText.toString()}
        targetLang={message.data.lang.toString()}
      />
    );
  }
});
