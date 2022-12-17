# My imagem might be outdated
# Last update was 07/12/2022
FROM danielsrod/bun

# Set the Docker working directory as /usr/src/app
# Copy everything from here into Docker's /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app

# Install the dependencies
RUN bun install --backend=copyfile
# At this moment, only bun install is scufed, so use this flag and will be fine

# The port that application will listen
# Need to match the same port in src/index.ts:4
EXPOSE 3000

# Run the project
CMD bun run src/index.ts
