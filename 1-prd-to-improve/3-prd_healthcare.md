# Product Requirements Document
## Healthcare Platform — Patient Portal

**Version:** 1.4  
**Author:** Product Team  
**Last Updated:** April 25, 2026  
**Status:** In Review — Pending Clinical Stakeholder Sign-Off

---

## 1. Overview

This document describes the requirements for the patient-facing portal of our healthcare platform. The portal enables patients to access their health information, communicate with their care team, schedule appointments, manage prescriptions, and view billing information.

The portal is intended for adult patients and their authorized representatives (e.g., parents managing accounts for minor children). It must be designed with the sensitivity of health information in mind and must comply with applicable healthcare privacy regulations. The portal will be accessible via web browser and mobile app.

---

## 2. Features

### 2.1 Patient Authentication

**Description:**  
Patients must be able to log in securely. Given the nature of the data, authentication must be robust without creating friction that prevents patients from accessing their care information.

**Acceptance Criteria:**

- Patients log in with their registered email address and password.
- Passwords must meet a sufficient complexity standard.
- MFA is strongly recommended and available to all patients; whether it is mandatory for all account types is subject to final review.
- After a number of failed login attempts, the account is locked. The patient can unlock their account via email or by contacting the support line.
- A patient who has not logged in for an extended period is prompted to verify their identity before accessing records.
- Patients can reset their password via a link sent to their registered email. The reset link should expire in a timely manner.
- The portal must support integration with the organization's existing identity provider for single sign-on where applicable.

---

### 2.2 Health Records & Summary

**Description:**  
Patients can view a summary of their medical information including diagnoses, medications, allergies, immunization history, and recent lab results.

**Acceptance Criteria:**

- The health summary page displays: active diagnoses, current medications, known allergies, recent immunizations, and recent lab/test results.
- Lab results include the test name, result value, reference range, and the ordering provider's name.
- Results marked as abnormal are highlighted in a clearly distinguishable way.
- Patients cannot edit clinical records directly. They may submit a request to correct information through a messaging feature.
- Historical records are accessible going back as far as available data allows.
- If a provider has marked a result as requiring clinical context before viewing, the patient sees a note to contact their care team rather than the raw result.
- Records can be downloaded in a standard format. The specific supported formats are to be confirmed with the clinical team.

---

### 2.3 Appointment Scheduling

**Description:**  
Patients can request and manage appointments with their care providers directly through the portal.

**Acceptance Criteria:**

- Patients can view available appointment slots for their assigned primary care provider.
- Patients can select a preferred appointment type (in-person, telehealth, follow-up, etc.) when booking.
- Appointment availability updates in real time to prevent double-booking.
- Patients receive a confirmation notification after successfully booking an appointment. The notification channel (email, SMS, push) is based on the patient's communication preferences.
- Patients can cancel or reschedule an appointment within a certain window before the scheduled time. The exact cancellation policy will be defined by the clinic.
- A reminder is sent to the patient before their appointment. The number of reminders and the timing should align with what the care team considers appropriate.
- Patients can view upcoming and past appointments in the portal.

---

### 2.4 Secure Messaging

**Description:**  
Patients can communicate with their care team through a secure internal messaging system. This is not intended to replace emergency communications.

**Acceptance Criteria:**

- Patients can compose and send messages to members of their care team.
- Messages are delivered to the appropriate care team inbox based on the message type (clinical question, prescription request, administrative inquiry).
- The care team can reply to messages, and the patient is notified when a response is available.
- Message response times are not guaranteed through this channel. A disclaimer is presented to the patient when composing messages.
- Patients should not be able to send attachments that could pose a security risk. The list of allowed file types is to be finalized.
- Message history is retained for a period consistent with medical record retention requirements.
- Messages containing urgent clinical language are flagged for priority review by the care team. The triggering criteria for these flags will be specified by the clinical team.

---

### 2.5 Prescription Management

**Description:**  
Patients can view their current prescriptions and submit refill requests through the portal.

**Acceptance Criteria:**

- The prescriptions view lists all active prescriptions with: medication name, dosage, prescribing provider, and pharmacy on file.
- Patients can request a refill for eligible prescriptions. A prescription is eligible for refill if a reasonable number of refills remain and a sufficient number of days' supply has been consumed.
- Refill requests are routed to the prescribing provider for review and approval.
- The patient is notified when the refill request has been approved or denied, with a brief reason in the case of denial.
- Patients can update their preferred pharmacy from the prescriptions or settings screen.
- Controlled substances are visible in the medication list but the refill request option is not available for them.

---

### 2.6 Billing & Payments

**Description:**  
Patients can review outstanding balances and make payments through the portal.

**Acceptance Criteria:**

- Patients can view a list of outstanding statements with date of service, description, amount billed, insurance adjustment, and patient responsibility.
- Payments can be made by credit card, debit card, or HSA/FSA card.
- Patients can set up a payment plan for larger balances. The terms of available payment plans will be defined by the billing department.
- A payment confirmation is displayed after each successful transaction and a receipt is sent by email.
- Patients can view their payment history for previous statements.
- The system must not store full card numbers after transaction completion.

---

## 3. Non-Functional Requirements

### 3.1 Privacy & Compliance

- The platform must comply with HIPAA and any applicable state-level health privacy laws.
- Access to patient health records must be logged with user identity, timestamp, and the records accessed.
- PHI must be encrypted in transit and at rest.
- Third-party integrations must be covered by a Business Associate Agreement.

### 3.2 Performance

- Health record pages must load quickly enough that patients do not perceive a delay in accessing their information.
- The appointment scheduling system must handle concurrent booking requests without surfacing false availability.

### 3.3 Accessibility

- The portal must conform to WCAG 2.1 Level AA.
- The mobile app must support native accessibility features on iOS and Android.
- Patient-facing content must be written at an appropriate reading level.

### 3.4 Availability

- The portal must maintain high availability. Planned maintenance must be scheduled during low-usage hours and communicated to patients in advance.
- Critical features (health records, appointment scheduling) should degrade gracefully if non-essential services are unavailable.

### 3.5 Device & Browser Support

- The web portal must function on all commonly used modern browsers.
- The mobile app will support recent versions of iOS and Android. The exact minimum supported OS versions will be determined by the engineering team.

---

## 4. Out of Scope

- Provider-facing EHR workflows
- Insurance claims submission
- Emergency care coordination
- Telehealth video session infrastructure (handled by a separate service)
