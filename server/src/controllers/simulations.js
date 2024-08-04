// Emitters
import { myEmitterErrors } from '../event/errorEvents.js';
// Domain
import {
  createSimulation,
  deleteSimulationById,
  findAllSimulations,
  findAllUsersSimulations,
  findSimulationById,
  updateSimulation,
  updateSimulationVisibility,
} from '../domain/simulations.js';
// Response messages
import {
  EVENT_MESSAGES,
  sendDataResponse,
  sendMessageResponse,
} from '../utils/responses.js';
import {
  BadRequestEvent,
  MissingFieldEvent,
  NoPermissionEvent,
  NotFoundEvent,
  ServerErrorEvent,
} from '../event/utils/errorUtils.js';
import { findUserById } from '../domain/users.js';

export const getAllSimulations = async (req, res) => {
  try {
    const foundSimulations = await findAllSimulations();

    if (!foundSimulations) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.simulationNotFound
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }
    return sendDataResponse(res, 200, { simulations: foundSimulations });
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Get all simulations`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const getAllUsersSimulations = async (req, res) => {
  const { userId } = req.params;

  try {
    const foundUser = await findUserById(userId);

    if (!foundUser) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.userNotFound
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    const foundSimulations = await findAllUsersSimulations(userId);

    if (!foundSimulations) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.simulationNotFound
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }
    return sendDataResponse(res, 200, { simulations: foundSimulations });
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Get all simulations`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

// Get simulation by id
export const getSimulationById = async (req, res) => {
  const { simulationId } = req.params;

  try {
    const foundSimulation = await findSimulationById(simulationId);

    if (!foundSimulation) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.simulationNotFound
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    return sendDataResponse(res, 200, { simulation: foundSimulation });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(req.user, `Get all simulations`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const saveSimulation = async (req, res) => {
  const {
    id,
    simulationTitle,
    mainSimulationDataPoints,
    simulationLoops,
    simulationTimeToComplete,
  } = req.body;

  const { userId } = req.params;

  try {
    if (
      !userId ||
      !simulationTitle ||
      !mainSimulationDataPoints ||
      !simulationLoops ||
      !simulationTimeToComplete
    ) {
      const missingField = new MissingFieldEvent(
        req.user,
        EVENT_MESSAGES.missingFields,
        EVENT_MESSAGES.simulationFieldMissing
      );

      return sendMessageResponse(res, missingField.code, missingField.message);
    }

    const foundSimulation = await findSimulationById(id);

    const foundUser = await findUserById(userId);

    if (!foundUser) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.userNotFound
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    simulationLoops.forEach((element) => {
      console.log('element', element);
    });

    if (foundSimulation) {
      const updatedSimulation = await updateSimulation(
        id,
        simulationTitle,
        mainSimulationDataPoints,
        simulationLoops,
        simulationTimeToComplete
      );

      if (!updatedSimulation) {
        const badRequest = new BadRequestEvent(
          req.user,
          EVENT_MESSAGES.badRequest,
          EVENT_MESSAGES.updateSimulationFail
        );
        myEmitterErrors.emit('error', badRequest);
        return sendMessageResponse(res, badRequest.code, badRequest.message);
      }

      return sendDataResponse(res, 201, { savedSimulation: updatedSimulation });
    } else if (!foundSimulation) {
      const createdSimulation = await createSimulation(
        userId,
        simulationTitle,
        mainSimulationDataPoints,
        simulationLoops,
        simulationTimeToComplete
      );

      if (!createdSimulation) {
        const badRequest = new BadRequestEvent(
          req.user,
          EVENT_MESSAGES.badRequest,
          EVENT_MESSAGES.createSimulationFail
        );
        myEmitterErrors.emit('error', badRequest);
        return sendMessageResponse(res, badRequest.code, badRequest.message);
      }

      return sendDataResponse(res, 201, {
        createdSimulation: createdSimulation,
      });
    }
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(req.user, `Create new simulation`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const createNewSimulation = async (req, res) => {
  const {
    simulationTitle,
    mainSimulationDataPoints,
    simulationLoops,
    simulationTimeToComplete,
  } = req.body;

  const { userId } = req.params;

  try {
    if (
      !userId ||
      !simulationTitle ||
      !mainSimulationDataPoints ||
      !simulationLoops ||
      !simulationTimeToComplete
    ) {
      const missingField = new MissingFieldEvent(
        req.user,
        EVENT_MESSAGES.missingFields,
        EVENT_MESSAGES.simulationFieldMissing
      );

      return sendMessageResponse(res, missingField.code, missingField.message);
    }

    const foundUser = await findUserById(userId);

    if (!foundUser) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.userNotFound
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    simulationLoops.forEach((element) => {
      console.log('element', element);
    });

    const createdSimulation = await createSimulation(
      userId,
      simulationTitle,
      mainSimulationDataPoints,
      simulationLoops,
      simulationTimeToComplete
    );

    if (!createdSimulation) {
      const badRequest = new BadRequestEvent(
        req.user,
        EVENT_MESSAGES.badRequest,
        EVENT_MESSAGES.createSimulationFail
      );
      myEmitterErrors.emit('error', badRequest);
      return sendMessageResponse(res, badRequest.code, badRequest.message);
    }

    return sendDataResponse(res, 201, { createdSimulation: createdSimulation });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(
      req.user,
      `Create new simulation failed`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

// Publish Simulation
export const publishSimulation = async (req, res) => {
  const { simulationId, userId } = req.params;
  const { visibility } = req.body;
  console.log('userId', userId);
  console.log('simulationId', simulationId);
  console.log('visibility', visibility);
  try {
    const foundSimulation = await findSimulationById(simulationId);

    if (!foundSimulation) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.simulationNotFound
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    if (userId !== foundSimulation.userId) {
      const notPermitted = new NoPermissionEvent(
        req.user,
        EVENT_MESSAGES.NoPermissionEvent,
        EVENT_MESSAGES.unableToComplete
      );
      myEmitterErrors.emit('error', notPermitted);
      return sendMessageResponse(res, notPermitted.code, notPermitted.message);
    }

    const updatedSimulation = await updateSimulationVisibility(
      simulationId,
      visibility
    );
    
    return sendDataResponse(res, 201, { updatedSimulation: updatedSimulation });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(
      req.user,
      `Delete simulation failed`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};
// delete simulation
export const deleteSimulation = async (req, res) => {
  const { simulationId } = req.params;

  try {
    const foundSimulation = await findSimulationById(simulationId);

    if (!foundSimulation) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.simulationNotFound
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    const deletedSimulation = await deleteSimulationById(simulationId);
    if (!deletedSimulation) {
      const notDeleted = new BadRequestEvent(
        req.user,
        EVENT_MESSAGES.badRequest,
        EVENT_MESSAGES.simulationNotDeleted
      );
      myEmitterErrors.emit('error', notDeleted);
      return sendMessageResponse(res, notDeleted.code, notDeleted.message);
    }

    return sendDataResponse(res, 202, { deletedSimulation: deletedSimulation });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(
      req.user,
      `Delete simulation failed`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};
