<?php 
/**
 * Register Blocks 
 * @gtb
 */

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

if( ! class_exists( 'Dbgtb_Register_Block' ) ) {

    class Dbgtb_Register_Block {

        /**
         * Constructor 
         * @return void
         */
         public function __construct() {
            add_action( 'init', [ $this, 'dbgtb_register_block' ] );
         }

        /**
        * Register Block
        * @return void
        */
        public function dbgtb_register_block() {
            $blocksFolder = DBGTB_DIR . '/build/block';

            if ( is_dir( $blocksFolder ) ) {
                $contents = scandir( $blocksFolder );

                $blocks = array_filter( $contents, function( $item ) use ( $blocksFolder ) {
                    $itemPath = $blocksFolder . DIRECTORY_SEPARATOR . $item;
                    return is_dir( $itemPath ) && !in_array( $item, ['.', '..'] );
                });
            
                if( is_array( $blocks ) && ! empty( $blocks ) ) {
                    foreach ( $blocks as $block ) {
                        register_block_type( DBGTB_DIR . '/build/block/' . $block  );
                    }
                }
            }
        }
    }
}

new Dbgtb_Register_Block(); // Initialize the class instance