export function routeNotFound(req, res, next) {
    const paths = /^(\/users)/;
    res.status(404).json({ msg: "Route not found" });
    next();
}
//# sourceMappingURL=routeNotFound.js.map