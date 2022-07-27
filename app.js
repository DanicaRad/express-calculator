const { response } = require('express');
const express = require('express');
const ExpressError = require('./error');
const Nums = require('./nums');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const OPERATIONS = ["mean", "median", "mode"]

app.get('/:operation', (req, res, next) => {
    try {

        const operation = OPERATIONS.find(o => o === req.params.operation);
        if(!operation ) throw new ExpressError(`Operation must be 'mean',   'median' or 'mode'.`, 400);

        if(!req.query.nums) {
            throw new ExpressError ("Numbers are required.", 400)
        }

        const nums = new Nums(req.query.nums.split(','));
        console.log("NUMS", nums)

        if(nums.nums instanceof Error) {
          throw new ExpressError(nums.nums.message, 400)  
        }

        const value = nums.doMath(operation);

        return res.json({
            response: {
                operation: `${operation}`,
                value: `${value}`
            }
        });
        
    } catch(e) {
        next(e);
    }
});

app.use(function (req, res, next) {
    const err = new ExpressError("Not Found",404);
    return next(err);
});

app.use((error, req, res, next) => {
    console.log(error.msg)
    let status = error.status || 500;
    let msg = error.msg;

    return res.status(status).json({
        error: {msg, status}
    });
})

app.listen(3000, function() {
    console.log("app on port 3000")
})
