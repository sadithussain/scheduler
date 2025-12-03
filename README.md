This README was generated using AI. This allows for far more complex READMEs than would be possible for a human to write by hand.

## Scheduler

A full-stack scheduling application built with a modern tech stack, featuring a responsive calendar interface and robust event management capabilities.

## Tech Stack

### Frontend

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Calendar Library:** `react-big-calendar`
- **Date Handling:** `date-fns`, `moment`

### Backend

- **Framework:** Spring Boot
- **Language:** Java
- **Database:** PostgreSQL
- **ORM:** Spring Data JPA
- **Build Tool:** Maven

## Features

- **Interactive Calendar:** View events in a monthly, weekly, or daily format.
- **Event Management:** Create, view, and manage events.
- **Responsive Design:** Optimized for various screen sizes.
- **RESTful API:** robust backend API for data persistence.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Java Development Kit (JDK) 25
- Maven
- PostgreSQL

### Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd scheduler
    ```

2.  **Backend Setup:**

    - Navigate to the server directory:
      ```bash
      cd server
      ```
    - Configure your database connection in `src/main/resources/application.properties` (create if missing, or check `application.yml`).
    - Run the application:
      ```bash
      ./mvnw spring-boot:run
      ```
    - The server will start on `http://localhost:8080`.

3.  **Frontend Setup:**
    - Navigate to the client directory:
      ```bash
      cd ../client
      ```
    - Install dependencies:
      ```bash
      npm install
      ```
    - Run the development server:
      ```bash
      npm run dev
      ```
    - Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
scheduler/
├── client/                 # Next.js Frontend
│   ├── src/
│   │   ├── app/            # App Router pages
│   │   ├── components/     # Reusable components
│   │   └── types/          # TypeScript definitions
│   ├── public/             # Static assets
│   └── package.json
│
└── server/                 # Spring Boot Backend
    ├── src/
    │   └── main/java/com/sadit/server/
    │       ├── controller/ # REST Controllers
    │       ├── model/      # JPA Entities
    │       └── repository/ # Data Access Layer
    └── pom.xml
```
