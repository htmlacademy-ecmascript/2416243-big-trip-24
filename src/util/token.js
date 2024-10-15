import { nanoid } from 'nanoid';

export const generateToken = () => `Basic ${nanoid()}`;
