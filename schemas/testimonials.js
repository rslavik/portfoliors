// JavaScript Code
// entire schema is going to be one object with properties inside
// Object: testimonials

export default {  
    name: 'testimonials',
    title: 'Testimonials',
    type: 'document',
    fields: [                        // array of fields the testimonial object will have
        {                            // fields are {objects} 
            name: 'name',            // name of person leaving the testimonial
            title: 'Name',
            type: 'string'
        },
        {
            name: 'company', 
            title: 'Company',
            type: 'string'
        },
        {
            name: 'imageurl', 
            title: 'ImgURL',
            type: 'image',           // when you have images you have to provide options
            options: {               // options is an object
                hotspot: true,       // Hotspot means the user will be able to select the crop when uploading an image
            }                        // Explanation: sanity.io/docs/presenting-images (would have to implement this feature manually if you weren't using sanity)
        },
        {
            name: 'feedback', 
            title: 'Feedback',
            type: 'string'
        },
    ],
}

// IMPORT SCHEMA: Go to index.js and type: 
// import testimonials from './testimonials'
// Also add testimonial schema to the array of types
