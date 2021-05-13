import express, { Request, Response } from 'express';
import * as PropertyService from './properties.service';

export const propertiesRouter = express.Router();

propertiesRouter.get('/:sqrMeter', async (req: Request, res: Response) => {
  const sqrMeter: number = parseInt(req.params.sqrMeter, 10);

  try {
    const item: number = await PropertyService.calculatePricePerSquareMeter(
      sqrMeter,
    );

    const pricePerSqrMeter = await PropertyService.getPricePerSqrMeterFromAPI();

    res.status(200).send({
      data: {
        pricePerSqrMeter,
        calculatedPricePerSquareMeter: item,
      },
    });
  } catch (e) {
    res.status(500).send(e.message);
  }
});
