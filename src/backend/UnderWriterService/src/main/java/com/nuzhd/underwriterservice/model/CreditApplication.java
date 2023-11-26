package com.nuzhd.underwriterservice.model;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateDeserializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateSerializer;
import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@Entity
public class CreditApplication implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long id;
    @Enumerated(value = EnumType.STRING)
    ApplicationStatus status;
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
