const CurdRepository = require("./curd");
const { Airplane } = require("../models");

class AirplaneRepository extends CurdRepository {
  constructor() {
    super(Airplane);
  }
}

module.exports = AirplaneRepository;
