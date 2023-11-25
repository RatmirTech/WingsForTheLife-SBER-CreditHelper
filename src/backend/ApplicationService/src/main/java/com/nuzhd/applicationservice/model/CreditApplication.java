package com.nuzhd.applicationservice.model;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateDeserializer;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateTimeDeserializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateSerializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateTimeSerializer;
import lombok.Data;

import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDate;

@Data
public class CreditApplication implements Serializable {

    String fullName;
    @JsonDeserialize(using = LocalDateDeserializer.class)
    @JsonSerialize(using = LocalDateSerializer.class)
    LocalDate birthDate;
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
}
