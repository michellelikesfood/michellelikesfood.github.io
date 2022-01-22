import DS from 'ember-data';
// https://type.fit/api/quotes
export default DS.RESTAdapter.extend({
    host:'https://type.fit/api/quotes',
    // pathForType(){
    //     return 'quotes';

    // }
});
