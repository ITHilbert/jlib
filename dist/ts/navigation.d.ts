/**
 * Navigation:
 * Url neu laden, öffnen usw.
 *
 * Weitere Infos:
 * https://www.mediaevent.de/javascript/Javascript-Window-Location.html
 */
export declare class navigation {
    /**
     * Gibt die Aktuelle URL zurück
     * @returns url
     */
    static getURL(): Location;
    /**
     * Öffne die URL
     * @param url
     */
    static openURL(url: string): void;
    /**
     * Aktuelle Seite neu Laden
     */
    static reloadPage(): void;
    /**
     * Gibt die Domain mit Ptrotokoll und Port zurück
     * @returns
     */
    static domain(): string;
}
