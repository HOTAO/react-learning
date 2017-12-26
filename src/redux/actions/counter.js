/*
 * @Author: HT
 * @Date: 2017-12-07 17:09:11
 * @Last Modified by:   HT
 * @Last Modified time: 2017-12-07 17:09:11
 */

/*action*/

export const INCREMENT = "counter/INCREMENT";
export const DECREMENT = "counter/DECREMENT";
export const RESET = "counter/RESET";

export function increment() {
  return { type: INCREMENT }
}

export function decrement() {
  return { type: DECREMENT }
}

export function reset() {
  return { type: RESET }
}
