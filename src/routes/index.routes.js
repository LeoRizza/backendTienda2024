import { Router } from "express";
import cartRouter from "./cart.routes.js";
import productRouter from "./products.routes.js";
import sessionRouter from "./session.routes.js";
import userRouter from "./users.routes.js";
import chatRouter from './chat.routes.js'
import mockingRouter from "./mocking.routes.js";

const router = Router()

router.use('/api/users', userRouter)
router.use('/api/products', productRouter)
router.use('/api/carts', cartRouter)
router.use('/api/sessions', sessionRouter)
router.use('/api/chat', chatRouter)
router.use('/mockingproducts', mockingRouter)

export default router