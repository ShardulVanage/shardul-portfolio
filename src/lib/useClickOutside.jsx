import { useEffect } from 'react'
import PropTypes from 'prop-types'

/**
 * Hook that handles clicks outside of the referenced element
 * @param {Object} ref - React ref object for the element to monitor
 * @param {Function} handler - Function to call when a click outside occurs
 */
function useClickOutside(ref, handler) {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!ref || !ref.current || ref.current.contains(event.target)) {
        return
      }

      handler(event)
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [ref, handler])
}

// Note: PropTypes aren't actually used with hooks since hooks don't receive props
// This is just for documentation purposes
// Since hooks don't use PropTypes directly, we'll just add a comment instead

/**
 * Expected props types:
 * @param {Object} ref - React ref object with a current property pointing to a DOM element
 * @param {Function} handler - Event handler function to call when clicking outside
 */

export default useClickOutside