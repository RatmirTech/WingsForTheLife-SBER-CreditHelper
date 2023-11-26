package com.nuzhd.underwriterservice.service;

import com.nuzhd.underwriterservice.model.CreditApplication;
import com.nuzhd.underwriterservice.repo.CreditApplicationRepository;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class CreditApplicationService {
    private final CreditApplicationRepository creditApplicationRepository;

    public CreditApplicationService(CreditApplicationRepository creditApplicationRepository) {
        this.creditApplicationRepository = creditApplicationRepository;
    }

    public List<CreditApplication> findAll() {
        return creditApplicationRepository.findAll();
    }

    public CreditApplication findById(Long id) {
        return creditApplicationRepository.findById(id).orElse(null);
    }

    public CreditApplication save(CreditApplication creditApplication) {
        return creditApplicationRepository.save(creditApplication);
    }
}
