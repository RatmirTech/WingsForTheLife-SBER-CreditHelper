package com.nuzhd.applicationservice.controller;

import com.nuzhd.applicationservice.model.CreditApplication;
import com.nuzhd.applicationservice.service.RabbitService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/credit")
public class CreditApplicationController {

    private final RabbitService rabbitService;

    public CreditApplicationController(RabbitService rabbitService) {
        this.rabbitService = rabbitService;
    }

    @PostMapping("/apply")
    public ResponseEntity<String> placeApplicationInQueue(@RequestBody CreditApplication creditApplication) {
        System.out.println(creditApplication);
        rabbitService.pushCreditApplication(creditApplication);
        return ResponseEntity.ok("Message sent");
    }
}
