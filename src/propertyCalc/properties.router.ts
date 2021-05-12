import express, { Request, Response } from 'express';
import * as PropertyService from './properties.service';
import { BaseProperty, Property } from './property.interface';

export const propertiesRouter = express.Router();

propertiesRouter.get('/', async (req: Request, res: Response) => {
  try {
    const items: Property[] = await PropertyService.findAll();

    res.status(200).send(items);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

propertiesRouter.get('/:id', async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const item: Property = await PropertyService.find(id);

    if (item) {
      return res.status(200).send(item);
    }

    res.status(404).send('item not found');
  } catch (e) {
    res.status(500).send(e.message);
  }
});

propertiesRouter.post('/', async (req: Request, res: Response) => {
  try {
    const item: BaseProperty = req.body;

    const newItem = await PropertyService.create(item);

    res.status(201).json(newItem);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

propertiesRouter.put('/:id', async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const itemUpdate: Property = req.body;

    const existingItem: Property = await PropertyService.find(id);

    if (existingItem) {
      const updatedItem = await PropertyService.update(id, itemUpdate);
      return res.status(200).json(updatedItem);
    }

    const newItem = await PropertyService.create(itemUpdate);

    res.status(201).json(newItem);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

propertiesRouter.delete('/:id', async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id, 10);
    await PropertyService.remove(id);

    res.sendStatus(204);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
