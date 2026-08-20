# D'E CHOSEN EVENTS CONSULTANTS LIMITED
## Complete Step-by-Step Customization & Hosting Guide

Welcome to the official codebase for **D'E CHOSEN EVENTS CONSULTANTS LIMITED** — an enterprise-grade website and operational showcase built with **React 19**, **TypeScript**, **Vite**, and **Tailwind CSS**.

---

## 📋 Table of Contents
1. [Physical Headquarters & Location](#-physical-headquarters--location)
2. [Step-by-Step Content Customization Guide](#-step-by-step-content-customization-guide)
   - [Step 1: Editing Basic Company Information](#step-1-editing-basic-company-information)
   - [Step 2: Customizing Logos (Main Logo, WhatsApp, Email)](#step-2-customizing-logos-main-logo-whatsapp-email)
   - [Step 3: Customizing WhatsApp & Email Contact Badges](#step-3-customizing-whatsapp--email-contact-badges)
   - [Step 4: Customizing Chef Peter's Full Biography Story](#step-4-customizing-chef-peters-full-biography-story)
   - [Step 5: Customizing Courses, Menus, Event Packages & SLAs](#step-5-customizing-courses-menus-event-packages--slas)
   - [Step 6: Customizing Photography & Gallery Showcase](#step-6-customizing-photography--gallery-showcase)
3. [Responsive Layout & Mobile Support](#-responsive-layout--mobile-support)
4. [Premium Enterprise Hosting & Deployment Guide](#-premium-enterprise-hosting--deployment-guide)
   - [Option 1: Vercel Pro / Enterprise](#option-1-vercel-pro--enterprise)
   - [Option 2: AWS (Amplify / CloudFront + S3)](#option-2-aws-amplify--cloudfront--s3)
   - [Option 3: Google Cloud Platform (Cloud Run / Cloud CDN)](#option-3-google-cloud-platform-cloud-run--cloud-cdn)
   - [Option 4: Netlify Pro / Enterprise](#option-4-netlify-pro--enterprise)
5. [Local Development & Build Scripts](#-local-development--build-scripts)

---

## 📍 Physical Headquarters & Location

- **Official Location**: **Mpala, Entebbe Road, Uganda**.
- **Strategic Accessibility**: Situated in Mpala along Entebbe Road, serving clients across Kampala, Entebbe International Airport corridor, and surrounding regions.
- **Global Track Record**: Founder & CEO Chef Yiga Edward Peter Kirigwajjo Zimwanguyizza Mulindwa (Chef Peter) brings extensive international executive culinary and event management experience from **Uganda, Dubai, Congo, and Somalia**.

---

## ✍️ Step-by-Step Content Customization Guide

All primary text, contact details, CEO biography chapters, course offerings, catering menus, cleaning SLAs, consultancy modules, and image paths are centralized in a single configuration file:

📁 **`/src/data/siteData.ts`**

---

### Step 1: Editing Basic Company Information
Open `/src/data/siteData.ts` and modify the `COMPANY_INFO` object:

```typescript
export const COMPANY_INFO = {
  name: "D'E CHOSEN EVENTS CONSULTANTS LIMITED",
  shortName: "D'E CHOSEN",
  slogan: "Chosen for excellence, trained to excel.",
  consultancySlogan: "Operate smarter, serve better and profit bigger.",
  tagline: "Integrated Hospitality, Culinary Education, Event Management & Operational Consultancy",
  
  // Custom Logo Path
  logoUrl: "/logo.svg", // Change to "/logo.png" or hosted URL
  
  // Contact Info
  phonePlaceholder: "+256 700 000 000 / +256 780 000 000",
  whatsappPlaceholder: "+256 700 000 000",                 // Must include country code
  emailPlaceholder: "info@dechosenevents.com",
  addressPlaceholder: "Mpala, Entebbe Road, Uganda",       // Physical location
  officeHours: "Monday - Saturday: 8:00 AM - 6:00 PM | Sunday: By Appointment",
  
  // Social Media Accounts
  socials: {
    facebook: "https://facebook.com/your-official-page",
    instagram: "https://instagram.com/your-handle",
    tiktok: "https://tiktok.com/@your-handle",
    linkedin: "https://linkedin.com/company/your-company",
    youtube: "https://youtube.com/@your-channel"
  }
};
```

---

### Step 2: Customizing Logos (Main Logo, WhatsApp, Email)

#### A. Main Company Logo:
1. Save your company logo file as `logo.png` or `logo.svg` (transparent background recommended).
2. Place the file inside the **`/public`** folder at the root of the project (`/public/logo.png`).
3. In `/src/data/siteData.ts`, set:
   ```typescript
   logoUrl: "/logo.png"
   ```
   *Note: If `logoUrl` is left empty `""`, the app automatically falls back to an elegant typography crest badge.*

#### B. WhatsApp & Email Vector Logos:
- The website uses dedicated SVG vector logo components for pixel-perfect clarity:
  - **WhatsApp Logo**: Located at `/src/components/icons/WhatsAppIcon.tsx` (standard WhatsApp brand SVG in official green `#25D366`).
  - **Email Logo**: Located at `/src/components/icons/EmailIcon.tsx` (standard vector envelope logo).

---

### Step 3: Customizing WhatsApp & Email Contact Badges

- **WhatsApp Action Buttons**:
  - Found in the **Top Utility Bar** (`Header.tsx`), **Contact Page** (`ContactPage.tsx`), **Footer** (`Footer.tsx`), and the **Floating Quick Chat Widget** (`FloatingWhatsApp.tsx`).
  - Automatically links to `https://wa.me/<your-whatsapp-number>` based on `COMPANY_INFO.whatsappPlaceholder`.
- **Email Action Buttons**:
  - Found in the **Contact Page** and **Footer**.
  - Automatically generates `mailto:<your-email-address>` based on `COMPANY_INFO.emailPlaceholder`.

---

### Step 4: Customizing Chef Peter's Full Biography Story

Chef Peter's complete biography story is structured into individual narrative chapters in `/src/data/siteData.ts` under `CEO_PROFILE.fullBiography`:

```typescript
fullBiography: {
  introduction: "Chef Yiga Edward Peter Kirigwajjo Zimwanguyizza Mulindwa...",
  chapters: [
    {
      chapterNumber: "01",
      title: "Early Foundations & Culinary Artistry",
      content: "Growing up in Uganda..."
    },
    {
      chapterNumber: "02",
      title: "The Global Stage: Dubai, Congo & Somalia",
      content: "In Dubai..."
    },
    {
      chapterNumber: "03",
      title: "Diplomatic Protocol & Executive VIP Private Dining",
      content: "..."
    },
    {
      chapterNumber: "04",
      title: "Institutional Leadership: Calm Waters Ecolodge & Green Castle",
      content: "..."
    },
    {
      chapterNumber: "05",
      title: "Founding D'E Chosen Events Consultants Limited",
      content: "..."
    }
  ],
  coreValues: [
    { title: "Integrity & Discretion", description: "..." },
    { title: "Culinary Precision", description: "..." }
  ]
}
```
You can add, edit, or remove chapters directly in this array, and the CEO page (`/src/pages/CEOPage.tsx`) will render them in a clean editorial timeline.

---

### Step 5: Customizing Courses, Menus, Event Packages & SLAs

Edit the respective arrays in `/src/data/siteData.ts`:
- **Culinary School Courses**: Edit `DECHOSEN_COURSES` array (course names, duration, fees, modules, certification).
- **Catering Services**: Edit `CATERING_SERVICES` array (buffet, private chef, corporate, BBQ, coffee bar).
- **Event Management**: Edit `EVENT_PACKAGES` array (corporate galas, weddings, staging, sound, protocol).
- **Facility Cleaning**: Edit `CLEANING_SERVICES` array (deep cleaning, kitchen degreasing, post-event sanitation).
- **Hospitality Consultancy**: Edit `CONSULTANCY_AREAS` & `DIAGNOSTIC_TOOLS` arrays (profit recovery, SOP generation, kitchen design).

---

### Step 6: Customizing Photography & Gallery Showcase

- Place your photography files in `/public/images/`.
- Update `PAGE_HERO_IMAGES` in `/src/data/siteData.ts`:
  ```typescript
  export const PAGE_HERO_IMAGES = {
    home: "/images/hero-home.jpg",
    culinarySchool: "/images/hero-culinary.jpg",
    catering: "/images/hero-catering.jpg",
    eventManagement: "/images/hero-events.jpg",
    cleaning: "/images/hero-cleaning.jpg",
    consultancy: "/images/hero-consultancy.jpg",
    ceo: "/images/chef-peter.jpg",
    contact: "/images/office-location.jpg"
  };
  ```
- Edit `GALLERY_ITEMS` array in `/src/data/siteData.ts` to showcase real event and culinary photos.

---

## 📱 Responsive Layout & Mobile Support

The website is engineered using **mobile-first Tailwind CSS** principles:
- **Fluid Layouts**: Controlled via `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- **Navigation Drawer**: Mobile menu toggle with smooth slide animations (`Header.tsx`).
- **Touch-Friendly Buttons**: Minimum 44px height on touch targets for seamless mobile navigation.
- **Floating WhatsApp Button**: Positioned at the bottom-right corner for mobile and desktop visitors to message instantly.

---

## 🚀 Premium Enterprise Hosting & Deployment Guide

For a high-end corporate presence, deploy to a **premium enterprise hosting provider** guaranteeing high availability, global CDN acceleration, and automatic SSL encryption.

---

### Option 1: Vercel Pro / Enterprise (Recommended)
1. Push the code repository to **GitHub** / **GitLab**.
2. Go to [Vercel.com](https://vercel.com) and click **Import Project**.
3. Vercel automatically detects **Vite**:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**.
5. **Custom Domain**:
   - In Vercel -> Project Settings -> Domains, add `dechosenevents.com`.
   - Update your domain DNS A record to `76.76.21.21` and CNAME `www` to `cname.vercel-dns.com`.

---

### Option 2: AWS (Amplify / CloudFront + S3)
1. Log into **AWS Console** -> **AWS Amplify**.
2. Click **Host Web App** and connect your GitHub repository.
3. Amplify build configuration:
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: dist
       files:
         - '**/*'
   ```
4. Map domain under **Domain Management** with AWS Route 53 and ACM SSL.

---

### Option 3: Google Cloud Platform (Cloud Run / Cloud CDN)
1. Deploy container image to **Google Cloud Run**:
   ```bash
   gcloud run deploy dechosen-web --source . --port 3000 --allow-unauthenticated
   ```
2. Map custom domain under **Cloud Run -> Custom Domains**.
3. Activate **Google Cloud CDN** for global static asset caching.

---

### Option 4: Netlify Pro / Enterprise
1. Import repository on [Netlify.com](https://netlify.com).
2. Set Build Command: `npm run build`
3. Set Publish Directory: `dist`
4. Assign custom domain and activate automatic Let's Encrypt Wildcard SSL.

---

## 📧 Step-by-Step Guide: How to Make the "Book an Appointment" Form Send Emails to info@dechosenevents.com

The website comes with built-in support for receiving appointment form enquiries at **info@dechosenevents.com**. You can connect it to an automated email service in 1 minute without writing complex server code, or use our direct email/WhatsApp dispatch options.

---

### Option 1: Web3Forms (Recommended - Free, No Backend Needed, 1-Minute Setup)
Web3Forms is a free form service that forwards submissions directly to `info@dechosenevents.com`.

1. **Get your free Access Key**:
   - Go to [https://web3forms.com](https://web3forms.com)
   - Enter your company email address: `info@dechosenevents.com`
   - Check your inbox for an instant email containing your Access Key (e.g. `a1b2c3d4-e5f6-7890-abcd-1234567890ef`).

2. **Add Key to your website environment**:
   - Create or open `.env` file in the project root.
   - Add line:
     ```env
     VITE_WEB3FORMS_KEY=your_access_key_here
     ```
   - *Alternatively, open `/src/components/AppointmentModal.tsx` and `/src/pages/ContactPage.tsx` and paste your key into `web3Key`.*

3. **Test the form**:
   - Submit an appointment booking request on the site.
   - You will immediately receive a formatted email in your `info@dechosenevents.com` inbox!

---

### Option 2: Formspree (Alternative Free Form Endpoint)
1. Register at [https://formspree.io](https://formspree.io) and create a form targeting `info@dechosenevents.com`.
2. Copy your Form ID (e.g. `xqyzyz12`).
3. In `AppointmentModal.tsx`, update the fetch call:
   ```typescript
   await fetch('https://formspree.io/f/YOUR_FORM_ID', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(formData)
   });
   ```

---

### Option 3: EmailJS (Client-Side Direct SDK)
1. Register at [https://emailjs.com](https://emailjs.com) and create an Email Service (Gmail / Outlook / cPanel Webmail).
2. Create an Email Template with fields `{{fullName}}`, `{{phone}}`, `{{email}}`, `{{service}}`, `{{preferredDate}}`, `{{message}}`.
3. Install EmailJS SDK:
   ```bash
   npm install @emailjs/browser
   ```
4. Call `emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_PUBLIC_KEY')` in `handleSubmit`.

---

### Option 4: Custom Express Backend + Nodemailer (For Node Server Deployments)
If deploying a custom Node.js server (`server.ts`):
1. Install Nodemailer:
   ```bash
   npm install nodemailer
   ```
2. In `server.ts`, create a POST route `/api/book-appointment`:
   ```typescript
   import nodemailer from 'nodemailer';

   app.post('/api/book-appointment', async (req, res) => {
     const { fullName, phone, email, service, preferredDate, preferredTime, message } = req.body;
     
     const transporter = nodemailer.createTransport({
       host: 'mail.dechosenevents.com', // Your SMTP server
       port: 465,
       secure: true,
       auth: {
         user: 'info@dechosenevents.com',
         pass: process.env.EMAIL_PASSWORD
       }
     });

     await transporter.sendMail({
       from: '"Website Booking" <info@dechosenevents.com>',
       to: 'info@dechosenevents.com',
       subject: `New Appointment Booking: ${service} - ${fullName}`,
       html: `
         <h3>New Booking Request</h3>
         <p><strong>Name:</strong> ${fullName}</p>
         <p><strong>Phone:</strong> ${phone}</p>
         <p><strong>Email:</strong> ${email}</p>
         <p><strong>Service:</strong> ${service}</p>
         <p><strong>Date/Time:</strong> ${preferredDate} @ ${preferredTime}</p>
         <p><strong>Message:</strong> ${message}</p>
       `
     });

     res.json({ success: true, message: 'Email sent successfully' });
   });
   ```

---

### Option 5: Built-In Instant Email & WhatsApp Buttons (Zero Configuration Required!)
Even without setting up Web3Forms or an API server, the site includes instant fallback buttons on form submission:
- **"Send via Email App"**: Automatically opens the client's email application (Gmail, Outlook, Apple Mail) prepopulated with all form details addressed directly to `info@dechosenevents.com`.
- **"Send via WhatsApp"**: Automatically opens WhatsApp web/app addressed to `+256 700 000 000` prefilled with the client's booking summary!

---

## 🛠️ Local Development & Build Scripts

Execute the following commands in your terminal:

```bash
# Install dependencies
npm install

# Start local development server (runs on port 3000)
npm run dev

# Run TypeScript linting checks
npm run lint

# Build for production
npm run build
```
