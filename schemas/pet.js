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
        },
        {
            name: 'description',
            type: 'string',
            title: 'Description'
        },
        // {
        //     name: 'medication',
        //     type: 'reference',
        //     title: 'Medication',
        //     of: [{type: 'medication'}]
        // },
        {
            name: 'vaccination',
            type: 'array',
            title: 'Vaccination',
            of: []
        },
        {
            name: 'owner',
            type: 'reference',
            title: 'Owner',
            to: [{type: 'owner'}]
        }
    ]
}