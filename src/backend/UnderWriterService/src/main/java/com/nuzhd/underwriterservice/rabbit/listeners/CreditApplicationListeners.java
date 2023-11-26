package com.nuzhd.underwriterservice.rabbit.listeners;

import com.nuzhd.underwriterservice.model.CreditApplication;
import com.nuzhd.underwriterservice.service.CreditApplicationService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Component;

@Component
public class CreditApplicationListeners {

    private final Logger log = LoggerFactory.getLogger(CreditApplicationListeners.class);

    private final CreditApplicationService creditApplicationService;

    public CreditApplicationListeners(CreditApplicationService creditApplicationService) {
        this.creditApplicationService = creditApplicationService;
    }

    @RabbitListener(queues = "credit-applications")
    public void receiveApplication(CreditApplication creditApplication) {
        creditApplicationService.save(creditApplication);
        log.info("> Persisted in the DB: " + creditApplication);
    }

}
