<?php
// Enqueue styles and scripts
function mak2com_theme_enqueue_styles() {
    wp_enqueue_style('mak2com-style', get_stylesheet_uri());
    wp_enqueue_script('mak2com-script', get_template_directory_uri() . '/js/script.js', array('jquery'), '1.0', true);
}
add_action('wp_enqueue_scripts', 'mak2com_theme_enqueue_styles');

// Add theme support
function mak2com_theme_setup() {
    // Add post thumbnail support
    add_theme_support('post-thumbnails');

    // Add custom logo support
    add_theme_support('custom-logo');

    // Add custom menu support
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'mak2com'),
        'footer' => __('Footer Menu', 'mak2com'),
    ));
}
add_action('after_setup_theme', 'mak2com_theme_setup');

// Register widget areas
function mak2com_theme_widgets_init() {
    register_sidebar(array(
        'name' => __('Sidebar', 'mak2com'),
        'id' => 'sidebar-1',
        'description' => __('Add widgets here to appear in the sidebar.', 'mak2com'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget' => '</section>',
        'before_title' => '<h2 class="widget-title">',
        'after_title' => '</h2>',
    ));
}
add_action('widgets_init', 'mak2com_theme_widgets_init');