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
            title: 'Animal'
        }
    ]
}