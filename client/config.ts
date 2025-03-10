interface Config {
    baseUrl: string;
  }
  
  const checkConfig = (server: string): Config => {
    switch (server) {
      case "production":
        return { baseUrl: "https://complete-e-commerce.vercel.app" };
      case "local":
        return { baseUrl: "http://localhost:8000" };
      default:
        // Provide a fallback configuration
        return { baseUrl: "http://default-url.com" };
    }
  };
  
  export const selectServer = "production";
  export const config = checkConfig(selectServer) as Config;
  