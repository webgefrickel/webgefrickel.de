<?php

namespace mgfagency\Twig;

use \Kirby\Toolkit\Str;
use \Kirby\Cms\Template;


/**
 * Main Kirby Twig Plugin class, hopefully with a stable API.
 *
 * @package  Kirby Twig Plugin
 * @author   Florens Verschelde <florens@fvsch.com>
 */
class Plugin
{
    /**
     * Renders a Twig template string or template file
     * Can be used in Kirby controllers and PHP templates
     *
     *  * Example usage:
     *
     *     <?php echo twig('Hello {{ who }}', ['who' => 'World']) ?>
     *     <?php echo twig('@snippets/header.twig', ['title' => 'Home page']) ?>
     *     <?php echo twig('@heading', ['text' => 'Hello World']) ?>
     *
     * Note: in Twig templates, you should use the `include` tag or function instead.
     *
     * @param string $template - path or template string to render
     * @param array  $userData - data to pass as variables to the template
     * @return string
     */
    static public function render($patternString, $userData = [], $merge = false) {
    {
        if (!is_string($patternString)) return '';
        $patternString = (strlen($patternString) <= 256) ? trim($patternString) : '';

        $parts = explode('--', $patternString);
        $pattern = trim($patternString, '@');
        $variant = null;
        $file = null;

        if (count($parts) === 2) {
            $pattern = trim($parts[0], '@');
            $variant = $parts[1];
        }

        $file = $pattern . '.html';
        $path = '@pattern/' . $file;

        $defaultData = kalong(($variant) ? $pattern . '--' . $variant : $pattern);
        $data = [];

        if ($merge) {
            if (!empty($userData)) {
                $data = array_merge(Tpl::$data, $defaultData, $userData);
            } else {
                $data = array_merge(Tpl::$data, $defaultData);
            }
        } else {
            if (!empty($userData)) {
                $data = array_merge(Tpl::$data, $userData);
            } else {
                $data = array_merge(Tpl::$data, $defaultData);
            }
        }

        $twig = TwigEnv::instance();

        // treat template as a path only if it *looks like* a Twig template path
        if (Str::startsWith($path, '@') || Str::endsWith(strtolower($path), '.twig')) {
            return $twig->renderPath($path, $data);
        }

        return $twig->renderString($patternString, $data);
    }
}
