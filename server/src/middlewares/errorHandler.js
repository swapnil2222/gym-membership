import constants from "../constants/constants.js";

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  const stackTrace = process.env.NODE_ENV === "production" ? null : err.stack;
  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      return res.status(statusCode).json({
        title: "Validation Failed",
        message: err.message,
        stackTrace,
      });
    case constants.UNAUTHORIZED:
      return res.status(statusCode).json({
        title: "Unauthorized User",
        message: err.message,
        stackTrace,
      });
    case constants.FORBIDDEN:
      return res.status(statusCode).json({
        title: "Forbidden User",
        message: err.message,
        stackTrace,
      });
    case constants.NOT_FOUND:
      return res.status(statusCode).json({
        title: "Not Found",
        message: err.message,
        stackTrace,
      });
    case constants.SERVER_ERROR:
      return res.status(statusCode).json({
        title: "Server Error",
        message: err.message,
        stackTrace,
      });

    default:
      if (err) {
        return res.status(constants.SERVER_ERROR).json({
          title: "Server Error",
          message: err.message,
          stackTrace,
        });
      }
      break;
  }
};

export default errorHandler;
