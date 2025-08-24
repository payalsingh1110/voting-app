# 🗳️ Voting App

A **full-stack voting application** built with **Spring Boot (backend)** and **Angular (frontend)**.
It allows users to **create polls, add multiple options, and vote on them in real-time**.

---

## 🚀 Tech Stack

### Backend

* Java 17+
* Spring Boot
* Spring Web
* Spring Data JPA
* MySQL Database 
* Lombok

### Frontend

* Angular
* TypeScript
* Bootstrap

---

## 📂 Project Structure

```
votingapp/
│
├── src/main/java/com/voting/votingapp/   # Backend (Spring Boot)
│   ├── controller/                       # REST Controllers
│   ├── model/                            # Entities (Poll, OptionVote, etc.)
│   ├── repository/                       # JPA Repositories
│   └── service/                          # Business logic
│
├── poll-app/                             # Frontend (Angular)
│   ├── src/app/                          # Angular Components & Services
│   │   ├── poll/                         # Poll Component
│   │   ├── poll.service.ts               # API integration
│   │   ├── poll.models.ts                # Models (Poll, Options)
│   │   ├── app.component.*               # Root Component
│   │   ├── app.routes.ts                 # Routing
│   │   └── styles.css                    # Global Styles
│   ├── angular.json                      # Angular config
│   ├── package.json                      # NPM dependencies
│   └── tsconfig.json                     # TypeScript config
│
└── README.md                             # Project Documentation
```

---

## ⚙️ Setup Instructions

### 1. Clone Repository

```sh
git clone https://github.com/your-username/votingapp.git
cd votingapp
```

### 2. Backend Setup (Spring Boot)

1. Configure `src/main/resources/application.properties`

   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/votingdb
   spring.datasource.username=root
   spring.datasource.password=yourpassword
   spring.jpa.hibernate.ddl-auto=update
   spring.jpa.show-sql=true
   ```
2. Run backend

   ```sh
   ./mvnw spring-boot:run
   ```

   Backend will start on: **[http://localhost:8080](http://localhost:8080)**

---

### 3. Frontend Setup (Angular)

1. Navigate to frontend folder:

   ```sh
   cd poll-app
   ```
2. Install dependencies:

   ```sh
   npm install
   ```
3. Run Angular app:

   ```sh
   ng serve --open
   ```

   Frontend will start on: **[http://localhost:4200](http://localhost:4200)**

---

## 📝 Features

✅ Create a new poll with multiple options
✅ Add or remove options dynamically
✅ Vote for options in available polls
✅ Display vote counts in real-time

---

## 🔗 API Endpoints

| Method | Endpoint               | Description            |
| ------ | ---------------------- | ---------------------- |
| POST   | `/api/polls`           | Create new poll        |
| GET    | `/api/polls`           | Get all polls          |
| POST   | `/api/polls/{id}/vote` | Vote for a poll option |

---

## 🎨 UI Preview

* **Create Poll Page** – Add poll question and options.
* **Poll List Page** – View all polls and vote for options.

---






