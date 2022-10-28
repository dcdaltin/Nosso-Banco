import { Router } from 'express';
import { consultarSaldo } from '../controllers/controller.js';

export const rotaPrincipal = Router()

rotaPrincipal.get('/bancosala2', consultarSaldo);
