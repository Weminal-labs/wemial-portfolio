// In the future, we'll integrate with backend
// so we'll need a hook to handle this task and
// make our codebase more readable and maintainable

// Import data
// eslint-disable-next-line import/extensions
import weminal from '@/data/introduction.json'

export function useWeminal() {
  return weminal
}
