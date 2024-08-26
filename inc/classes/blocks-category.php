<?php
/**
 * Regiser Blocks Category
 * @gtb
 */

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

if( ! class_exists( 'Dbgtb_Category' ) ) {
    
    class Dbgtb_Category {

        /**
         * Constructor
         * @return void
         */
        public function __construct() {
            if( version_compare( $GLOBALS['wp_version'], '5.7', '<' ) ) {
                add_filter( 'block_categories', [ $this, 'dbgtb_register_block_category' ], 10, 2 );
            } else {
                add_filter( 'block_categories_all', [ $this, 'dbgtb_register_block_category' ], 10, 2 );
            }
        }

        /**
         * Register Blocks Category 
         * @return array
         */
        public function dbgtb_register_block_category( $categories, $post ) {
            return array_merge(
                array(
                    array(
                        'slug'  => 'dbgradienttextblock',
                        'title' => __( 'Gradient Text', 'db-gradient-text-block' ),
                    ),
                ),
                $categories,
            );
        }

    }
}

new Dbgtb_Category(); // Initialize the class instance 