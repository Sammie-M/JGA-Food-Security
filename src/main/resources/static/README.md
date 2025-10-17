
# Tech Hub AI — Java Spring Boot Chatbot

This project gives you a **Spring Boot backend** and a **simple frontend** chatbot always visible in the bottom-right.

## 1) Requirements
- Java 17+
- Maven
- OpenAI API key

## 2) Setup
```bash
cd tech-hub-chatbot-java
cp src/main/resources/application.properties src/main/resources/application-local.properties
# Edit and put your OpenAI API key
mvn spring-boot:run
```

Then open: http://localhost:8080

## 3) Files
- `src/main/java/com/example/chatbot/Application.java` — Spring Boot main app
- `src/main/java/com/example/chatbot/ChatController.java` — REST endpoint `/api/chat`
- `src/main/resources/static/` — frontend (index.html, style.css, app.js)

## 4) Deploy
For production, build with:
```bash
mvn clean package
java -jar target/tech-hub-chatbot-1.0.0.jar
```

Then serve at your domain and the chat will work!
