module.exports = function(sequelize, DataTypes) {
  const Project = sequelize.define('Project', {
    posted_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    project_title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    project_details: {
      type: DataTypes.STRING,
      allowNull: false
    },
    project_owner: {
      type: DataTypes.INTEGER
    },
    primary_language: {
      type: DataTypes.STRING
    }
  });

  return Project;
};