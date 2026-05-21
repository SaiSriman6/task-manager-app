## Project: Task Manager App 🛍️

A fully interactive React Task Manager application focused on:

* State management
* Form handling
* Validation
* Component communication

This project helps in understanding core React concepts using practical UI interactions without backend integration.

---

# Topics Covered

## 1. useState Hook

The project uses `useState` for managing:

* Primitive values
* Objects
* Arrays
* Form inputs
* Task lists

### Concepts Practiced

```javascript id="r6u7d2"
const [tasks, setTasks] = useState([]);
const [title, setTitle] = useState("");
const [priority, setPriority] = useState("");
```

---

# 2. Event Handling

Handled user interactions such as:

* Input changes
* Form submission
* Button clicks
* Checkbox toggles

### Example

```javascript id="k8n2az"
const handleSubmit = (e) => {
  e.preventDefault();
};
```

---

# 3. Form Validation & Submission

The application validates:

* Required fields
* Minimum title length
* Proper form submission

### Validation Rules

* Task title is required
* Minimum 3 characters required

### Features

* Error messages shown under fields
* Form cleared after successful submission

---

# 4. Lifting State Up

State is managed in the parent component and passed down to children using props.

### Parent Component

* `TaskManager.jsx`

### Child Components

* `AddTaskForm.jsx`
* `TaskList.jsx`
* `TaskItem.jsx`

---

# Project Features

## ✅ Task Features

* Add new task
* Delete task
* Mark task as complete/incomplete
* Toggle task status

## ✅ Form Features

* Form validation
* Error messages
* Controlled inputs
* Auto form reset after submission

## ✅ UI Features

* Total tasks count
* Completed tasks count
* Dynamic rendering using props

---

# Component Structure

```plaintext id="m3kq91"
App
 └── TaskManager
        ├── AddTaskForm
        └── TaskList
               └── TaskItem
```

---

# Component Responsibilities

## App.jsx

Root component of the application.

---

# TaskManager.jsx

Main parent component responsible for:

* Managing tasks state
* Adding tasks
* Updating task status
* Deleting tasks
* Passing props to children

---

# AddTaskForm.jsx

Handles:

* Form inputs
* Validation logic
* Form submission
* Error handling

---

# TaskList.jsx

Responsible for:

* Rendering all tasks
* Receiving tasks via props

---

# TaskItem.jsx

Displays:

* Task title
* Priority
* Completion status
* Action buttons

---

# Features Implemented

| Feature         | Description                     |
| --------------- | ------------------------------- |
| Add Task        | Add new task dynamically        |
| Delete Task     | Remove tasks from list          |
| Toggle Complete | Mark task complete/incomplete   |
| Validation      | Prevent invalid submissions     |
| Task Counts     | Display total & completed tasks |

---

# React Concepts Practiced

| Concept               | Usage                      |
| --------------------- | -------------------------- |
| `useState`            | State management           |
| Props                 | Parent-child communication |
| Event Handling        | User interaction           |
| Conditional Rendering | Show validation errors     |
| Lifting State Up      | Shared state management    |
| Controlled Components | Form handling              |

---

# Validation Example

```javascript id="t4q1xm"
if (title.trim().length < 3) {
  setError("Title must be at least 3 characters");
}
```

---

# State Update Example

```javascript id="j7p2ca"
setTasks([...tasks, newTask]);
```

---

# Learning Outcomes

After completing this project, you learned:

* How React manages state
* How form validation works
* How components communicate using props
* How to handle user events
* How to update arrays immutably
* How lifting state up works in React

These concepts are fundamental for building applications using:

* React
* Modern frontend architectures

---

# Technologies Used

| Technology | Purpose           |
| ---------- | ----------------- |
| JavaScript | Application logic |
| React      | Frontend library  |
| CSS        | Styling           |
| JSX        | UI structure      |

---

# Future Improvements

Possible enhancements:

* Local storage persistence
* Task filtering
* Search functionality
* Edit task feature
* Dark mode
* Backend integration
* Due dates & reminders
