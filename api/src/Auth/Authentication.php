<?php
namespace Johannes\Auth;

use Johannes\Data\Database;
use \Exception;

class Authentication extends Database {
  $errors = array();
  public function __construct() {
    try {
      parent::__construct()
      if( !$this -> connection ) {
        throw new Exception("database unvailable");
      }
    }
    catch( Exception $ex ) {
      $this -> errors -> push()
    }
    
  }
}
?>