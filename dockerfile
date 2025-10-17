FROM openjdk:17-jdk-slim

WORKDIR /app

COPY pom.xml .
COPY src ./src

RUN apt-get update && apt-get install -y maven && mvn clean package -DskipTests

EXPOSE 8080

CMD ["java", "-jar", "target/tech-hub-chatbot-1.0.0.jar"]