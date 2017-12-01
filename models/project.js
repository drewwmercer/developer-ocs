const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  const Project = sequelize.define('Project', {
    posted_date: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
      timezone: '-05:00'
    },
    project_title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    },
    project_details: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    primary_language: {
      type: DataTypes.STRING
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  });

  Project.associate = models => {
    Project.hasMany(models.Saved, {
      sourceKey: 'id',
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Project;
};
