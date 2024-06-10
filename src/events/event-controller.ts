import { Request, Response } from 'express';
import { CreateEventDto } from './dtos/CreateEvent.dot';
import EventService from './event-service';


class EventController {
    private eventService : EventService;


    constructor(eventService : EventService){
        this.eventService = eventService;
    }

    createEvent = (req:Request,res:Response) =>{
        try{
            const event: CreateEventDto =req.body;
            const newEvent = this.eventService.createEvent(event);
            res.status(201).json(newEvent);
        }catch(error:any){
            res.status(500).json({ error: error.message });
        }
    }

    getEvents  = (req:Request, res:Response) =>{
        try{
            const events = this.eventService.getEvents();
            res.status(200).json(events);
        }catch (error: any) {
            res.status(500).json({ error: error.message });
          }
    }

    getEventById = (req:Request, res:Response) =>{
        try{
            const params = req.params;
            const id = parseInt(params.id);
            const event = this.eventService.getEventById(id);
            if(!event){
                res.status(404).json({error:"Event not found"});
            }else{
                res.status(200).json(event);
            }
        }catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }
}

export default EventController;