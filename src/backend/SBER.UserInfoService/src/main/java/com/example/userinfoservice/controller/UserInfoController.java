package com.example.userinfoservice.controller;

import com.example.userinfoservice.models.CreditApplication;
import com.example.userinfoservice.services.CheckBKIReport;
import com.example.userinfoservice.services.Sender;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/userInfo")
public class UserInfoController {
    private final CheckBKIReport checkBKIReport;
    private final Sender sender;

    @Autowired
    public UserInfoController(CheckBKIReport checkBKIReport, Sender sender) {
        this.checkBKIReport = checkBKIReport;
        this.sender = sender;
    }

    @PostMapping()
    public ResponseEntity<HttpStatus> getAdditionUserInfo(@RequestBody CreditApplication creditApplication) {
        System.out.println(creditApplication.getBkiReport().getAmount() + " " + creditApplication.getBkiReport().getRequestDate());
        if (creditApplication.getBkiReport().isExpired())
            creditApplication.setBkiReport(checkBKIReport.getReport(creditApplication.getBkiReport()));
        else
            sender.send(creditApplication); //просит пользователя дополнить
        System.out.println(creditApplication.getBkiReport().getAmount() + " " + creditApplication.getBkiReport().getRequestDate());
        return ResponseEntity.ok(HttpStatus.OK);
    }
}
