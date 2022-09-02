interface SystemEventData {
  id: string;
  timestamp: Date;
  source: string;
  requestType: string;
  message: string;
  statusCode: number;
  statusCodeText: string;
}

export default SystemEventData;
