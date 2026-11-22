export default function notFound(req, res, next) {
    res.status(404).json({
        error: `Axtarılan ünvan tapılmadı: ${req.method} ${req.originalUrl}`
    })
}