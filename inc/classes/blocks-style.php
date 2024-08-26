<?php
/**
 * Register Dynamic Styles for Blocks
 * @package Gtb
 */

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

if( ! class_exists( 'Dbgtb_Dynamic_Style' ) ) {

    class Dbgtb_Dynamic_Style {
        
        /**
         * Constructor
         * @return void
         */
        public function __construct() {
            add_filter( 'render_block', [ $this, 'dbgtb_dynamic_style' ], 10, 2 );
        }

        /**
         * Generate Dynamic Style
         * @return string
         */
        function dbgtb_dynamic_style( $block_content, $block ) {
            if ( isset( $block[ 'blockName' ] ) && str_contains( $block[ 'blockName' ], 'dbgradienttextblock/' ) ) {
                if ( isset( $block[ 'attrs' ][ 'blockStyle' ] ) ) {
                    $style = $block[ 'attrs' ][ 'blockStyle' ];
                    $handle = isset( $block[ 'attrs' ][ 'uniqueId' ] ) ? $block[ 'attrs' ][ 'uniqueId' ] : 'dbgradienttextblock-blocks';
    
                    // convert style array to string
                    if ( is_array( $style ) ) {
                        $style = implode( ' ', $style );
                    }
    
                    // minify style to remove extra space
                    $style = preg_replace( '/\s+/', ' ', $style );
                    
                    wp_register_style( $handle, false, '', 'DBGTB_VERSION');
                    wp_enqueue_style( $handle );
                    wp_add_inline_style( $handle, $style );
    
                }
            }
            return $block_content;
        }
    }
}

new Dbgtb_Dynamic_Style(); // Initialize the class instance