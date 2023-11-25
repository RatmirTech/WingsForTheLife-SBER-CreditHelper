FROM openjdk:17

WORKDIR /underwriter-service

COPY src ./src
COPY .mvn ./.mvn
COPY mvnw pom.xml ./
RUN ./mvnw clean install

CMD ["java","-jar","target/UnderWriterService-0.0.1-SNAPSHOT.jar"]