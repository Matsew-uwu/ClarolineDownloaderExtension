// This function will get all of the node items from the current tab and return the NodeList
const getDOMContent = () => {
    return document.body.innerHTML;
}  

const getNodeList = () => {
    return document.querySelectorAll(".node-thumbnail");
}

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

            

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.type === "getDOMContent") {
        sendResponse({DOM: getDOMContent()});
    } else if (request.type === "getNodeList") {
        sendResponse({nodes: getNodeList()});
    } else if (request.type === "getNodesInformation") {
        sendResponse({nodesInformation: getNodesInformation()});
    }
});

alert("content.js loaded");