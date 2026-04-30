package com.example.api.service;

import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ApiService {

    private final JdbcTemplate jdbcTemplate;

    public String getDateTime() {
        String sql = "SELECT NOW()::text as now";
        return jdbcTemplate.queryForObject(sql, String.class);
    }

}
