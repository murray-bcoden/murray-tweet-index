<?php

// Incorporating elements from http://html5blank.com/

/*  ==========================================================================
    Theme support
    ========================================================================== */

if (function_exists('add_theme_support'))
{
    // Add Menu Support
    add_theme_support('menus');

    // Add Thumbnail Theme Support
    add_theme_support('post-thumbnails');
    add_image_size('large', 700, '', true); // Large Thumbnail
    add_image_size('medium', 250, '', true); // Medium Thumbnail
    add_image_size('small', 120, '', true); // Small Thumbnail
    add_image_size('custom-size', 700, 200, true); // Custom Thumbnail Size call using the_post_thumbnail('custom-size');
}

/*  ==========================================================================
    Functions
    ========================================================================== */

// Remove thumbnail width and height dimensions that prevent fluid images in the_thumbnail
function remove_thumbnail_dimensions( $html )
{
    $html = preg_replace('/(width|height)=\"\d*\"\s/', "", $html);
    return $html;
}

// add mobile class to body if mobile detected
function my_body_classes( $classes ) {
    if ( wp_is_mobile()){ 
        $classes[] = 'is-mobile'; 
    }    
    return $classes;
}

// register/deregister js
function LoadMainJS() {
    if(!is_admin()) {
        wp_deregister_script('jquery');
        wp_register_script('jquery', "http" . ($_SERVER['SERVER_PORT'] == 443 ? "s" : "") . "://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js", false, null);
        wp_enqueue_script('jquery');
        wp_enqueue_script( 'main-min.js', get_template_directory_uri() . '/assets/js/min/main-min.js', array('jquery') );
    }
}

// remove versioning on scripts
function remove_cssjs_ver( $src ) {
    if( strpos( $src, '?ver=' ) ) {
        $src = remove_query_arg( 'ver', $src );
        return $src;
    }
}

// Remove Contact Form 7 Links from dashboard menu items if not admin
function remove_wpcf7() {
    if (!(current_user_can('administrator'))) {
        remove_menu_page( 'wpcf7' ); 
    }
}

// remove admin menu items
function remove_menus(){
  
    //remove_menu_page( 'index.php' );                  //Dashboard
    //remove_menu_page( 'edit.php' );                   //Posts
    //remove_menu_page( 'upload.php' );                 //Media
    //remove_menu_page( 'edit.php?post_type=page' );    //Pages
    //remove_menu_page( 'edit-comments.php' );          //Comments
    //remove_menu_page( 'themes.php' );                 //Appearance
    //remove_menu_page( 'plugins.php' );                //Plugins
    //remove_menu_page( 'users.php' );                  //Users
    //remove_menu_page( 'tools.php' );                  //Tools
    //remove_menu_page( 'options-general.php' );        //Settings
  
}

// Disable pingbacks only, ref: http://wptavern.com/how-to-prevent-wordpress-from-participating-in-pingback-denial-of-service-attacks
function remove_xmlrpc_pingback_ping( $methods ) {
    unset( $methods['pingback.ping'] );
    return $methods;
};

// add an ACF options page
if( function_exists('acf_add_options_page') ) {
    acf_add_options_page();
}

// add filter to stop tinymce removing other elements e.g. <span>
function myextensionTinyMCE($init) {
    // Command separated string of extended elements
    $ext = 'span[id|name|class|style]';

    // Add to extended_valid_elements if it alreay exists
    if ( isset( $init['extended_valid_elements'] ) ) {
        $init['extended_valid_elements'] .= ',' . $ext;
    } else {
        $init['extended_valid_elements'] = $ext;
    }

    // Super important: return $init!
    return $init;
}

// Add block format elements you want to show in dropdown
function customformatTinyMCE($init) {
    $init['block_formats'] = "Paragraph=p; Heading 2=h2; Heading 3=h3; Heading 4=h4";
    return $init;
}

// limit the excerpt length in characters
function get_excerpt(){
    $excerpt = get_the_content();
    $excerpt = preg_replace(" (\[.*?\])",'',$excerpt);
    $excerpt = strip_shortcodes($excerpt);
    $excerpt = strip_tags($excerpt);
    $excerpt = substr($excerpt, 0, 120);
    $excerpt = substr($excerpt, 0, strripos($excerpt, " "));
    $excerpt = trim(preg_replace( '/\s+/', ' ', $excerpt));
    $excerpt = '<p>'.$excerpt.'...</p>';
    return $excerpt;
}

// Numbered Pagination
if ( !function_exists( 'printPagination' ) ) {
    
    function printPagination() {
        
        global $wp_query;
        $total = $wp_query->max_num_pages;
        $big = 999999999; // need an unlikely integer
        if( $total > 1 )  {
             if( !$current_page = get_query_var('paged') )
                 $current_page = 1;
             if( get_option('permalink_structure') ) {
                 $format = 'page/%#%/';
             } else {
                 $format = '&paged=%#%';
             }
            $paginate_links =  paginate_links(array(
                'base'          => str_replace( $big, '%#%', esc_url( get_pagenum_link( $big ) ) ),
                'format'        => $format,
                'current'       => max( 1, get_query_var('paged') ),
                'total'         => $total,
                'mid_size'      => 3,
                'prev_next'     => true,
                'type'          => 'list',
                'prev_text'     => 'Prev',
                'next_text'     => 'Next',
             ) );

            if ( $paginate_links ) {
                echo $paginate_links;
            }
        }
    }
}

// check if there are prev or next pages available for the post list
function has_previous_post() {
    ob_start();
    previous_post_link();
    $result = strlen(ob_get_contents());
    ob_end_clean();
    return $result; 
}

function has_next_post() {
    ob_start();
    next_post_link();
    $result = strlen(ob_get_contents());
    ob_end_clean();
    return $result;
}

// add my custom image sizes to the admin list
function my_custom_sizes( $sizes ) {
    return array_merge( $sizes, array(
        'article-main' => __( 'Featured srticle image' ),
        'property' => __( 'Large image (full width)' ),
        'medium-image' => __( 'Medium image' ),
        'small-image' => __( 'Small image' ),
        // 'article-medium' => __( 'Medium thumbail' ),
        // 'article-small' => __( 'Small thumbnail' ),
        'profile-small' => __( 'Small profile image' ),
        'profile-large' => __( 'Large profile image' )
    ) );
}

// remove the WP default image sizes
function remove_default_image_sizes($sizes) {
    unset( $sizes['thumbnail']);
    unset( $sizes['medium']);
    unset( $sizes['large']);
    return $sizes;
}

/* Remove p tags from around images in posts */
function filter_ptags_on_images($content){
   return preg_replace('/<p>\s*(<a .*>)?\s*(<img .* \/>)\s*(<\/a>)?\s*<\/p>/iU', '\1\2\3', $content);
}

/*  ==========================================================================
    Actions, Filters, andd Shortcodes
    ========================================================================== */

// Add Actions
add_action( 'wp_enqueue_scripts', 'LoadMainJS', 100 ); // register/deregister js
add_action( 'admin_menu', 'remove_menus' ); // remove admin menu items
add_action('admin_menu', 'remove_wpcf7'); //Remove Contact Form 7 Links from dashboard menu items if not admin 

// Remove Actions
remove_action('wp_head', 'feed_links_extra', 3); // Display the links to the extra feeds such as category feeds
remove_action('wp_head', 'feed_links', 2); // Display the links to the general feeds: Post and Comment Feed
remove_action('wp_head', 'rsd_link'); // Display the link to the Really Simple Discovery service endpoint, EditURI link
remove_action('wp_head', 'wlwmanifest_link'); // Display the link to the Windows Live Writer manifest file.
remove_action('wp_head', 'index_rel_link'); // Index link
remove_action('wp_head', 'parent_post_rel_link', 10, 0); // Prev link
remove_action('wp_head', 'start_post_rel_link', 10, 0); // Start link
remove_action('wp_head', 'adjacent_posts_rel_link', 10, 0); // Display relational links for the posts adjacent to the current post.
remove_action('wp_head', 'wp_generator'); // Display the XHTML generator that is generated on the wp_head hook, WP version
remove_action('wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0);
remove_action('wp_head', 'rel_canonical');
remove_action('wp_head', 'wp_shortlink_wp_head', 10, 0);

// Add Filters
add_filter('post_thumbnail_html', 'remove_thumbnail_dimensions', 10); // Remove width and height dynamic attributes to thumbnails
add_filter('image_send_to_editor', 'remove_thumbnail_dimensions', 10); // Remove width and height dynamic attributes to post images
add_filter( 'body_class','my_body_classes' ); // add mobile class to body
add_filter( 'xmlrpc_methods', 'remove_xmlrpc_pingback_ping' ); // Disable pingbacks only, ref: http://wptavern.com/how-to-prevent-wordpress-from-participating-in-pingback-denial-of-service-attacks
add_filter('tiny_mce_before_init', 'myextensionTinyMCE' ); // add filter to stop tinymce removing other elements e.g. <span>
add_filter('tiny_mce_before_init', 'customformatTinyMCE' ); // Modify Tiny_MCE init
add_filter( 'image_size_names_choose', 'my_custom_sizes' ); // add my custom image sizes to the admin list
add_filter('the_content', 'filter_ptags_on_images'); /* Remove p tags from around images in posts */
add_filter('style_loader_src', 'remove_cssjs_ver', 10 ); // Remove versioning from scripts
add_filter('script_loader_src', 'remove_cssjs_ver', 10 ); // Remove versioning from scripts
//add_filter('intermediate_image_sizes_advanced', 'remove_default_image_sizes'); // remove the WP default image sizes

// Remove Filters


// Shortcodes


/*  ==========================================================================
    Custom Post Types
    ========================================================================== */

// Create 1 Custom Post type for a Demo, called HTML5-Blank
// function create_post_type_html5()
// {
//     register_taxonomy_for_object_type('category', 'html5-blank'); // Register Taxonomies for Category
//     register_taxonomy_for_object_type('post_tag', 'html5-blank');
//     register_post_type('html5-blank', // Register Custom Post Type
//         array(
//         'labels' => array(
//             'name' => __('HTML5 Blank Custom Post', 'html5blank'), // Rename these to suit
//             'singular_name' => __('HTML5 Blank Custom Post', 'html5blank'),
//             'add_new' => __('Add New', 'html5blank'),
//             'add_new_item' => __('Add New HTML5 Blank Custom Post', 'html5blank'),
//             'edit' => __('Edit', 'html5blank'),
//             'edit_item' => __('Edit HTML5 Blank Custom Post', 'html5blank'),
//             'new_item' => __('New HTML5 Blank Custom Post', 'html5blank'),
//             'view' => __('View HTML5 Blank Custom Post', 'html5blank'),
//             'view_item' => __('View HTML5 Blank Custom Post', 'html5blank'),
//             'search_items' => __('Search HTML5 Blank Custom Post', 'html5blank'),
//             'not_found' => __('No HTML5 Blank Custom Posts found', 'html5blank'),
//             'not_found_in_trash' => __('No HTML5 Blank Custom Posts found in Trash', 'html5blank')
//         ),
//         'public' => true,
//         'hierarchical' => true, // Allows your posts to behave like Hierarchy Pages
//         'has_archive' => true,
//         'supports' => array(
//             'title',
//             'editor',
//             'excerpt',
//             'thumbnail'
//         ), // Go to Dashboard Custom HTML5 Blank post for supports
//         'can_export' => true, // Allows export in Tools > Export
//         'taxonomies' => array(
//             'post_tag',
//             'category'
//         ) // Add Category and Post Tags support
//     ));
// }

/*  ==========================================================================
    Shortcode Functions
    ========================================================================== */


?>
