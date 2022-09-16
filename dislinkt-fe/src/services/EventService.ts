import SystemEventData from "../models/data/SystemEventData";
import ApiService from "./ApiService";

const ENDPOINTS = {
  GET_EVENTS: "/event-service", // NOVA RUTA SMISLITI RUTU I DODATI U GATEWAY
};

export class EventService extends ApiService {
  getEvents = async () => {
    const { data } = await this.apiClient.get<SystemEventData[]>(
      ENDPOINTS.GET_EVENTS
    );
    data.map((elem) => (elem.timestamp = new Date(elem.timestamp)));

    return data;
  };
}

const eventService = new EventService();

export default eventService;
