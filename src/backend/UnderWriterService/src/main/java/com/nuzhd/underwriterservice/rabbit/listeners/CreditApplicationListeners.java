package com.nuzhd.underwriterservice.rabbit.listeners;

import com.nuzhd.underwriterservice.model.CreditApplication;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Component;

@Component
public class CreditApplicationListeners {

    private final Logger log = LoggerFactory.getLogger(CreditApplicationListeners.class);

    @RabbitListener(queues = "credit-applications")
    public void receiveApplication(CreditApplication creditApplication) {
        log.info("> Received " + creditApplication);
    }

}
