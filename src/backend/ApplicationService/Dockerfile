FROM openjdk:17

WORKDIR /application-service

COPY /src ./src
COPY /.mvn ./.mvn
COPY /mvnw ./
COPY /pom.xml ./
RUN ./mvnw clean install

CMD ["java","-jar","target/ApplicationService-0.0.1-SNAPSHOT.jar"]