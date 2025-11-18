# Use the official Node.js Alpine image
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy the build directory to the working directory
COPY build ./build/

# Install a lightweight server (e.g., serve)
RUN npm install -g serve

# Expose port 3000
EXPOSE 3000

# Start the server
CMD ["serve", "-s", "build"]
