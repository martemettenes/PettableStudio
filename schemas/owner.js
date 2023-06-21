export default {
    name: 'owner',
    type: 'document',
    title: 'Owner',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'address',
            type: 'string',
            title: 'Address'
        },
        {
            name: 'phone',
            type: 'string',
            title: 'Phone'
        },
        {
            name: 'email',
            type: 'string',
            title: 'Email'
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image of owner',
            options: {
                hotspot: true // <-- Defaults to false
            },
            fields: [
                {
                    name: 'caption',
                    type: 'string',
                    title: 'Caption',
                },
                {
                    name: 'attribution',
                    type: 'string',
                    title: 'Attribution',
                }
            ]
        },
        {
            name: 'pets',
            type: 'array',
            title: 'Pets',
            of: [{type: 'reference', to: [{type: 'pet'}]}]
        }
    ]


}