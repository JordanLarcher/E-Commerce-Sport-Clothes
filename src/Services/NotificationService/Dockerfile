# NotificationService Dockerfile
FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS base
WORKDIR /app
EXPOSE 5008

FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src
COPY Core ./Core
COPY Services/NotificationService ./Services/NotificationService
RUN dotnet restore "Services/NotificationService/Gym-Clothes-ECommerce.NotificationService.csproj"
RUN dotnet publish "Services/NotificationService/Gym-Clothes-ECommerce.NotificationService.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "Gym-Clothes-ECommerce.NotificationService.dll"]
