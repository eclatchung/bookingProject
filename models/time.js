/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('time', {
    table_id: {
      type: DataTypes.STRING(30),
      allowNull: false,
      references: {
        model: 'reserved',
        key: 'table_id'
      }
    },
    start: {
      type: DataTypes.TIME,
      allowNull: false
    },
    end: {
      type: DataTypes.TIME,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'time'
  });
};
