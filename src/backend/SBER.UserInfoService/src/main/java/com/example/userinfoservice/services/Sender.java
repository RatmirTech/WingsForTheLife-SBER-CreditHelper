package com.example.userinfoservice.services;

import com.example.userinfoservice.models.CreditApplication;
import org.springframework.http.HttpEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class Sender {
    public void send(CreditApplication creditApplication) {
        RestTemplate restTemplate = new RestTemplate();
        String url = "http://localhost:8080/api/v1/credit/apply";
        HttpEntity<CreditApplication> request = new HttpEntity<>(creditApplication);
        restTemplate.postForObject(url, request, String.class);
    }
}
