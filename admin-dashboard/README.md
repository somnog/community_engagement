Getting Started

1. Install Dependencies

First, you need to install all necessary dependencies. Run the following command:

npm install

2. Build the Application

To prepare the application for production, you need to build it. Run:

npm run build

The build files will be located in the dist directory.

3. Configure Environment Variables

To set up environment variables for the project, create a .env file in the root directory and add the following line:

VITE_APP_API=<your_api_url>

Replace <your_api_url> with the actual API URL you want to use in your application.

4. Start the Development Server

To run the development server and start working on the project, use:
npm run dev