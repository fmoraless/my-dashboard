"use client";
import { useAppDispatch, useAppSelector } from "@/store";
import {
  addOne,
  initCounterState,
  subtractOne,
} from "@/store/counter/counterSlice";
import { useEffect, useState } from "react";

interface Props {
  value?: number;
}

export const CartCounter = ({ value = 0 }: Props) => {
  const counter = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initCounterState(value));
  }, [dispatch, value]);

  // const [counter, setCounter] = useState(value);

  // const increment = () => {
  //   setCounter(counter + 1);
  // };

  // const decrement = () => {
  //   if (counter === 0) return;
  //   setCounter(counter - 1);
  // };

  return (
    <>
      <span className="text-9xl">{counter}</span>
      <div className="flex">
        <button
          onClick={() => dispatch(addOne())}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          +1
        </button>
        <button
          onClick={() => dispatch(subtractOne())}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          -1
        </button>
      </div>
    </>
  );
};
