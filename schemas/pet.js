export default {
    name: 'pet', 
    type: 'document', 
    title: 'Pet', 
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'birthdate',
            type: 'date',
            title: 'Date of birth'
        },
        {
            name: 'type',
            type: 'string',
            title: 'Type of animal'
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image of pet',
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
        }
    ]
}