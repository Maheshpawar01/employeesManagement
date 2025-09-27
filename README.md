# Employee Management App 🚀

This project is a comprehensive employee management application built with React and Redux. It allows users to perform CRUD (Create, Read, Update, Delete) operations on employee records. The application features a user-friendly interface with form validation, data fetching from a mock API, and state management using Redux. It provides a structured way to manage employee information, including name, email, mobile number, and location details (country, state, district).

## 🌟 Key Features

- **Create Employee:** Add new employee records with details like name, email, mobile, and location.
- **Read Employee List:** View a list of all employees with their information displayed in a table.
- **Update Employee:** Modify existing employee records with updated information.
- **Delete Employee:** Remove employee records after confirmation.
- **Real-time Filtering:** Filter the employee list based on a search query across multiple fields.
- **Confirmation Dialog:** Ensure data integrity with confirmation prompts before deleting records.
- **Asynchronous Data Fetching:** Fetch employee and country data from APIs using Redux Thunks.
- **State Management:** Utilize Redux for efficient state management across the application.
- **Country Selection:** Integrated country dropdown component for easy selection.

## 🛠️ Tech Stack

- **Frontend:**
    - React
    - Redux
    - Redux Toolkit
    - React-Redux
    - Axios
    - Vite
- **Build Tool:**
    - Vite
- **Styling:**
    - CSS (with `index.css` for global styles)

## 📦 Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1.  Clone the repository:

    ```bash
    git clone <repository-url>
    cd employee-management-app
    ```

2.  Install dependencies:

    ```bash
    npm install # or yarn install
    ```

### Running Locally

1.  Start the development server:

    ```bash
    npm run dev # or yarn dev
    ```

2.  Open your browser and navigate to `http://localhost:5173` (or the port Vite assigns).

## 📂 Project Structure

```
employee-management-app/
├── src/
│   ├── app/
│   │   ├── store.js          # Redux store configuration
│   ├── components/
│   │   ├── EmployeeForm.jsx  # Form for creating/updating employees
│   │   ├── ConfirmDialog.jsx # Reusable confirmation dialog component
│   ├── features/
│   │   ├── countries/
│   │   │   ├── CountryDropdown.jsx # Country dropdown component
│   │   │   ├── countriesSlice.js   # Redux slice for countries
│   │   ├── employees/
│   │   │   ├── EmployeesList.jsx # Employee list component
│   │   │   ├── employeesSlice.js   # Redux slice for employees
│   ├── App.jsx             # Main application component
│   ├── main.jsx            # Entry point for the React application
│   ├── index.css           # Global CSS styles
├── vite.config.js        # Vite configuration file
├── package.json          # Project dependencies and scripts
├── README.md             # Project documentation
```

## 📸 Screenshots

(Add screenshots of the application here to showcase its features and UI)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with clear, concise messages.
4.  Push your changes to your fork.
5.  Submit a pull request to the main repository.

## 📝 License

This project is licensed under the [MIT License](LICENSE).

## 📬 Contact

If you have any questions or suggestions, feel free to contact me at [your-email@example.com](mailto:your-email@example.com).

## 💖 Thanks

Thank you for checking out this project! I hope it's helpful and that you find it interesting.

