exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('answers').del()
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('answers').insert({
                    asker: "mom",
                    question: "Where are you heading?",
                    response: "To Church."
                }),
                knex('answers').insert({
                    asker: "mom",
                    question: "Where are you?",
                    response: "At the Library."
                }),
                knex('answers').insert({
                    asker: "girlfriend/boyfriend",
                    question: "Where are you?",
                    response: "I'm at a Java meet-up. I'll be home soon."
                }),
                knex('answers').insert({
                    asker: "mom",
                    question: "Where are you?",
                    response: "Can't say where I am, but I can tell you where I'm not."
                }),
                knex('answers').insert({
                    asker: "cop",
                    question: "Where are heading?",
                    response: "Looking for the fella who stole my shoes."
                }),
                knex('answers').insert({
                    asker: "cop",
                    question: "Do you know why I pulled you over?",
                    response: "Wouldn't have anything to do with me driving 7mph on the sidewalk, would it?"
                }),
                knex('answers').insert({
                    asker: "girlfriend/boyfriend",
                    question: "Why are you ignoring my texts?",
                    response: "...Can't talk right now there's a mechanical bull and Cuervo involved."
                }),
                knex('answers').insert({
                    asker: "girlfriend/boyfriend",
                    question: "Where are heading?",
                    response: "Out with my friends Jack and Jim."
                })
            ]);
        });
};
