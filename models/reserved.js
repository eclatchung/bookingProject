/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reserved', {
    table_id: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true
    },
    store_id: {
      type: DataTypes.STRING(20),
      allowNull: false,
      references: {
        model: 'store',
        key: 'store_id'
      }
    },
    seat_num: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    chair: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'reserved'
  });
};
