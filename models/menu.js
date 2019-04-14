/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('menu', {
    store_id: {
      type: DataTypes.STRING(20),
      allowNull: false,
      references: {
        model: 'store',
        key: 'store_id'
      }
    },
    menu_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'menu'
  });
};
