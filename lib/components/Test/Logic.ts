import { useEffect } from "react";
import { IMemory } from "../../interfaces";
import styles from "./styles.module.css";

const memory: IMemory = {};
// const compareMemories = (
//   memory: IMemory,
//   memoryId: string,
//   newMemory: IMemoryBody
// ) => {
//   // debugger;
//   const oldMemory = { ...memory[memoryId], date: 1, element: "" };
//   const newest = { ...newMemory, date: 1, element: "" };
//   return JSON.stringify(oldMemory) === JSON.stringify(newest);
// };

const convertToAnimation = (element: HTMLDivElement, animateId: string) => {
  if (element.classList.contains(styles.animated)) {
    return;
  }
  const dateId = new Date().getTime().toString();
  memory[animateId].date = dateId;
  element.setAttribute("creation", dateId);
  element.classList.add(styles.animated);
};

const getRepeated = (animateId: string) => {
  return document.querySelectorAll(`[animate-id="${animateId}"]`);
};

const preserveLast = (animateId: string) => {
  const repeated = getRepeated(animateId);
  if (repeated.length < 2) {
    repeated[0].classList.remove(styles.hidden);
    return;
  }
  repeated.forEach((e) => {
    const creation = e.getAttribute("creation");
    const creationSaved = memory[animateId].date;
    if (creation && creationSaved && creationSaved !== creation) {
      e.classList.add(styles.hidden);
      return;
    }
    e.classList.remove(styles.hidden);
  });
};

const getElementData = (element: HTMLDivElement) => {
  const { x, y } = element.getBoundingClientRect();
  return {
    className: element.className,
    animateId: element.getAttribute("animate-id")!,
    x,
    y,
    height: element.clientHeight,
    width: element.clientWidth,
  };
};

const Logic = () => {
  useEffect(() => {
    const elements = document.querySelectorAll("[animate-id]");
    if (!elements.length) {
      return;
    }

    elements.forEach((e) => {
      const element = e as HTMLDivElement;
      const { animateId } = getElementData(element);
      convertToAnimation(element, animateId);
      preserveLast(animateId);

      // const elementsRepeated = getRepeated(animateId);
      // debugger;
      // if (
      //   elementsRepeated.length > 1 &&
      //   !elementsRepeated[0].classList.contains(styles.hidden)
      // ) {
      //   elementsRepeated[0].classList.add(styles.hidden);
      // }

      // const newMemory: IMemoryBody = {
      //   date: new Date(),
      //   className,
      //   height,
      //   width,
      //   element: e,
      //   x,
      //   y,
      // };

      // memory[animateId!] = newMemory;
    });
  });

  return {};
};

export default Logic;
