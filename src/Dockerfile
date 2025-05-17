FROM node:14

WORKDIR /app

COPY package.json .

ARG NODE_ENV=development

RUN if ["$NODE_ENV" = "production" ]; then \
        npm install --only=production; \
    else \
        npm install; \
    fi
#RUN npm install

COPY . .

EXPOSE 4000

CMD ["npm", "run", "dev"]



# # Stage 1: Build Stage (for development and building app)
# FROM node:16 AS build

# # Set the working directory in the build container
# WORKDIR /app

# # Copy the package.json and package-lock.json first to install dependencies
# COPY package.json ./

# # Install the app dependencies
# RUN npm install

# # Copy the rest of the application files
# COPY . .

# # Run build or any other command necessary to prepare the application
# RUN npm run build

# # Stage 2: Production Stage
# FROM node:16-slim

# # Set the working directory in the production container
# WORKDIR /app

# # Copy only the necessary files from the build stage (such as built assets and package files)
# COPY --from=build /app/dist /app/dist
# COPY --from=build /app/package.json /app/package-lock.json /app/

# # Install production dependencies only (no dev dependencies)
# RUN npm install --production

# # Expose the port the app runs on
# EXPOSE 4000

# # Command to start the app
# CMD ["node", "dist/index.js"]
