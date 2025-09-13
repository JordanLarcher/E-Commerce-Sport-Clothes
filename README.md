# E-Commerce-Sport-Clothes
📖 Project Overview
Oversize Gym Store is a full-stack e-commerce platform specializing in oversized gym clothing (e.g., hoodies, joggers, tanks, shorts in loose fits for men, women, and unisex). Built with a hybrid architecture combining ASP.NET Core MVC and microservices for scalability, it supports user authentication (including OAuth with Google/Microsoft), role-based access (Visitor, Customer, Seller, Admin), secure payments via Mercado Pago, and a responsive React frontend styled with Tailwind CSS.
This project demonstrates modern best practices: Repository pattern, Dependency Injection, Unit of Work (via EF transactions), CQRS basics, JWT auth, and PostgreSQL for relational data. It's designed for educational purposes, teaching step-by-step development from setup to deployment.
Key Goals

E-Commerce Functionality: Product catalog, search/filter (by gender M/F/Unisex, category), cart/wishlist, checkout, order history with print/download.
User Experience: Beautiful, mobile-first UI with gym-inspired design (bold colors, gradients, oversized typography).
Security & Scalability: OAuth, role-based auth, microservices on Azure with PostgreSQL.
Extensibility: Seller profiles for product uploads; Admin dashboards.

Tech Stack:

Backend: ASP.NET Core 9.0 (LTS as of Sep 2025), Entity Framework Core, PostgreSQL.
Frontend: React 19.0, Tailwind CSS 3.4+, Vite.
Payments: Mercado Pago SDK.
Auth: ASP.NET Identity + JWT/OAuth.
Hosting: Azure App Service, Azure Static Web Apps, Azure Database for PostgreSQL.
Other: AutoMapper, SignalR (notifications), jsPDF (print), Azure Blob Storage (images, optional).

✨ Features

Category,Features
Authentication,"Login/Logout, Password Reset (email), OAuth (Google/Microsoft), Role Management (Visitor/Customer/Seller/Admin)."
Catalog & Search,"Product listings, Search/Filter (M/F/Unisex, Category), Sorting (Name, Price Asc/Desc, Newest), Pagination."
Shopping,"Product Details (with Add to Cart/Favorites), Shopping Cart (add/update/remove/quantity), Wishlist/Favorites Page."
Checkout & Payments,"Secure Checkout, Mercado Pago (Credit/Debit Cards), Order Confirmation Notifications."
Orders,"History with Full Details (items, payments), Download/Print Orders (PDF via jsPDF), Print Catalog."
Seller Role,"Create Seller Profile, CRUD Products (with role checks)."
Admin Role,User/Order Management Dashboards.
Notifications,"Email (SMTP/SendGrid), In-App Real-Time (SignalR)."
UI/UX,"Responsive Pages: Home, Login, Catalog, Product Details, Favorites, Cart, Checkout, History. Beautiful Tailwind design (gradients, shadows)."

🏗️ Architecture Overview
Hybrid MVC + Microservices:

Core Layer (src/Core/): Shared models (User, Product, Order), DTOs, enums, repositories interfaces.
Web Gateway (src/Web/): ASP.NET Core MVC app; Hosts UI routing, proxies API calls to microservices, MVC views for dashboards.
Microservices (src/Services/*): Independent WebAPI projects:

UserService: Auth, roles, profiles.
ProductService: Catalog CRUD, search/filter.
OrderService: Cart, wishlist, orders, history.
PaymentService: Mercado Pago integration.
NotificationService: Emails, SignalR hubs.


Database: Single PostgreSQL instance (sharded per service via separate DbContexts); Relationships via EF navigation properties (e.g., Order → User, OrderItem → Product).
Communication: HTTP clients (IHttpClientFactory) between services; JWT for auth propagation.
Patterns:

Repository: Abstracts EF queries (e.g., IProductRepository).
Dependency Injection: Built-in (e.g., builder.Services.AddScoped<IProductRepository, ProductRepository>()).
Unit of Work: EF DbContext transactions (e.g., in CheckoutAsync).
Middleware: Auth, Error Handling.
CQRS Basics: Separate query (SearchAsync) and command (AddAsync) methods.



Folder Structure:

OversizeGymStore/
├── src/
│   ├── Core/                  # Shared models, DTOs, interfaces
│   │   ├── Models/            # User.cs, Product.cs, Order.cs, etc.
│   │   ├── DTOs/              # AuthDto.cs, ProductDto.cs
│   │   └── Repositories/      # IProductRepository.cs
│   ├── Web/                   # MVC Gateway
│   │   ├── Controllers/       # ApiProxyController.cs, AdminController.cs
│   │   ├── Views/             # Admin/Index.cshtml, Seller/
│   │   └── wwwroot/           # Static assets
│   └── Services/
│       ├── UserService/       # Auth APIs
│       │   ├── Controllers/   # AuthController.cs
│       │   ├── Data/          # UserContext.cs
│       │   └── Repositories/  # UserRepository.cs
│       ├── ProductService/    # Similar structure
│       ├── OrderService/
│       ├── PaymentService/
│       └── NotificationService/
├── frontend/                  # React App
│   ├── src/
│   │   ├── components/        # ProtectedRoute.jsx
│   │   ├── contexts/          # AuthContext.jsx
│   │   ├── pages/             # Login.jsx, Catalog.jsx, etc.
│   │   ├── services/          # api.js
│   │   └── stores/            # cartStore.js (Zustand)
│   └── tailwind.config.js
├── OversizeGymStore.sln       # Solution file
├── README.md                  # This file
└── docker-compose.yml         # Optional: For local DB

Data Flow Example (Checkout):

Frontend (React) → Web Gateway (Proxy) → OrderService (CheckoutAsync: Validates stock via ProductService HTTP call).
→ PaymentService (ProcessPaymentAsync).
→ NotificationService (SendEmailAsync + SignalR).
DB Update (EF SaveChanges in transaction).

📋 Prerequisites

.NET 9.0 SDK: Download from dotnet.microsoft.com.
Node.js 20+: For React (includes npm).
PostgreSQL 16+: Local via Docker or Azure.
Visual Studio 2022+ or VS Code (with C# extension).
Azure Account: Free tier for hosting/DB.
Mercado Pago Account: Sandbox for testing (get AccessToken/PublicKey).
Google/Microsoft OAuth: App registrations for ClientId/Secret.
Git: For version control.

Install tools:
# .NET
winget install Microsoft.DotNet.SDK.9  # Windows
brew install --cask dotnet-sdk         # macOS

# Node.js (if needed)
# Download from nodejs.org

# EF Tools
dotnet tool install --global dotnet-ef

🚀 Setup & Development Process
Follow these phases to build/run locally. Each step includes commands, code explanations, and integration notes.
Phase 1: Project Setup & Database

Clone/Create Solution:
mkdir OversizeGymStore && cd OversizeGymStore
dotnet new sln -n OversizeGymStore
dotnet new mvc -n OversizeGymStore.Web -o src/Web
dotnet new classlib -n OversizeGymStore.Core -o src/Core
# Create microservices: dotnet new webapi -n OversizeGymStore.UserService -o src/Services/UserService
# Repeat for Product/Order/Payment/Notification Services
dotnet sln add src/**/*.csproj  # Add all projects

Explanation: Multi-project solution for modularity. Core shares models (e.g., User.cs with enums like UserRole { Visitor, Customer, Seller, Admin }).
Integration: Services reference Core.


Database Setup (PostgreSQL via Docker):
docker run --name postgres-db -e POSTGRES_PASSWORD=Password123 -p 5432:5432 -d postgres:16
Add EF Packages: dotnet add package Microsoft.EntityFrameworkCore --project src/Services/UserService
Packages: Npgsql.EntityFrameworkCore.PostgreSQL, Microsoft.EntityFrameworkCore.Tools.
Define Models in Core/Models/ (e.g., Product.cs with [ForeignKey("SellerId")] for relationships).
Create DbContexts (e.g., UserContext.cs inheriting IdentityDbContext).
Connection in appsettings.json:

{
  "ConnectionStrings": { "DefaultConnection": "Host=localhost;Database=OversizeGymDb;Username=postgres;Password=Password123" }
}

Migrations: dotnet ef migrations add InitialCreate --project src/Services/UserService
Explanation: EF handles schema (tables: Users, Products, Orders, CartItems; FKs for relations like User.Orders). Run per service.
Run: dotnet ef database update



Phase 2: Authentication (UserService)

Add Packages: Microsoft.AspNetCore.Identity.EntityFrameworkCore, JwtBearer, Google/MicrosoftAccount, MailKit.
Extend Models: ApplicationUser : IdentityUser<int> with Role.
Configure in Program.cs: AddIdentity, AddAuthentication (JWT + OAuth).
Controllers: AuthController.cs for Register/Login (GenerateJwtToken with claims), ForgotPassword (email token).
EmailService: MailKit for SMTP (config in appsettings.json).
Code Snippet (JWT Token):
csharp
