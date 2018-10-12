import { Theme } from '@theia/core/lib/browser/theming';

export class Spooky {

    static readonly darkCss = require('../../src/browser/style/variables-spooky-useable.css');

    static readonly spookyTheme: Theme = {
        id: 'spooky:theme',
        label: 'Spooky Dark Theme',
        description: 'A Dark Spooky Theme',
        editorTheme: 'vs-dark',
        activate() {
            Spooky.darkCss.use();
        },
        deactivate() {
            Spooky.darkCss.unuse();
        }
    }

    static readonly themes = [
        Spooky.spookyTheme,
    ];

}
