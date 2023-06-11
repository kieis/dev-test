const data = {
  users: [
    {
      id: 1,
      name: "João Oliveira",
      job: "Desenvolvedor",
    },
    {
      id: 2,
      name: "Dirlan Ferreira",
      job: "Desenvolvedor",
    },
    {
      id: 3,
      name: "Pedro Luis",
      job: "Desenvolvedor",
    },
  ],
  userPermissions: [
    {
      userId: 1,
      permissions: ["delete", "update"],
    },
    {
      userId: 2,
      permissions: ["update"],
    },
    {
      userId: 3,
      permissions: ["delete"],
    },
  ],
  visits: {},
};

module.exports = data;
