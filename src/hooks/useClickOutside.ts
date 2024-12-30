import { useEffect, RefObject } from 'react'

type Handler = () => void

export function useClickOutside<T extends HTMLElement>(
  ref: RefObject<T | null>,
  handler: Handler,
  mouseEvent: 'mousedown' | 'mouseup' = 'mousedown'
): void {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler()
      }
    }

    document.addEventListener(mouseEvent, handleClickOutside)
    return () => document.removeEventListener(mouseEvent, handleClickOutside)
  }, [ref, handler, mouseEvent])
}
