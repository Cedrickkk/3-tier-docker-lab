package com.example.api.controller;

import com.example.api.service.ApiService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

@RestController
@RequestMapping("/api/v1/java")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class ApiController {

    private final ApiService apiService;

    @GetMapping
    public ResponseEntity<HashMap<String, Object>> getDateTime() {
        return ResponseEntity.ok(new HashMap<>() {{
            put("now", apiService.getDateTime());
            put("api", "java");
        }});
    }

}
