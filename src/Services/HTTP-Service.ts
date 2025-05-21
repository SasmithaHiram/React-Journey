import ApiClient from "./Api-Client";

interface Entity {
  id: number;
}
class HTTPService {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll<T>() {
    const controller = new AbortController();
    const request = ApiClient.get<T[]>(this.endpoint, {
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
  }

  delete(id: number) {
    return ApiClient.delete(this.endpoint + "/" + id);
  }

  create<T>(entity: T) {
    return ApiClient.post(this.endpoint + entity);
  }

  update<T extends Entity>(entity: T) {
    return ApiClient.patch(this.endpoint + "/" + entity.id, entity);
  }
}

const create = (endpoint: string) => new HTTPService(endpoint);

export default create;
