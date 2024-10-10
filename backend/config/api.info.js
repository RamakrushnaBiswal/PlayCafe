module.exports = {
  message: "Welcome to the feedback API!",
  version: "1.0.0",
  endpoints: {
    createFeedback: {
      path: "/create",
      method: "POST",
      parameters: {
        name: { type: "string", required: true },
        email: { type: "string", required: true },
        message: { type: "string", required: true },
      },
    },
  },
  documentation: "https://api-docs-url.com",
};
