const Puppy = require('../models/puppy');

module.exports = {
    index, //index: index
    show,
    create,
    update,
    remove,
}

//ASYNC/AWAIT
/*
async function index(req, res, next) {
    try {
        let puppies = Puppy.find({});
        res.status(200).json(puppies)
    } catch (err) {
        next(err);
    }
}
*/

function index(req, res, next) {
    //CALLBACKS
    Puppy.find({}, function (err, puppies) {
        res.status(200).json(puppies);
    });

    //PROMISES
    /*
    Puppy.find({}).then(puppies => {
        res.json(puppies);
    }).catch(err => {
        next(err);
    });
    */
}

//ASYNC/AWAIT
/*
async function show(req, res, next) {
    try {
        let puppy = await Puppy.findById(req.params.id);
        res.status(200).json(puppy);
    } catch(err) {
        next(err);
    }
}
*/

function show(req, res, next) {
    //CALLBACKS
    Puppy.findById(req.params.id, function (err, puppy) {
        if (err) {
            return next(err);
        }
        res.status(200).json(puppy);
    });

    //PROMISES
    /*
    Puppy.findById(req.params.id).then(puppy => {
        res.json(puppy);
    }).catch (err => {
        next(err);
    });
    */
}

//ASYNC/AWAIT
/*
async function create(req, res, next) {
    try {
        let puppy = await Puppy.create(req.body);
        res.status(201).json(puppy);
    } catch (err) {
        next(err);
    }
}
*/


function create(req, res, next) {
    //CALLBACKS
    Puppy.create(req.body, function (err, puppy) {
        if (err) {
            return next(err);
        }
        res.status(201).json(puppy);
    });

    //PROMISES
    /*
    Puppy.create(req.body).then(puppy => {
        res.json(puppy);
    }).catch(err => {
        next(err);
    })
    */
}

//ASYNC/AWAIT
/*
async function update(req, res, next) {
    try {
        let puppy = await Puppy.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(201).json(puppy);
    } catch (err) {
        next(err);
    }
}
*/

function update(req, res, next) {
    //CALLBACKS
    Puppy.findByIdAndUpdate(
        req.params.id, //find using id parameters
        req.body, //update with req.body
        {new: true}, //options: new returns the newly updated puppy
        function (err, puppy) {
        if (err) {
            return next(err);
        }
        res.status(201).json(puppy);
    })

    //PROMISES
    /*
    Puppy.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(puppy => res.json(puppy))
    .catch(err => next(err));
    */
}

//ASYNC/AWAIT
/*
async function remove(req, res, next) {
    try {
        let puppy = Puppy.findByIdAndRemove(req.params.id);
        res.status(200).json(puppy);
    } catch (err) {
        next(err);
    }
}
*/

function remove(req, res, next) {
    //CALLBACKS
    Puppy.findByIdAndRemove(req.params.id, function (err, puppy) {
        if (err) {
            return next(err);
        }
        res.status(200).json(puppy)
    });

    //PROMISES
    /*
    Puppy.findByIdAndRemove(req.params.id)
    .then(puppy => res.json(puppy))
    .catch(err => next(err));
    */
}