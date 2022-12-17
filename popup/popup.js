
chrome.tabs.query({active: true, currentWindow: true}, async function(tabs) {
  let [tab] = await chrome.tabs.query({active: true, currentWindow: true});

  let response = await chrome.tabs.sendMessage(tab.id, {type: "getNodesInformation"});
  
  const nodes = response.nodesInformation;

  let nodesList = document.getElementById("node-list");

  for (let i = 0; i < nodes.length; i++) {
    let node = nodes[i];
    let nodeItem = document.createElement("li");
    nodeItem.innerText = node.title;
    nodeItem.id = node.id;
    nodesList.appendChild(nodeItem);
  }
});

