import { Router } from 'express';
import { consultarSaldo } from '../controller.js';

export const rotaPrincipal = Router()

rotaPrincipal.get('/bancosala2', consultarSaldo);
