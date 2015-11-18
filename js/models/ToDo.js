/**
 * Created by alyssa on 11/16/15.
 */

// models/ToDo.js

app.models.ToDo = Backbone.Model.extend({
    defaults: {
        title: "ToDo",
        archived: false,
        done: false
    }
});