export function validate(schema) {
    return async (req, res, next) => {
        try {
            await schema.parseAsync({
                body: req.body,
                query: req.query,
                params: req.params,
            });
            return next();
        }
        catch (error) {
            return res.status(400).json(error);
        }
    };
}
//# sourceMappingURL=validate.js.map