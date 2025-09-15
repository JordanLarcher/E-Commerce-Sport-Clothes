# ProductService Dockerfile
FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS base
WORKDIR /app
EXPOSE 5005

FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src
COPY Core ./Core
COPY Services/ProductService ./Services/ProductService
RUN dotnet restore "Services/ProductService/Gym-Clothes-ECommerce.ProductService.csproj"
RUN dotnet publish "Services/ProductService/Gym-Clothes-ECommerce.ProductService.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "Gym-Clothes-ECommerce.ProductService.dll"]
