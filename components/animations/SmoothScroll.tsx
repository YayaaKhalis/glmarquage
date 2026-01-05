'use client';

import { useEffect } from 'react';

export default function SmoothScroll() {
  useEffect(() => {
    // Ajouter smooth scroll
    document.documentElement.style.scrollBehavior = 'smooth';

    // Améliorer le scroll sur mobile
    if (typeof window !== 'undefined') {
      // Désactiver le bounce effect sur iOS
      document.body.style.overscrollBehavior = 'none';
    }

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return null;
}
