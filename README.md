# MERN TEMPLATE WITH AUTH0

MongoDB, Express, React, and Node.JS (MERN) Template with Auth0 React SDK for User Authentication.

## How to Use the Template

To start using this template, click on the green "Use this template" button on the GitHub repository. Afterwards, set up your new repository by giving it a name, description and type (Public or Private).

Once you have created your repository, there are a couple of things that you will have to change before you can start using it:

1. Edit the **~/package.json** file to match your project. You can change the following fields:
   - name
   - description
   - repository.url
   - author
   - license (optional)
   - bugs.url
   - homepage
2. Edit line 30 on **~/server.js** file to match your database name.
   - Change the your-database part in mongodb://localhost/your-database to match your own database name
3. Edit line 9 on **~/scripts/seedDB.js** to match the same database name that you used for step 2.
4. Add your own credentials to the **~/client/src/auth_config.json** file.
   - Replace "YOUR_DOMAIN" on line 2 with your Auth0 app domain
   - Replace "YOUR_CLIENT_ID" on line 3 with your Auth0 app client ID

After completing the steps above, the Template starts to work as intended and can be expanded.
