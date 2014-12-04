<?php 

return array(
  'doctrine' => array(
    'connection' => array(
      'orm_default' => array(
        'driverClass' =>'Doctrine\DBAL\Driver\PDOMySql\Driver',
        'params' => array(
          'host'     => 'localhost',
          'port'     => '3306',
          'user'     => 'cases_admin',
          'password' => 'Cases@2014',
          'dbname'   => 'cases_cms',
          'charset' => 'utf8',
)))));