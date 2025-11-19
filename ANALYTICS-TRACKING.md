# 📊 Analytics & Data Tracking Documentation

## Overview
This document describes all data captured by Baker & Davis website analytics system.

---

## 🍪 Cookie Storage

### Local Storage Data
- **Key**: `cookieConsent`
- **Data Structure**:
```json
{
  "status": "accepted|declined|essential",
  "timestamp": "2025-11-19T10:30:00.000Z",
  "analytics": true|false,
  "functional": true|false
}
```

---

## 📈 Google Analytics GA4 Data Collection

### Automatic Data (When Cookies Accepted)

#### 1. **Session & Page Data**
- Page URL
- Page title
- Page path
- Referrer URL
- Previous page path
- Time on page
- Scroll depth
- Exit pages

#### 2. **Device Information**
- Device type (Desktop/Mobile/Tablet)
- Operating system (Windows/Mac/Android/iOS)
- OS version
- Browser (Chrome/Safari/Firefox/Edge)
- Browser version
- Screen resolution
- Viewport size
- Device brand/model (mobile)

#### 3. **Geographic Data**
- Country
- Region/State
- City
- Timezone
- Language

#### 4. **User Demographics** (Google estimation)
- Age range
- Gender
- Interests

#### 5. **Traffic Source**
- Campaign source
- Campaign medium
- Campaign name
- Referral domain
- Search keywords (if available)

#### 6. **Technical Data**
- IP address (full - NOT anonymized currently)
- User agent string
- Network provider
- Connection speed

---

## 🎯 Custom Event Tracking

### 1. **Cookie Consent Events**
```javascript
Event: cookie_consent
Parameters:
- action: "accepted" | "declined" | "essential"
```

### 2. **Page View Events**
```javascript
Event: page_view
Parameters:
- page_path: "/about"
- page_title: "About Us - Baker & Davis"
```

### 3. **Button Click Events**
```javascript
Event: button_click
Parameters:
- button_name: "Download Brochure"
- location: "homepage_hero"
```

### 4. **Form Submission Events**
```javascript
Event: form_submit
Parameters:
- form_name: "contact_form"
```

### 5. **Contact Form Data** ⚠️ PII CAPTURED
```javascript
Event: contact_form_submission
Parameters:
- user_name: "John Doe"
- user_email: "john@example.com"
- user_phone: "+91 98765 43210"
- inquiry_subject: "Product Inquiry"
- message_length: 150
- form_location: "contact_page"
- timestamp: "2025-11-19T10:30:00.000Z"
```

### 6. **User Identification** ⚠️ PII CAPTURED
```javascript
Function: identifyUser()
Sets User Properties:
- email: "user@example.com"
- name: "John Doe"
- phone: "+91 98765 43210"
- company: "Acme Corp"
```

### 7. **External Link Clicks**
```javascript
Event: external_link_click
Parameters:
- link_url: "https://example.com"
- link_text: "View Partner Site"
```

### 8. **Search Tracking**
```javascript
Event: search
Parameters:
- search_term: "pharmaceutical products"
- results_count: 25
```

### 9. **File Actions**
```javascript
Event: file_action
Parameters:
- action: "download" | "upload"
- file_name: "brochure.pdf"
- file_type: "pdf"
- timestamp: "2025-11-19T10:30:00.000Z"
```

### 10. **Error Tracking**
```javascript
Event: error_occurred
Parameters:
- error_message: "404 Not Found"
- error_type: "navigation_error"
- page_path: "/products/missing"
```

### 11. **Chat Interactions**
```javascript
Event: chat_interaction
Parameters:
- message_type: "user_message"
- user_message: "First 100 characters of message..."
- timestamp: "2025-11-19T10:30:00.000Z"
```

---

## 🔐 Personal Identifiable Information (PII) Captured

### ✅ CURRENTLY CAPTURED (When Forms Submitted):

1. **Full Names** - Contact form submissions
2. **Email Addresses** - Contact form, user identification
3. **Phone Numbers** - Contact form, user identification
4. **Company Names** - User identification
5. **Inquiry Messages** - Contact form (message content)
6. **IP Addresses** - Full IP (NOT anonymized)
7. **Location** - City-level geographic data
8. **Device IDs** - Browser fingerprinting data

### Usage Examples:

**Contact Form Submission:**
```javascript
// When user submits contact form
trackEvent('contact_form_submission', {
  user_name: "John Doe",              // ✅ PII
  user_email: "john@example.com",     // ✅ PII
  user_phone: "+91 98765 43210",      // ✅ PII
  inquiry_subject: "Product Inquiry",
  message_length: 150
});
```

**User Properties Set:**
```javascript
gtag('set', 'user_properties', {
  contact_name: "John Doe",     // ✅ PII - Stored with user profile
  contact_email: "john@..."     // ✅ PII - Stored with user profile
});
```

---

## 🚫 Data NOT Currently Captured

❌ Credit card information
❌ Passwords
❌ Social security numbers
❌ Bank account details
❌ Medical records
❌ Biometric data
❌ Government ID numbers

---

## 📱 Firebase Analytics

Same data as Google Analytics GA4, additionally:
- App instance ID
- Firebase user ID
- Session ID
- Engagement metrics

---

## 🔒 Privacy & Consent

### Consent Modes:
1. **Accept All Cookies** - Full tracking enabled
2. **Essential Only** - No analytics tracking
3. **Decline All** - No tracking

### Data Retention:
- Google Analytics: 14 months (default)
- Firebase: Indefinite (until manual deletion)
- Local Storage: Until user clears browser data

---

## ⚠️ Privacy Recommendations

### Current Status:
- ❌ IP Anonymization: **DISABLED** (Full IPs captured)
- ✅ Cookie Consent: **ENABLED**
- ✅ GDPR Banner: **IMPLEMENTED**
- ⚠️ PII Tracking: **ENABLED** (Forms capture names, emails, phones)

### To Enhance Privacy:

1. **Enable IP Anonymization** (index.html):
```javascript
gtag('config', 'G-3N7Z5Q7H2Q', {
  'anonymize_ip': true  // Change to true
});
```

2. **Reduce PII Storage Duration**:
- Set GA4 data retention to 2 months
- Implement automatic data deletion

3. **Add Data Processing Agreement**:
- Update Privacy Policy
- Add GDPR compliance documentation

4. **Hash Sensitive Data**:
```javascript
// Instead of sending raw email
const hashedEmail = await sha256(email);
trackEvent('form_submit', { user_hash: hashedEmail });
```

---

## 🛠️ Implementation Files

- **Analytics Library**: `src/lib/analytics.ts`
- **Cookie Consent**: `src/components/CookieConsent.tsx`
- **Contact Form**: `src/pages/Contact.tsx`
- **Google Analytics**: `index.html`
- **Firebase Config**: `src/lib/firebase.ts`

---

## 📞 Data Subject Rights

Users can request:
- Data access (what data you have)
- Data deletion (GDPR "right to be forgotten")
- Data portability (export their data)
- Opt-out (disable tracking)

Contact: admin@bdindia.in

---

**Last Updated**: November 19, 2025
**Document Version**: 1.0
