# nodejs image
FROM node:22-alpine

# container dir
WORKDIR /app

# copying packages
COPY package*.json ./

# install dependecies (from json packages)
RUN npm install

# copy app code
COPY . .

# open port that Node.js listening
EXPOSE 8000 

# start app
CMD [ "npm", "start" ] 