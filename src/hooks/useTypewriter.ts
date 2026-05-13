import { useState, useEffect, useCallback } from 'react';

export function useTypewriter(phrases: string[]): string {
  const [displayed, setDisplayed] = useState('');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const tick = useCallback(() => {
    const current = phrases[phraseIdx];
    if (!deleting) {
      setDisplayed('> ' + current.substring(0, charIdx + 1));
      setCharIdx((c) => c + 1);
    } else {
      setDisplayed('> ' + current.substring(0, charIdx));
      setCharIdx((c) => c - 1);
    }
  }, [phrases, phraseIdx, charIdx, deleting]);

  useEffect(() => {
    const current = phrases[phraseIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && charIdx < 0) {
      setDeleting(false);
      setCharIdx(0);
      setPhraseIdx((p) => (p + 1) % phrases.length);
    } else {
      const speed = deleting ? 40 : 80 + Math.random() * 30;
      timeout = setTimeout(tick, speed);
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, phraseIdx, phrases, tick]);

  return displayed;
}
