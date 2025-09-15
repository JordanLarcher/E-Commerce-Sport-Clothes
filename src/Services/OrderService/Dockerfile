# OrderService Dockerfile
FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS base
WORKDIR /app
EXPOSE 5006

FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src
COPY Core ./Core
COPY Services/OrderService ./Services/OrderService
RUN dotnet restore "Services/OrderService/Gym-Clothes-ECommerce.OrderService.csproj"
RUN dotnet publish "Services/OrderService/Gym-Clothes-ECommerce.OrderService.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "Gym-Clothes-ECommerce.OrderService.dll"]
