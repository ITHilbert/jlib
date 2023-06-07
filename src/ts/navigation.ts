/**
 * Navigation:
 * Url neu laden, öffnen usw.
 *
 * Weitere Infos:
 * https://www.mediaevent.de/javascript/Javascript-Window-Location.html
 */
export class navigation
{
  /**
   * Gibt die Aktuelle URL zurück
   * @returns url
   */
  static getURL(){
    return document.location;
  }

  /**
   * Öffne die URL
   * @param url
   */
  static openURL(url:string) {
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
  static domain(){
    return window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
  }
}
