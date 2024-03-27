# AJAX Chat App

This is a simple chat application built using AJAX (Asynchronous JavaScript and XML) for real-time messaging. Users can input their username and upload a profile picture to start chatting. The application allows users to send and receive messages in real-time without refreshing the page.

## **Features**

- **User Authentication**: Users can input their username and upload a profile picture to authenticate themselves.
- **Real-time Messaging**: Messages are sent and received in real-time without the need to refresh the page.
- **Profile Pictures**: Users can upload their profile pictures, which are displayed alongside their messages.
- **Responsive Design**: The application is designed to be responsive and can adapt to different screen sizes.

## **Technologies Used**

- **HTML/CSS**: Used for the structure and styling of the web pages.
- **JavaScript**: Utilized for client-side scripting, handling AJAX requests, and updating the chat interface dynamically.
- **PHP**: Used for server-side scripting to handle form submissions, file uploads, and session management.
- **AJAX**: Employed for asynchronous communication with the server to fetch and send chat messages without page reloads.

## **Setup Instructions**

1. **Clone** the repository to your local machine.
2. Set up a local **web server environment** (e.g., XAMPP, WAMP, or MAMP).
3. **Copy** the project files to the document root of your local server.
4. **Start** the local server and navigate to the project directory using your web browser.
5. You should see the login page (`index.php`). Enter your username and upload a profile picture to log in.
6. Once logged in, you'll be redirected to the chat page (`chat.php`), where you can start sending and receiving messages in real-time.

## **File Structure**

- `index.php`: The login page where users input their username and upload a profile picture.
- `chat.php`: The main chat application page where users can send and receive messages.
- `logout.php`: PHP script to handle user logout and session destruction.
- `chat.txt`: Text file used to store the chat messages.
- `navbar.php`: Partial PHP file for the navigation bar.
- `footer.php`: Partial PHP file for the footer.
- `chat.js`: JavaScript file for client-side functionality, including AJAX requests and DOM manipulation.

## **Note**

- Ensure that the PHP server environment is properly configured to handle file uploads and sessions.
- This application is for educational purposes and may require additional security measures before deployment to a production environment.

Feel free to explore and customize the application according to your needs! If you have any questions or encounter any issues, please don't hesitate to reach out.
