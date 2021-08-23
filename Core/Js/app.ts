// Styles
import '../Layout/Css/app.css';

// Components
import { testComponent } from './components/test-component';

/**
 * Initialize components when document is ready.
 */
document.addEventListener('DOMContentLoaded', () => {
    testComponent('.my-selector');

    // Dynamic imports with code splitting for lazy loading
    // Lazy, or "on demand", loading is a great way to optimize your site or application. This practice essentially involves splitting your
    // code at logical breakpoints, and then loading it once the user has done something that requires, or will require, a new block of code.
    // This speeds up the initial load of the application and lightens its overall weight as some blocks may never even be loaded.
    if (document.getElementById('lazy-app')) {
        import('./components/lazy-component').then((component) => component.lazyComponent('#lazy-app'));
    }
});
