# Lab Timer & Practice Tracker (IT 313 Lab 5)

## Problem Description
A study-tracking utility designed for IT 313 Mobile Programming lab sessions. It tracks solved practice problems and runs an active session stopwatch using React state management and hooks.

## Key React Concepts Applied
- **`useState`**: Used in `LabScreen` for problem counter (`solved`) and timer status (`isRunning`).
- **Functional State Updates**: `setSolved(s => s + 1)` prevents state update issues caused by closure values.
- **Custom Hook (`useStopwatch`)**: Encapsulates state and side-effect timer logic.
- **`useEffect` & Cleanup**: Runs a 1000ms `setInterval` and uses `clearInterval` on unmount/pause to prevent memory leaks.
- **Lifting State Up**: Centralized state management in `LabScreen` passes data via props to sibling components `PracticeTracker` and `Stopwatch`.
- **Conditional Rendering**: Toggles "Great job!" when `solved >= 5` and shifts timer status between "Running..." and "Paused".

## How to Run in Expo Go
1. Clone the repository:
   ```bash
   git clone <YOUR_GITHUB_REPO_URL>
   cd IT313_Acebido_John_ReactStateHooks