// code below is different from project git because I'm using the newer version (V3) of sanity

// Then import schema types from any plugins that might expose them
import testimonials from './testimonials'

// Then we give our schema to the builder and provide the result to Sanity
// array of types
export const schemaTypes = [testimonials]
