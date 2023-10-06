import './versions.scss';

export default {
    title: 'Versions',
};

export const VersionList = () => {
    const versions = ['v1', 'v2'];

    const versionMap: { [key: string]: string } = {
        'v1': 'index-b3fe3f34.css',
        'v2': 'index-ef63b3f1.css',
    };

    const container = document.createElement('div');
    const list = document.createElement('ul');

    versions.forEach(version => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = `https://apollyV.github.io/Travail/UNIS/styles-storybook/${version}/assets/${versionMap[version]}`;
        link.innerText = version;
        listItem.appendChild(link);

        // Ajout du bouton pour copier le lien
        const copyButton = document.createElement('button');
        copyButton.innerText = 'Copy Link Tag';
        copyButton.onclick = () => {
            const linkTag = `<link rel="stylesheet" href="${link.href}">`;
            navigator.clipboard.writeText(linkTag).then(() => {
                console.log('Link tag copied to clipboard');
            }).catch(err => {
                console.error('Failed to copy link tag: ', err);
            });
        };
        listItem.appendChild(copyButton);

        list.appendChild(listItem);
    });

    container.appendChild(list);
    return container;
};
