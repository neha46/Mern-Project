const asyncMiddlewareWrapper = (TheFunc) => 
    (req, res, next) => {
        Promise.resolve(TheFunc(req, res, next)).catch(next);
    };

export default asyncMiddlewareWrapper;
