# UserServices Dockerfile
FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS base
WORKDIR /app
EXPOSE 5004

FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src
COPY Core ./Core
COPY Services/UserServices ./Services/UserServices
RUN dotnet restore "Services/UserServices/Gym-Clothes-ECommerce.UserServices.csproj"
RUN dotnet publish "Services/UserServices/Gym-Clothes-ECommerce.UserServices.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "Gym-Clothes-ECommerce.UserServices.dll"]
