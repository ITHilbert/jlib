"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.navigation = void 0;
/**
 * Navigation:
 * Url neu laden, öffnen usw.
 *
 * Weitere Infos:
 * https://www.mediaevent.de/javascript/Javascript-Window-Location.html
 */
class navigation {
    /**
     * Gibt die Aktuelle URL zurück
     * @returns url
     */
    static getURL() {
        return document.location;
    }
    /**
     * Öffne die URL
     * @param url
     */
    static openURL(url) {
        window.location.href = url;
    }
    /**
     * Aktuelle Seite neu Laden
     */
    static reloadPage() {
        window.location.reload();
    }
    /**
     * Gibt die Domain mit Ptrotokoll und Port zurück
     * @returns
     */
    static domain() {
        return window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
    }
}
exports.navigation = navigation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cy9uYXZpZ2F0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBOzs7Ozs7R0FNRztBQUNILE1BQWEsVUFBVTtJQUVyQjs7O09BR0c7SUFDSCxNQUFNLENBQUMsTUFBTTtRQUNYLE9BQU8sUUFBUSxDQUFDLFFBQVEsQ0FBQztJQUMzQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFVO1FBQ3ZCLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztJQUM3QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxNQUFNLENBQUMsVUFBVTtRQUNmLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxNQUFNO1FBQ1gsT0FBTyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxJQUFJLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFBLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5SCxDQUFDO0NBQ0Y7QUFoQ0QsZ0NBZ0NDIn0=