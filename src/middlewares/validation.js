import Joi from "joi";

export const validate = (Schema) => {
  return (req, res, next) => {
    try {
      const data = {
        ...req.body,
        ...req.params,
        ...req.query,
      };

      const { error } = Schema.validate(data, {
        abortEarly: false,
        errors: { wrap: { label: "" } },
      });

      if (error) {
        const formatted = error.details.map((detail) => ({
          field: detail.path.join("."),
          message: detail.message,
        }));

        return res.status(400).json({
          status: "validation error",
          message: "Invalid request data",
          errors: formatted,
        });
      }

      next();
    } catch (err) {
      return res.status(500).json({
        status: "validation error",
        message: "Something went wrong during validation",
        error: err.message,
      });
    }
  };
};
