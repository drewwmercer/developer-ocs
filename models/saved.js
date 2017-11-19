module.exports = (sequelize, DataTypes) => {
  const Saved = sequelize.define('Saved', {
    project_id: {
      type: DataTypes.INTEGER
    },
    user_id: {
      type: DataTypes.INTEGER
    }
  });

  return Saved;
};
