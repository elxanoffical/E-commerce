module.exports = () => ({
    email: {
        config: {
          provider: "sendmail",
          settings: {
            defaultFrom: "noreply@example.com",
          },
        },
      },
});
