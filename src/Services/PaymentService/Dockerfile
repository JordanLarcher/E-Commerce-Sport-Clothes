# PaymentService Dockerfile
FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS base
WORKDIR /app
EXPOSE 5007

FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src
COPY Core ./Core
COPY Services/PaymentService ./Services/PaymentService
RUN dotnet restore "Services/PaymentService/Gym-Clothes-ECommerce.PaymentService.csproj"
RUN dotnet publish "Services/PaymentService/Gym-Clothes-ECommerce.PaymentService.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "Gym-Clothes-ECommerce.PaymentService.dll"]
