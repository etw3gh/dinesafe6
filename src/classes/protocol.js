/*
 Based on this example: http://stackoverflow.com/a/4723302/6826791
 Force a switch to https if the host is not local host.

 Localhost should always connect by http
*/
export class Protocol {

  static HTTP = 'http:'
  static HTTPS = 'https:'

  static isHttps = () => {
    return location.protocol === Protocol.HTTPS
  }
  static isLocal = () => {
    return location.href.indexOf('localhost') > -1
  }
  static reformHref = ( protocol ) => {
    const protocolLen = window.location.protocol.length
    const currentHref = window.location.href
    return protocol + currentHref.substring(protocolLen)
  }

  static forceProtocol = () => {
    // force https if not running on localhost and protocol is not already https
    if (!Protocol.isHttps() && !Protocol.isLocal()) {
      const href = Protocol.reformHref(Protocol.HTTPS)
      location.href = href
    }
  }
}
