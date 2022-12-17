
chrome.tabs.query({active: true, currentWindow: true}, async function(tabs) {
  let [tab] = await chrome.tabs.query({active: true, currentWindow: true});

  let response = await chrome.tabs.sendMessage(tab.id, {type: "getNodesInformation"});
  
  const nodes = response.nodesInformation;

  let fileList = document.getElementById("file-list");

  for (let i = 0; i < nodes.length; i++) {
    let node = nodes[i];
    const listGroupItem = document.createElement('li');
    listGroupItem.id = node.id;
    listGroupItem.classList.add('list-group-item', 'list-group-item-action');

    const container = document.createElement('div');
    container.classList.add('list-group-item__container');

    const text = document.createElement('div');
    text.classList.add('list-group-item__text');
    text.textContent = node.title;

    const icon = document.createElement('div');
    icon.classList.add('list-group-item__icon');

    const iconElem = document.createElement('i');
    iconElem.classList.add('material-icons');
    // iconElem.textContent = 'check';

    icon.appendChild(iconElem);
    container.appendChild(text);
    container.appendChild(icon);
    listGroupItem.appendChild(container);

    listGroupItem.addEventListener('click', function() {
        let newURL = `https://clarolineconnect.univ-lyon1.fr/clarolinepdfplayerbundle/pdf/${node.id}`	;
        chrome.tabs.create({ url: newURL });
    });

    fileList.appendChild(listGroupItem);
  }
  
});



