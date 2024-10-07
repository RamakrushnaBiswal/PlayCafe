# Dockerfile for the backend
FROM node:22

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the port your app runs on (Change this if needed)
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
