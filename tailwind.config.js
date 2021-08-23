/*

Tailwind - The Utility-First CSS Framework

A project by Adam Wathan (@adamwathan), Jonathan Reinink (@reinink),
David Hemphill (@davidhemphill) and Steve Schoger (@steveschoger).

Welcome to the Tailwind config file. This is where you can customize
Tailwind specifically for your project. Don't be intimidated by the
length of this file. It's really just a big JavaScript object and
we've done our very best to explain each section.

View the full documentation at https://tailwindcss.com.
*/

// See defaults: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
module.exports = {
    mode: 'jit',
    purge: {
        // We use the plugin "tailwindcss-forms" which adds reset styles for form elements. However, since purgecss cannot find
        // any html input fields in our Twig templates (form directives), it strips the styles. Therefore, we don't allow purging the
        // Base layer of Tailwind. @see https://github.com/tailwindlabs/tailwindcss-forms/issues/43#issuecomment-791465128
        layers: ['components', 'utilities'],

        // Purge our generated CSS and only leave the css classes found in these files.
        content: [
            './Core/Layout/Templates/**/*.{twig,html}',
            './Core/Layout/EditorTemplates/**/*.{twig,html}',
            './Core/Js/**/*.{js,jsx,ts,tsx}',
            './Modules/**/Layout/{Templates,Widgets}/**/*.{twig,html}',
        ],
    },
    plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
