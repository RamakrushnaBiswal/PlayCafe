module.exports = {
  message: "Welcome to the feedback API!",
  version: "1.0.0",
  endpoints: {
    createFeedback: {
      path: "/create",
      method: "POST",
      parameters: {
        name: "string (required)",
        email: "string (required)",
        message: "string (required)",
      },
    },
  },
  documentation: "https://api-docs-url.com",
};
