# React + Vite
## Password Generator App

This React application generates secure passwords based on user preferences for length and character types. It utilizes various React hooks (`useState`, `useCallback`, `useEffect`, `useRef`) for state management and side effects.

### Features:

- **Password Generation**: Dynamically generates passwords based on selected criteria (length, inclusion of numbers, special characters).
- **Copy to Clipboard**: Allows users to copy generated passwords to the clipboard with a single click.
- **Customization**: Users can adjust the password length using a range input and choose whether to include numbers and special characters.
- **Responsive Design**: Designed to be responsive and user-friendly across different devices.

### How It Works:

1. **Password Generation**: When the user adjusts the password length or selects options for numbers and characters, the password is dynamically updated.
2. **Copy to Clipboard**: Clicking the "Copy" button copies the generated password to the clipboard, making it easy to use immediately.
3. **State Management**: Utilizes `useState` to manage password state, `useCallback` to memoize functions for generation and copying, `useEffect` to trigger password generation on state changes, and `useRef` to reference the password input for copying.


### Technologies Used:

- React
- Tailwind CSS (for styling)
- JavaScript (ES6+)

### Author:

Neha
