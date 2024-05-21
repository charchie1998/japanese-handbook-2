

# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json into the directory /app in the container
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Bundle the app source inside the Docker image 
# (Make sure you have a .dockerignore file to avoid copying node_modules)
COPY . .

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Define the command to run the app using CMD which defines your runtime
# Here we use "node", followed by the name of the file, 
# which will run "node app.js" when the Docker image is run
CMD [ "node", "app.js" ]