// script.js

// Get reference to the tree element
const tree = document.getElementById("tree");

// Add a click event listener to the tree for event bubbling
tree.addEventListener("click", function (event) {
  const target = event.target;

  // Check if the clicked element is a span (node)
  if (target.tagName === "SPAN") {
    // Log information about the clicked node
    const nodeText = target.textContent.trim();
    const nodeDepth = getNodeDepth(target);
    console.log(`Clicked on ${nodeText} at depth ${nodeDepth}`);
  }
});

// Function to calculate the depth of a node in the tree
function getNodeDepth(node) {
  let depth = 0;
  while (node.parentElement && node.parentElement.tagName === "LI") {
    depth++;
    node = node.parentElement;
  }
  return depth;
}
