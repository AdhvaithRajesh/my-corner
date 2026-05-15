class blogEntry extends HTMLElement {
    connectedCallback(){
        const title = this.getAttribute("title");
        const date = this.getAttribute("date");
        const description = this.getAttribute("description");
        const href = this.getAttribute("href");

        this.innerHTML = `
        <a href="${href}" class="blog-entry-link">
            <div class="blog-entry">
                <div class="blog-entry-header">
                    <h2 class="blog-entry-title">${title}</h2>
                    <h3 class="blog-entry-date">${date}</h3>
                </div>
                <span>${description}</span>
            </div>
        </a>
        `
    }
}

customElements.define("blog-entry", blogEntry);