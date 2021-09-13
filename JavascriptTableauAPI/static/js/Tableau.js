function initViz() {
  var containerDiv = document.getElementById("containerDiv"),
  url = "https://public.tableau.com/shared/J7D3DTYQ9?:display_count=n&:origin=viz_share_link&:embed=y";

  var viz = new tableau.Viz(containerDiv, url);
}


