package com.example.userinfoservice.services;

import com.example.userinfoservice.models.BKIReport;
import org.springframework.stereotype.Service;

import java.util.Date;

//Получает отчет БКИ, запрошивает новый
//Заглушка
@Service
public class CheckBKIReport {

    public BKIReport getReport(BKIReport bkiReport){
        bkiReport.setRequestDate(new Date());
        return bkiReport;
    }
}
