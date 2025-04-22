# Stage 1: Compile and Build Angular codebase
FROM node:latest as builder
# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
# COPY package*.json ./

# Copy the rest of the application files to the container
COPY . .

# Install dependencies
RUN npm install
RUN npm run build --prod

# # Set the container command
# CMD [ "npm", "start" ]

# Stage 2: Serve app with Nginx server
FROM nginx:latest
COPY --from=build /usr/local/app/dist/frontend /usr/share/nginx/html
# EXPOSE 80

