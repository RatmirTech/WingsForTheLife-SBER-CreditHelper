package com.example.userinfoservice.models;

import lombok.Data;

import java.math.BigDecimal;
import java.util.Date;

@Data
public class CreditApplication {
    String fullName;
    Date birthDate;
    String passportNumber;
    String passportSeries;
    String registrationAddress;
    String residentialAddress;
    MaritalStatus maritalStatus;
    Boolean hasChildren;
    String workPlace;
    Integer workExperienceMonths;
    String jobTitle;
    BigDecimal monthlyIncome;
    String incomeConfirmingDocumentType;
    String incomeConfirmingDocumentPath;
    BigDecimal monthlyAdditionalIncome;
    Boolean isAdditionalIncomeConfirmed;
    String additionalIncomeConfirmingDocumentPath;
    String additionalIncomeSource;
    Boolean hasBankSavings;
    String bankSavingsCategory;
    Integer bankSavingsAmount;

    BKIReport bkiReport;
}
