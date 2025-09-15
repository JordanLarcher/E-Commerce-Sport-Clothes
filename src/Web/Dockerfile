# Web Dockerfile
FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS base
WORKDIR /app
EXPOSE 8080


FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src/Web
# Copy Core project
COPY Core ../Core
# Copy Web .csproj file
COPY Web/Gym-Clothes-ECommerce.Web.csproj ./
# Copy rest of Web project files
COPY Web/. .
RUN dotnet restore "Gym-Clothes-ECommerce.Web.csproj"
RUN dotnet publish "Gym-Clothes-ECommerce.Web.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "Gym-Clothes-ECommerce.Web.dll"]
