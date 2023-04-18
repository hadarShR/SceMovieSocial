# Use the official Node.js runtime as the base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and yarn.lock files to the container
COPY package.json yarn.lock ./

# Install the app dependencies
RUN yarn install

# Copy the rest of the app code to the container
COPY . .

# Build the React app
RUN yarn build

# Serve the app using the nginx web server
FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
