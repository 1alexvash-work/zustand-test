"use client";

import React from "react";

import { useCounterStore } from "@/providers/counter-store-provider";

const HomePage = () => {
  const { count, incrementCount, decrementCount } = useCounterStore(
    (state) => state
  );

  return (
    <div className="flex justify-center ">
      <div className="flex flex-col gap-1">
        Count: {count}
        <button
          type="button"
          onClick={decrementCount}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Decrement Count
        </button>
        <button
          type="button"
          onClick={incrementCount}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Increment Count
        </button>
      </div>
    </div>
  );
};

export default HomePage;
