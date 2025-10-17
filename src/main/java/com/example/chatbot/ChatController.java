package com.example.chatbot;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.MediaType;

import java.io.IOException;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class ChatController {

    @Value("${openai.api.key}")
    private String apiKey;

    private final OkHttpClient client = new OkHttpClient();

    @PostMapping("/chat")
    public Map<String, String> chat(@RequestBody Map<String, String> body) throws IOException {
        String userMessage = body.get("message");

        JSONObject payload = new JSONObject();
        payload.put("model", "gpt-4o-mini");
        payload.put("input", userMessage);
        payload.put("instructions", "You are Tech Hub AI, a friendly assistant about gardening and sustainability.");

        // Use fully qualified class name for OkHttp's RequestBody to avoid ambiguity
        okhttp3.RequestBody requestBody = okhttp3.RequestBody.create(
                payload.toString(),
                MediaType.get("application/json; charset=utf-8")
        );

        Request request = new Request.Builder()
                .url("https://api.openai.com/v1/responses")
                .header("Authorization", "Bearer " + apiKey)
                .post(requestBody)
                .build();

        try (Response response = client.newCall(request).execute()) {
            if (!response.isSuccessful()) {
                return Map.of("message", "Error: " + response.message());
            }

            JSONObject json = new JSONObject(response.body().string());

            String reply = "Sorry, I could not generate a response.";
            if (json.has("output")) {
                var output = json.getJSONArray("output");
                if (output.length() > 0) {
                    var content = output.getJSONObject(0).getJSONArray("content");
                    if (content.length() > 0) {
                        reply = content.getJSONObject(0).optString("text", reply);
                    }
                }
            }

            return Map.of("message", reply);

        }
    }
}
