var sqlMap = {

  users: {
    searchAll: 'select * from users',
    add: 'insert into users (id,name,gender) values (?,?,?)',
    delete: 'delete from users where id = ?',
    selectOne: 'select * from users  where name = ?',
    update: 'update users set name = ?,gender = ? where id = ?',

    searchAllAgency: 'select * from agencies',
    deleteAgency: 'delete from agencies where id = ?',
    addAgency: 'insert into agencies (id,agency_name,agency_content,agency_date,agency_type,agency_degree) values (?,?,?,?,?,?)',
    updateAgency: 'update agencies set agency_name = ?,agency_content = ?,agency_date=?,agency_type = ?,agency_degree = ? where id = ?',
    selectOneAgency: 'select * from agencies  where agency_name = ?',
  }
}

module.exports = sqlMap