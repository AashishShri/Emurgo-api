'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">emurgo-api documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-666daf8d889a3772ab79eae0c3d7160da28bc825a792ae116fd75dba6b010eb7c2a7331be8165742ea0730c3bfeb74d433b5f9591be9bd6c38ce12b4537f0f2d"' : 'data-bs-target="#xs-controllers-links-module-AppModule-666daf8d889a3772ab79eae0c3d7160da28bc825a792ae116fd75dba6b010eb7c2a7331be8165742ea0730c3bfeb74d433b5f9591be9bd6c38ce12b4537f0f2d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-666daf8d889a3772ab79eae0c3d7160da28bc825a792ae116fd75dba6b010eb7c2a7331be8165742ea0730c3bfeb74d433b5f9591be9bd6c38ce12b4537f0f2d"' :
                                            'id="xs-controllers-links-module-AppModule-666daf8d889a3772ab79eae0c3d7160da28bc825a792ae116fd75dba6b010eb7c2a7331be8165742ea0730c3bfeb74d433b5f9591be9bd6c38ce12b4537f0f2d"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-666daf8d889a3772ab79eae0c3d7160da28bc825a792ae116fd75dba6b010eb7c2a7331be8165742ea0730c3bfeb74d433b5f9591be9bd6c38ce12b4537f0f2d"' : 'data-bs-target="#xs-injectables-links-module-AppModule-666daf8d889a3772ab79eae0c3d7160da28bc825a792ae116fd75dba6b010eb7c2a7331be8165742ea0730c3bfeb74d433b5f9591be9bd6c38ce12b4537f0f2d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-666daf8d889a3772ab79eae0c3d7160da28bc825a792ae116fd75dba6b010eb7c2a7331be8165742ea0730c3bfeb74d433b5f9591be9bd6c38ce12b4537f0f2d"' :
                                        'id="xs-injectables-links-module-AppModule-666daf8d889a3772ab79eae0c3d7160da28bc825a792ae116fd75dba6b010eb7c2a7331be8165742ea0730c3bfeb74d433b5f9591be9bd6c38ce12b4537f0f2d"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/newsModule.html" data-type="entity-link" >newsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-newsModule-50efe85a7476bcb0d75b205baaa529fe225015c3e8a5ffa72a1bd85c39ab165fbbfb80c9b769cf7cda147eea89cb3abe39ec92b56ccab8ce8b7a43c2cb42eb80"' : 'data-bs-target="#xs-controllers-links-module-newsModule-50efe85a7476bcb0d75b205baaa529fe225015c3e8a5ffa72a1bd85c39ab165fbbfb80c9b769cf7cda147eea89cb3abe39ec92b56ccab8ce8b7a43c2cb42eb80"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-newsModule-50efe85a7476bcb0d75b205baaa529fe225015c3e8a5ffa72a1bd85c39ab165fbbfb80c9b769cf7cda147eea89cb3abe39ec92b56ccab8ce8b7a43c2cb42eb80"' :
                                            'id="xs-controllers-links-module-newsModule-50efe85a7476bcb0d75b205baaa529fe225015c3e8a5ffa72a1bd85c39ab165fbbfb80c9b769cf7cda147eea89cb3abe39ec92b56ccab8ce8b7a43c2cb42eb80"' }>
                                            <li class="link">
                                                <a href="controllers/newsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >newsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-newsModule-50efe85a7476bcb0d75b205baaa529fe225015c3e8a5ffa72a1bd85c39ab165fbbfb80c9b769cf7cda147eea89cb3abe39ec92b56ccab8ce8b7a43c2cb42eb80"' : 'data-bs-target="#xs-injectables-links-module-newsModule-50efe85a7476bcb0d75b205baaa529fe225015c3e8a5ffa72a1bd85c39ab165fbbfb80c9b769cf7cda147eea89cb3abe39ec92b56ccab8ce8b7a43c2cb42eb80"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-newsModule-50efe85a7476bcb0d75b205baaa529fe225015c3e8a5ffa72a1bd85c39ab165fbbfb80c9b769cf7cda147eea89cb3abe39ec92b56ccab8ce8b7a43c2cb42eb80"' :
                                        'id="xs-injectables-links-module-newsModule-50efe85a7476bcb0d75b205baaa529fe225015c3e8a5ffa72a1bd85c39ab165fbbfb80c9b769cf7cda147eea89cb3abe39ec92b56ccab8ce8b7a43c2cb42eb80"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/newsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >newsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/newsDTO.html" data-type="entity-link" >newsDTO</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});