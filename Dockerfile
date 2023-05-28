# Dockerfile

# Use Node.js as the parent image
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json ./

# Install dependencies
RUN yarn install

# Copy the rest of the code
COPY . ./

# Expose port 3000
EXPOSE 3000

# Start the app
CMD ["yarn", "start"]
