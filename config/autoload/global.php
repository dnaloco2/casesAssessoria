<?php
/**
 * Global Configuration Override
 *
 * You can use this file for overriding configuration values from modules, etc.
 * You would place values in here that are agnostic to the environment and not
 * sensitive to security.
 *
 * @NOTE: In practice, this file will typically be INCLUDED in your source
 * control, so do not include passwords or other sensitive information in this
 * file.
 */

return array(
    'mail' => array(
        'name' => 'localhost',
        'host' => 'smtp.gmail.com',
        'port' => 587,
        'connection_class' => 'login',
        'connection_config' => array(
            'username' => 'dnaloco@gmail.com',
            'password' => 'artdna7',
            'ssl' => 'tls',
            'from'=> 'dnaloco@gmail.com'

        )
    ),
    'doctrine' => array(
        'connection' => array(
          'orm_default' => array(
            'driverClass' =>'Doctrine\DBAL\Driver\PDOMySql\Driver',
            'params' => array(
              'host'     => 'mysql01.redehost.com.br',
              'port'     => '3306',
              'user'     => 'cases_admin',
              'password' => 'Cases@2014',
              'dbname'   => 'cases_cms',
              'charset'  => 'utf8',
    ))))
);
