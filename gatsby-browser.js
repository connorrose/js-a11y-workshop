exports.onRouteUpdate = ({ location, prevLocation }) => {
  if (prevLocation) {
    const skipLink = document.querySelector('.routeSkipLink');
    if (skipLink) {
      skipLink.focus();
    }
  }
}