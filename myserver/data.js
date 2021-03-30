export const data = {
    webpagedata: {
        title: 'Our Courses',
        bgcolor: 'wheat',
        fontColor: '#333',
        items: [
            { id: 1, title: 'PHP', price: 10, discount: 10, description: 'lorem ipsum dolor sit amet, consectet', thumbnail: 'http: //via.placeholder.com/150', rating: 5 },
            { id: 2, title: 'HTML', price: 6, discount: 3, description: 'lorem ipsum dolor sit amet, consectet', thumbnail: 'http: //via.placeholder.com/150', rating: 4 },
            { id: 3, description: 'lorem ipsum dolor sit amet, consectet', title: 'JS', price: 12, discount: 5, thumbnail: 'http: //via.placeholder.com/150', rating: 5 },
            { id: 4, description: 'lorem ipsum dolor sit amet, consectet', title: 'Angular', price: 15, discount: 2, thumbnail: 'http: //via.placeholder.com/150', rating: 3 },
            { id: 5, description: 'lorem ipsum dolor sit amet, consectet', title: 'React', price: 15, thumbnail: 'http: //via.placeholder.com/150', rating: 4 },
        ],
        remarks: [
            { testimonial: 'lorem', author: 'james', image: 'http: //via.placeholder.com/50' },
            { testimonial: 'lorem', author: 'jack', image: 'http: //via.placeholder.com/50' },
            { testimonial: 'lorem', author: 'jajmes', image: 'http: //via.placeholder.com/50' }, { testimonial: 'lorem', author: 'jajmes', image: 'http://via.placeholder.com/50' }, { testimonial: 'lorem', author: 'jajmes', image: 'http://via.placeholder.com/50' }, { testimonial: 'lorem', author: 'jajmes', image: 'http://via.placeholder.com/50' },
        ],
        regForm: {
            name: 'registrationForm',
            method: 'POST',
            action: 'register.php',
            allowSelectItems: true,
            selectAllItemsByDefault: false,
            itemsCheckedByDefault: [
                5
            ],
            fields: [
                {
                    type: 'text', name: 'fname', validators: {
                        required: true, minlength: 4
                    }
                },
                {
                    type: 'text', name: 'lname', validators: {
                        required: true, minlength: 4
                    }
                },
                {
                    type: 'email', name: 'email', validators: {
                        required: true, minlength: 0
                    }
                },
                {
                    type: 'password', name: 'pwd', validators: {
                        required: true, minlength: 8
                    }
                },
                {
                    type: 'submit', name: 'submit'
                },
            ]
        },
        footer: 'All rights reserved. copy - 2021'
    },
    products: [
        { id: 1, title: 'mobile', price: 1200 },
        { id: 2, title: 'tv', price: 12000 },
        { id: 3, title: 'shoes', price: 100 },
    ]
}