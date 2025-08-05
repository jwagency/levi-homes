export const splitTextIntoWords = (element: HTMLElement): HTMLElement[] => {
  if (!element) return [];
  
  const text = element.textContent || '';
  const words = text.split(' ');
  
  element.innerHTML = '';
  
  const wordElements: HTMLElement[] = [];
  
  words.forEach((word, index) => {
    const wordSpan = document.createElement('span');
    wordSpan.textContent = word;
    wordSpan.className = 'inline-block word-reveal';
    wordSpan.style.overflow = 'hidden';
    
    const wrapperSpan = document.createElement('span');
    wrapperSpan.className = 'inline-block overflow-hidden';
    wrapperSpan.appendChild(wordSpan);
    
    element.appendChild(wrapperSpan);
    wordElements.push(wordSpan);
    
    if (index < words.length - 1) {
      element.appendChild(document.createTextNode(' '));
    }
  });
  
  return wordElements;
};