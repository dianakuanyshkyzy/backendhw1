import { Request, Response } from 'express';
import { CreateEventDto } from './dtos/CreateEvent.dot';
import EventService from './event-service';
import { authMiddleware } from '../middlewares/auth-middleware';
import { UserCityDto } from '../auth/dtos/UserCity.dto';
import { IEvent } from './models/Event';

class EventController {
    private eventService : EventService;


    constructor(eventService : EventService){
        this.eventService = eventService;
    }

    createEvent = async (req: Request, res: Response): Promise<void> => {
        try {
          const createEventDto: CreateEventDto = req.body;
          const event = await this.eventService.createEvent(createEventDto);
          res.status(201).json(event);
        } catch (error: any) {
          res.status(500).send({ error: error.message });
        }
      }



    getEvents = async (req: Request, res: Response): Promise<void> => {
      const user: UserCityDto = (req as any).user;

      if (!user) {
          res.status(404).json({ error: 'User not found' });
          return;
      }
      const city = user.city;
      if (!city) {
          res.status(400).json({ error: 'User city not found' });
          return;
      }
      const events = await this.eventService.getEventsByCity(city);
      res.status(200).json(events);
    }
    
    getEventById = async (req: Request, res: Response): Promise<void> => {
        try {
          const { id } = req.params;
          const event = await this.eventService.getEventById(id);
          if (!event) {
            res.status(404).json({ message: 'Event not found' });
            return;
          }
          res.status(200).json(event);
        } catch (error: any) {
          res.status(500).send({ error: error.message });
        }
    }
}

export default EventController;