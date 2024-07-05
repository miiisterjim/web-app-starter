export async function fetchContent() {    
    const response = await fetch(`/hello-world`);
    return response.json();
}

export function displayContent(contentData) {
     // Select the element in the DOM to display our content
    const displayDiv = document.getElementById('content-display');
    
    // write the response to the screen
    displayDiv.innerHTML = `<p>${contentData.content}</p>`;
}

document.getElementById('get-content-btn').addEventListener('click', async () => {   
    const contentData = await fetchContent();
    displayContent(contentData);   
});