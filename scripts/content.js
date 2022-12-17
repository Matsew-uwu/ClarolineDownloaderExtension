// Retrive all the node containing the .node-thumbnail class
const getNodesInformation = () => {
    let nodes = document.querySelectorAll(".node-thumbnail");
    let nodesInformation = [];
    for (let i = 0; i < nodes.length; i++) {
        let node = nodes[i];
        nodesInformation.push({
            title: node.innerText,
            id: node.id,
        })
    }
    return nodesInformation
}

// When it receives a message from the popup, it will send back a list of objects 
// containing the file informations according to the DOM
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.type === "getDOMContent") {
        sendResponse({ DOM: getDOMContent() });
    } else if (request.type === "getNodeList") {
        sendResponse({ nodes: getNodeList() });
    } else if (request.type === "getNodesInformation") {
        sendResponse({ nodesInformation: getNodesInformation() });
    }
});