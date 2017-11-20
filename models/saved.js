module.exports = (sequelize, DataTypes) => {
  const Saved = sequelize.define('Saved', {
    user_id: {
      type: DataTypes.INTEGER
    }
  });

   Saved.associate = (models) => {
     Saved.belongsTo(models.Project, {
       targetKey: 'id',
       foreignKey: {
         allowNull: false
       }
     });
   };

  return Saved;
};
