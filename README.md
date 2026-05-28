# photography-quote-website

A local Version 1 skeleton website for a photography and videography quote flow.

Clients can view wedding film packages, compare them side by side, continue as a guest, submit a quote request, and see a thank-you page. The admin page can view and delete submitted quote requests from the local H2 database.

## Prerequisites

- Java 17 or Java 21
- Maven
- Node.js LTS
- npm
- IntelliJ IDEA
- Postman

## Project Structure

```text
photography-quote-website/
  backend/
  frontend/
  README.md
```

## Open in IntelliJ IDEA

1. Open IntelliJ IDEA.
2. Choose `File > Open`.
3. Select the `photography-quote-website` folder.
4. IntelliJ should detect the Maven project inside `backend`.
5. If needed, open the Maven tool window and reload the `backend/pom.xml`.

## Run the Backend

```bash
cd backend
mvn spring-boot:run
```

Backend URL:

```text
http://localhost:8080
```

H2 Console:

```text
http://localhost:8080/h2-console
```

H2 login details:

```text
JDBC URL: jdbc:h2:mem:photographyquotedb
Username: sa
Password:
```

Leave the password empty.

## Run the Frontend

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend URL:

```text
http://localhost:5173
```

## Local Flow

1. Open `http://localhost:5173`.
2. Click `Get a Quote`.
3. Click `Continue as Guest`.
4. View packages.
5. Compare packages if needed.
6. Select a package.
7. Submit the quote form.
8. Open `/admin/quotes` to view submitted quote requests.

## Postman Endpoints

Base URL:

```text
http://localhost:8080
```

Endpoints:

```text
GET    /api/packages
GET    /api/packages/{id}
GET    /api/packages/compare
POST   /api/quotes
GET    /api/quotes
GET    /api/quotes/{id}
DELETE /api/quotes/{id}
```

## Sample POST /api/quotes

```json
{
  "clientName": "Avery Johnson",
  "email": "avery@example.com",
  "phone": "555-123-4567",
  "selectedPackageName": "Documentary Wedding Film",
  "eventType": "Wedding",
  "weddingDate": "2026-11-14",
  "location": "Dallas, TX",
  "numberOfEvents": 2,
  "coverageHours": 10,
  "serviceType": "Both",
  "needsDrone": true,
  "needsTeaserReel": true,
  "needsFullCeremonyVideo": true,
  "needsInterviews": true,
  "needsConceptualScenes": false,
  "budgetRange": "$3,000 - $6,000",
  "specialNotes": "We want emotional family moments, interviews, and full event coverage."
}
```

curl example:

```bash
curl -X POST http://localhost:8080/api/quotes \
  -H "Content-Type: application/json" \
  -d '{"clientName":"Avery Johnson","email":"avery@example.com","phone":"555-123-4567","selectedPackageName":"Documentary Wedding Film","eventType":"Wedding","weddingDate":"2026-11-14","location":"Dallas, TX","numberOfEvents":2,"coverageHours":10,"serviceType":"Both","needsDrone":true,"needsTeaserReel":true,"needsFullCeremonyVideo":true,"needsInterviews":true,"needsConceptualScenes":false,"budgetRange":"$3,000 - $6,000","specialNotes":"We want emotional family moments, interviews, and full event coverage."}'
```

## Files to Edit for Customization

- Package data: `backend/src/main/java/com/photographyquote/config/DataSeeder.java`
- Colors: `frontend/tailwind.config.js` and `frontend/src/index.css`
- Form fields: `frontend/src/components/QuoteForm.jsx`
- API base URL: `frontend/src/api/axiosClient.js`
- Page text: `frontend/src/pages` and `frontend/src/components`

## Email Notifications

Quote submission email notifications are wired in the backend, but disabled by default so local development does not fail without SMTP credentials.

Admin email:

```text
vanaravisuals.studio@gmail.com
```

To enable real email sending, update `backend/src/main/resources/application.properties` with SMTP settings:

```properties
quote.notifications.enabled=true
spring.mail.host=smtp.gmail.com
spring.mail.port=587
spring.mail.username=your-email@gmail.com
spring.mail.password=your-google-app-password
spring.mail.properties.mail.smtp.auth=true
spring.mail.properties.mail.smtp.starttls.enable=true
```

Use a Google app password, not your normal Gmail password.

## Future TODO

- Real Google OAuth login
- Real database PostgreSQL/MySQL
- Email notification after quote submission
- Admin login
- Quote price estimator
- PDF quote generation
- Client dashboard
- Payment/advance booking option
- Calendar availability check
- Package pricing rules
