// src/components/ViewerCounter.jsx
import React, { useEffect, useState } from 'react';
import { ref, onValue, runTransaction } from 'firebase/database';
import { database } from '../firebase'; // Adjust path if needed

const ViewerCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const counterRef = ref(database, 'viewers');

    runTransaction(counterRef, (currentValue) => {
      return (currentValue || 0) + 1;
    });

    const unsubscribe = onValue(counterRef, (snapshot) => {
      setCount(snapshot.val() || 0);
    });

    return () => unsubscribe();
  }, []);

  return (
    <p className="text-center text-sm text-cyan-300 mt-6">
      👁️ Viewers Visited: <span className="font-semibold">{count}</span>
    </p>
  );
};

export default ViewerCounter;
