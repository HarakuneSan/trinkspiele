FROM node:20.5.1

# Copy package.json and package-lock.json
COPY package*.json ./

# Install npm production packages 
RUN npm install

COPY . ./app

ENV NODE_ENV production
ENV PORT 3000

EXPOSE 3000

CMD ["npm", "start"]