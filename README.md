**To-Do App**

This project is a simple to-do web application that allows users to add tasks, mark them as completed, and manage their tasks efficiently. Users can enter the title and description of tasks, which are then displayed in separate lists for pending and completed tasks. The application utilizes local storage to persist tasks even after the page is refreshed or closed.

### How to Use the To-Do App

Follow these steps to use the to-do web application:

1. **Clone the Repository**: 
   Clone this repository to your local machine using the following command:
   ```
   git clone <repository-url>
   ```

2. **Navigate to the Project Directory**:
   Open your terminal or command prompt and navigate to the directory where you cloned the repository.

3. **Install Dependencies**:
   This project doesn't have any external dependencies, so no installation is required.

4. **Run the Server**:
   Execute the following command to start the server:
   ```
   node server.js
   ```

5. **Open the Web App**:
   Once the server is running, open your web browser and go to `http://localhost:2000` to access the to-do web application.

6. **Adding Tasks**:
   - Enter the title and description of a task in the respective input fields.
   - Click the "Add Task" button to add the task to the pending tasks list.

7. **Completing Tasks**:
   - In the pending tasks list, click the "Complete" button next to a task to mark it as completed.
   - The completed task will move to the completed tasks list.

8. **Deleting Tasks**:
   - In both the pending and completed tasks lists, click the delete button (cross symbol) next to a task to delete it.

### Project Structure

- **`to-do_page.html`**: HTML file containing the structure and content of the to-do web application.
- **`to-do_style.css`**: CSS file for styling the to-do web application.
- **`app.js`**: JavaScript file containing the logic for adding, completing, and deleting tasks, as well as managing tasks in local storage.
- **`server.js`**: Node.js server file to serve the static files and handle routing.

### Technologies Used

- HTML
- CSS
- JavaScript
- Node.js
- Express.js

Feel free to explore and utilize this to-do web application for managing your tasks efficiently. If you have any questions or suggestions, please don't hesitate to reach out.

**Footer**:  
Kgaogelo Mashaba&copy; A [To-Do App](https://github.com/your-username/to-do-app) Project
