export default {
    name: 'feedback',
    type: 'document',
    title: 'Feedback',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Client name'
        },
        {
            name: 'position',
            type: 'string',
            title: 'Client title/position'
        },
        {
            name: 'feedback',
            type: 'string',
            title: 'Client feedback'
        },
        {
            name: 'rating',
            type: 'string',
            title: 'Client rating',
                options: {
                    list: [
                    {title: '1', value: '1'},
                    {title: '2', value: '2'},
                    {title: '3', value: '3'},
                    {title: '4', value: '4'},
                    {title: '5', value: '5'},
                ]}
        },
    ]
}