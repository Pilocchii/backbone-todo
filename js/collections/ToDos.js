/**
 * Created by alyssa on 11/16/15.
 */

//collections/ToDos.js

app.collections.ToDos = Backbone.Collection.extend({
    //entry point to this collection. these tasks would normally come from a database or somewhere else
    initialize: function() {
        this.add({title: "Learn JavaScript basics"});
        this.add({title: "Go to backbonejs.org"});
        this.add({title: "Develop a Backbone application"});
    },
    // setting the model property tells the class what kind of data is being stored
    model: app.models.ToDo,
    // moves our todo up or down.
    up: function(index) {
        if(index > 0) {
            var tmp = this.models[index-1];
            this.models[index-1] = this.models[index];
            this.models[index] = tmp;
            this.trigger("change");
        }
    },
    down: function(index) {
        if(index < this.models.length-1) {
            var tmp = this.models[index+1];
            this.models[index+1] = this.models[index];
            this.models[index] = tmp;
            this.trigger("change");
        }
    },
    // property setters
    archive: function(archived, index) {
        this.models[index].set("archived", archived);
    },
    changeStatus: function(done, index) {
        this.models[index].set("done", done);
    }
});