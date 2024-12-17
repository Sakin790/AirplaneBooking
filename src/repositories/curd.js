const { Logger } = require("../config");

class curdRepository {
  constructor(model) {
    this.model = model;
  }
  async create(data) {
    try {
      const response = await this.model.create(data);
      return response;
    } catch (error) {
      Logger.error("Something went wrong when creating model", error);
      throw error;
    }
  }
  async distroy(data) {
    try {
      const response = await this.model.distroy({
        where: {
          id: data.id,
        },
      });
      return response;
    } catch (error) {
      Logger.error("Something went wrong when deleting model", error);
      throw error;
    }
  }

  async get(data) {
    try {
      const response = await this.model.findByPk(data);
      return response;
    } catch (error) {
      Logger.error("Something went wrong when Finding user", error);
      throw error;
    }
  }

  async update(id, data) {
    try {
      const response = await this.model.update(data, {
        where: {
          id: id,
        },
      });
      return response;
    } catch (error) {
      Logger.error("Something went wrong when deleting model", error);
      throw error;
    }
  }
}
