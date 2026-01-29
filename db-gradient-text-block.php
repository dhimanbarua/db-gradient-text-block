<?php
/**
 * Plugin Name:       DB Gradient Text Block
 * Description:       DB Gradient Text Block for Gutenberg supported block.
 * Requires at least: 6.0
 * Requires PHP:      7.4
 * Version:           1.0
 * Author:            Dhiman Barua
 * Author URI:        https://makegutenblock.com
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       db-gradient-text-block
 * Domain Path:       /languages
 */

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

if( ! class_exists( 'Dbgtb_Block' ) ) {

	final class Dbgtb_Block {

		protected static $instance = null;

		/**
		 * Constructor
		 * @return void
		 */
		public function __construct() {
			$this->define_constants();
			$this->includes();
			$this->assets_manager();
		}

		/**
		 * Definte the plugin constants
		 * @return void
		 */
		public function define_constants() {
			define( 'DBGTB_VERSION', '1.0.0' );
			define( 'DBGTB_DIR', __DIR__ );
			define( 'DBGTB_URL', plugin_dir_url( __FILE__ ) );
			define( 'DBGTB_PATH', plugin_dir_path( __FILE__ ) );
		}

		/**
		 * Include all the required files
		 * @return void
		 */
		public function includes() {
			require_once __DIR__ . '/inc/loader.php';
		}

		/**
		 * Include all the required files
		 * @return void
		 */
		public function assets_manager() {
			
			function dbgtb_block_enqueue_scripts() {
				wp_enqueue_script( 'dbgtb_wow', DBGTB_URL . "assets/js/wow.min.js", array( 'jquery' ), '1.0.0', false );
				wp_enqueue_script( 'dbgtb_wow_activation', DBGTB_URL . "assets/js/wow-activation.js", array( 'jquery' ), '1.0.0', false );
			}
			add_action( 'wp_enqueue_scripts', 'dbgtb_block_enqueue_scripts' );
			function dbgtb_block_admin_enqueue_scripts() {
				wp_enqueue_script( 'dbgtb_wow', DBGTB_URL . "assets/js/wow.min.js", array( 'jquery' ), '1.0.0', false );
				wp_enqueue_script( 'dbgtb_wow_activation', DBGTB_URL . "assets/js/wow-activation.js", array( 'jquery' ), '1.0.0', false );
			}
			add_action( 'admin_enqueue_scripts', 'dbgtb_block_admin_enqueue_scripts' );
		}

		/**
		 * Initialize the plugin
		 * @return \Gtb_Block
		 */
		public static function init() {
			if( is_null( self::$instance ) ) {
				self::$instance = new self();
			}
			return self::$instance;
		}
	}
}

/**
 * Initialize the plugin
 * @return \Gtb_Block
 */
function dbgtb_blocks_init() {
	return Dbgtb_Block::init();
}

// kick-off the plugin
dbgtb_blocks_init();
