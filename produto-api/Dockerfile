FROM gradle:8.3.0-jdk17
COPY --chown=gradle:gradle . .
WORKDIR .
RUN gradle build -x test --no-daemon
EXPOSE 8081
CMD ["gradle", "bootrun"]

