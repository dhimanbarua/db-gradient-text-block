<?php 
/**
 * Plugin Main Loader File
 * 
 * @gtb
 */

 if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

 if( ! class_exists( 'Dbgtb_Block_Loader' ) ) {

    class Dbgtb_Block_Loader {

        /**
         * Constructor
         * @return void
         */
        public function __construct() {
            $this->includes();
        }

        /**
         * Include all the required files
         * @return void
         */
        public function includes() {
            require_once DBGTB_PATH . 'inc/classes/blocks-category.php';
            require_once DBGTB_PATH . 'inc/classes/blocks-register.php';
            require_once DBGTB_PATH . 'inc/classes/blocks-style.php';
        }

    }

 }

 new Dbgtb_Block_Loader(); // Initialize the class instance