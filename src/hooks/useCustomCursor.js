import { useEffect, useRef, useState } from 'react'

export default function useCustomCursor() {
  const [cursorHover, setCursorHover] = useState(false)
  const [cursorPressed, setCursorPressed] = useState(false)
  const [cursorVisible, setCursorVisible] = useState(false)

  const spotlightRef = useRef(null)
  const ringRef = useRef(null)
  const dotRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const frameRef = useRef(null)

  useEffect(() => {
    const onMouseDown = () => setCursorPressed(true)
    const onMouseUp = () => setCursorPressed(false)

    window.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mouseup', onMouseUp)
    return () => {
      window.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mouseup', onMouseUp)
    }
  }, [])

  useEffect(() => {
    // Paint custom cursor elements in a single rAF cycle for smoother tracking.
    const paintCursor = () => {
      const { x, y } = mouseRef.current
      if (spotlightRef.current) {
        spotlightRef.current.style.left = `${x}px`
        spotlightRef.current.style.top = `${y}px`
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${x}px`
        ringRef.current.style.top = `${y}px`
      }
      if (dotRef.current) {
        dotRef.current.style.left = `${x}px`
        dotRef.current.style.top = `${y}px`
      }
      frameRef.current = null
    }

    const onMouseMove = (event) => {
      mouseRef.current = { x: event.clientX, y: event.clientY }
      if (event.target instanceof Element) {
        setCursorHover(Boolean(event.target.closest('a, button')))
      }
      if (!frameRef.current) {
        frameRef.current = window.requestAnimationFrame(paintCursor)
      }
    }

    const onMouseEnter = () => setCursorVisible(true)
    const onMouseLeave = () => setCursorVisible(false)

    window.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseenter', onMouseEnter)
    document.addEventListener('mouseleave', onMouseLeave)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseenter', onMouseEnter)
      document.removeEventListener('mouseleave', onMouseLeave)
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current)
      }
    }
  }, [])

  return {
    cursorHover,
    cursorPressed,
    cursorVisible,
    spotlightRef,
    ringRef,
    dotRef,
  }
}
