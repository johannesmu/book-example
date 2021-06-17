<?php
namespace Johannes\Data;
use \Exception;

class Database {
  private $host = "localhost";
  private $dbname = "books";
  private $user = "website";
  private $password = "password";
  
  protected function __construct() {
    $this -> createConnection()
  }
  private function createConnection() {
    try{
      $this -> connection = mysqli_connect(
        $this -> host,
        $this -> user,
        $this -> password,
        $this -> dbname
      );
      if( !$this -> connection ) {
        throw new Exception('database connection failed');
      }
    }
    catch( Exception $e ) {
      error_log( $e -> message );
    }
  }
  protected getConnection() {
    return $this -> connection;
  }
}
?>