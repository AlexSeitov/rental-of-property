export default function moveLinkMarker(
  navListSelector,
  navItemSelector,
  markerSelector
) {
  const navList = document.querySelectorAll(navListSelector);
  const navItem = document.querySelectorAll(navItemSelector);
  const markers = document.querySelectorAll(markerSelector);

  function moveMarker(e) {
    markers.forEach((marker) => {
      const markerItem = marker;
      if (e) {
        markerItem.style.left = e.offsetLeft + 'px';
        markerItem.style.width = e.offsetWidth + 'px';
      } else {
        markerItem.style.width = 0;
      }
    });
  }

  navItem.forEach((link) => {
    link.addEventListener('mouseover', (e) => {
      moveMarker(e.target);
    });
  });

  navList.forEach((listItem) => {
    listItem.addEventListener('mouseout', () => {
      moveMarker();
    });
  });
}
