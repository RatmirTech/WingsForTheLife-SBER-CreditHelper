package com.example.userinfoservice.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class BKIReport {
    private int scorball;
    private String obligationType;
    private Date openDate;
    private Date closeDate;
    private Date factCloseDate;
    private String role;
    private String state;
    private String amount;
    private String percent;
    private String remains;
    private String delay;
    private String delayAmount;
    private Date requestDate;
    public boolean isExpired(){
        return requestDate.getTime() - new Date().getTime() < 14*24*60*60*1000;
    }
}
