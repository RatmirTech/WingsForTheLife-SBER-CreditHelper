package com.nuzhd.underwriterservice.repo;

import com.nuzhd.underwriterservice.model.CreditApplication;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CreditApplicationRepository extends JpaRepository<CreditApplication, Long> {
}
