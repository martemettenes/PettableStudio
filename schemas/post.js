export default {
    name: 'post',
    type: 'document',
    title: 'Post',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'intro',
            type: 'string',
            title: 'Intro'
        },
        {
            name: 'body',
            type: 'string',
            title: 'Body'
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image'
        },
    ]
}