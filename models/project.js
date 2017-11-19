const Sequelize = require ("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    posted_date: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW
    },
    project_title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    project_details: {
      type: DataTypes.STRING,
      allowNull: false
    },
    primary_language: {
      type: DataTypes.STRING
    }
  });

  Project.associate = (models) => {
    // Post should belong to a project_owner
    // A Post can't be created without an project_owner due to the foreign key constraint
    Project.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Project;
};
