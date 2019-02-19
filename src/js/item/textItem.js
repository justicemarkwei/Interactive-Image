import BaseItem from "./baseItem";

/**
 * @extends BaseItem
 */
export default class TextItem extends BaseItem {
    /**
     * @param {object} parameters
     */
    constructor(parameters) {
        super(parameters);

        this.checkRequiredParameters(parameters, ['title', 'description']);

        this.title = parameters.title.toLowerCase();
        this.description = parameters.description;
        this.picturePath = parameters.picturePath;
        this.link = parameters.link;
    }

    /**
     * @returns {HTMLElement}
     */
    createTitle() {
        return this.domHelper.createElement('span', {'class': 'title'}, this.title);
    }

    /**
     * @returns {HTMLElement}
     */
    createDescription() {
        return this.domHelper.createElement('p', {'class': 'description'}, this.description);
    }

    /**
     * @returns {HTMLElement}
     */
    createPicture() {
        const element = this.domHelper.createElement('img', {'class': 'picture'});
        element.src = this.picturePath;
        element.alt = this.title;

        return element;
    }

    /**
     * @returns {HTMLElement}
     */
    createLink() {
        const element = document.createElement('a');
        element.href = this.link.url;

        let label;
        if ('undefined' !== typeof this.link.label) {
            label = this.link.label;
        } else {
            label = this.link.href;
        }

        element.appendChild(document.createTextNode(label));

        return element;
    }

    /**
     * @returns {HTMLElement}
     */
    renderHtml() {
        const element = this.createItemElement();
        const textElement = this.domHelper.createElement('div', {'class': 'text-item'});

        textElement.appendChild(this.createTitle());
        textElement.appendChild(this.createDescription());

        if ('undefined' !== typeof this.picturePath) {
            textElement.appendChild(this.createPicture());
        }

        if ('undefined' !== typeof this.link) {
            textElement.appendChild(this.createLink());
        }

        element.appendChild(textElement);

        return element;
    }
}
