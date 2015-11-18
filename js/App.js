/**
 * Created by alyssa on 11/16/15.
 */

//App.js
//revealing module pattern implementation
var app = (function() {
    //api var represents the public methods of this class
    var api = {
        //act as holders for classes returned by backbone
        views: {},
        models: {},
        collections: {},
        //jQ el pointing to the main user's interface container, helper methods below
        content: null,
        router: null,
        todos: null,
        init: function() {
            this.content = $("#content");
            this.todos = new api.collections.ToDos();
            ViewsFactory.menu();
            return this;
        },
        changeContent: function(el) {
            this.content.empty().append(el);
            return this;
        },
        title: function(str) {
            $("h1").text(str);
            return this;
        }
    };

    var ViewsFactory = {
        menu: function() {
            if(!this.menuView) {
                this.menuView = new api.views.menu({
                    el: $("#menu")
                });
            }
            return this.menuView;
        }
    };
    var Router = Backbone.Router.extend({
        routes: {
            "archive": "archive",
            "new": "newToDo",
            "edit/:index": "editToDo",
            "delete/:index": "deleteToDo",
            "": "list"
        }
        list: function(archive) {},
        archive: function() {},
        newToDo: function() {},
        editToDo: function() {},
        deleteToDo: function() {}
    });
    api.router = new Router();

    return api;

});
