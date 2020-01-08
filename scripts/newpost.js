const fs = require('fs');

const createPost = () => {
    const title = process.argv.slice(2).join(' ');

    if (!title) {
        console.log('Provide title please')
        return;
    }

    const slug = title
            .replace(/\s+/g, '-')
            .replace(/\?+/g, '')
            .replace(/\'+/g, '')
            .toLowerCase();

    const frontMatter = (
`---
title: ${title}
date: ${new Date().toISOString()}
template: "post"
draft: false
slug: ${slug}
category: ""
description: ""
---\n`);

    const postsPath = `content/posts/${slug}.md`;
    fs.writeFileSync(postsPath, frontMatter);
}

createPost();
