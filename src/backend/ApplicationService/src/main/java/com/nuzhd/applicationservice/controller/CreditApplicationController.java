package com.nuzhd.applicationservice.controller;

import com.nuzhd.applicationservice.model.CreditApplication;
import com.nuzhd.applicationservice.service.ApplicationService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/applications")
public class CreditApplicationController {

    private static final Logger log = LoggerFactory.getLogger(CreditApplicationController.class);

    private final ApplicationService applicationService;

    public CreditApplicationController(ApplicationService applicationService) {
        this.applicationService = applicationService;
    }

    @PostMapping("/apply")
    public ResponseEntity<String> placeApplicationInQueue(@RequestBody CreditApplication creditApplication) {
        applicationService.pushCreditApplication(creditApplication);
        return ResponseEntity.ok("Message sent");
    }
}
