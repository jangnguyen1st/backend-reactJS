module.exports = ({ env }) => ({
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        "bai-viet": {
          field: "slug",
          references: "title_main",
        },
      },
    },
  },
});
