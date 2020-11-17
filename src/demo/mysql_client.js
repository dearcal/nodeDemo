'use strict'
const fs = require('fs');

const mysql  = require('mysql');
const toml = require('toml');
const logger  =require('./config/logger');
var config;
try {
     config = toml.parse(fs.readFileSync('./config/cluster_manager.toml'));
   } catch (e) {
    //  console.log(e.message);
     logger.error("mysqlConnect",'Parsing config error' + e.message);
     setTimeout(function(){
        process.exit(1);
     },500);
   }

 const db_config    ={    
   host:      config.mysql.host,
   user:      config.mysql.userName,   
   password:  config.mysql.password,
   database:  config.mysql.database,
   port:      config.mysql.port,
};


 function getConnection (callback) {
    let pool=mysql.createPool(db_config);
    pool.getConnection(function (err,connect){
        if (err) {
            console.log("mysql connect error"+ err);
            logger.debug("mysqlConnect","mysql connect error" + err);
        }  else {
            console.log("mysql连接成功!");
            logger.debug("mysqlConnect","mysql连接成功!");
            callback(connect);
        }
    })
};


module.exports  = function() {
 let that  = {} ;

    that.query =  function(sql,callback) {
        getConnection((conn)=>{
            console.log(sql);
            conn.query(sql,function(err,data){
                console.log(data);
            })    
        });
    }

    return  that ;

    

}

    // that.coonect  = function(options ,callback){
    //     //console.log(options);
    //     let  pool = mysql.createPool({    
    //          host:      options.host,  
    //          user:      options.userName,   
    //          password:  options.password,    
    //          database:  options.database ,  
    //          port:      options.port  
    //     });
    //     //console.log(pool);
    //     pool.getConnection(function(err,conn){  
    //         console.log(conn);
    //         console.log(err);
    //         if(!err){
    //             callback(err);
    //         }else{
    //             callback(conn);
    //         }
    //     }); 
    // }
    // that.query = function(conn,sql,callback){
    //      conn.query(sql,function(err,data){
    //          if(err){
    //              callback ('err');
    //          }else{
    //              callback(data);
    //          }
    //      })
    // }
   // var connection = mysql.createConnection({     
    //     host     : 'localhost',       
    //     user     : 'root',              
    //     password : '123456',       
    //     port: '3306',                   
    //     database: 'test' 
    //   }); 
    // var setupConnection = function(options) { 

    //     connection.connect();
    // }
        

 

