module.exports = (sequelize, DataTypes) => {
const User = sequelize.define('User', {
  user_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  user_email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
        isEmail: true
    }
  }
});

User.associate = (models) => {
  // Associating user with Projects
  // When a user is deleted, also delete any associated Projects
  User.hasMany(models.Project, {
    onDelete: "cascade"
  });
};

return User;
};
