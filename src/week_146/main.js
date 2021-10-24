
function btnSVGExportClick() {
  var rendererSVG = new THREE.SVGRenderer();
  
  rendererSVG.setSize(window.innerWidth, window.innerHeight);
  rendererSVG.render(scene, camera);
  ExportToSVG(rendererSVG, "test.svg");
}

function ExportToSVG(rendererSVG, filename) {
  var XMLS = new XMLSerializer();
  var svgfile = XMLS.serializeToString(rendererSVG.domElement);
  var svgData = svgfile;
  var preface = '<?xml version="1.0" standalone="no"?>\r\n';
  var svgBlob = new Blob([preface, svgData], {
    type: "image/svg+xml;charset=utf-8"
  });
  var svgUrl = URL.createObjectURL(svgBlob);
  var downloadLink = document.createElement("a");
  
  downloadLink.href = svgUrl;
  downloadLink.download = filename;
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}