import { ForbiddenError } from "../../libraries/custom-error";

function check_permission(req, res, next) {
  try {
    if (req.params.userId !== req.currentUserId) {
      throw new ForbiddenError("해당 동작에 대한 권한이 없습니다");
    }
    next();
  } catch (err) {
    next(err);
  }
}

export { check_permission };
