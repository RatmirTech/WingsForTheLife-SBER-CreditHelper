package com.nuzhd.underwriterservice.controller;

import com.nuzhd.underwriterservice.model.CreditApplication;
import com.nuzhd.underwriterservice.service.CreditApplicationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CreditApplicationController {

    private final CreditApplicationService creditApplicationService;

    public CreditApplicationController(CreditApplicationService creditApplicationService) {
        this.creditApplicationService = creditApplicationService;
    }

    @GetMapping
    public ResponseEntity<List<CreditApplication>> findAll() {
        return ResponseEntity.ok(creditApplicationService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<CreditApplication> findById(@PathVariable("id") Long appId) {
        return ResponseEntity.ok(creditApplicationService.findById(appId));
    }
}
