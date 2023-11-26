package com.nuzhd.applicationservice.service;

import com.nuzhd.applicationservice.config.RabbitConfig;
import com.nuzhd.applicationservice.model.CreditApplication;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.stereotype.Component;

@Component
public class ApplicationService {

    private final RabbitTemplate rabbitTemplate;

    public ApplicationService(RabbitTemplate rabbitTemplate) {
        this.rabbitTemplate = rabbitTemplate;
    }

    public void pushCreditApplication(CreditApplication creditApplication) {
        rabbitTemplate.convertAndSend(RabbitConfig.queueName, creditApplication);
    }
}
