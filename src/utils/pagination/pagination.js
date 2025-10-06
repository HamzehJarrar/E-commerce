export const getPagination = (req) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 5;
  const offset = (page - 1) * limit;
  return { page, limit, skip: offset };
};

export const getPaginationData = (data, page, limit) => {
  const { count, result } = data;
  const totalPages = Math.ceil(count / limit);
  return {
    pagination: {
      totalItems: count,
      totalPages,
      currentPage: page,
      limit,
    },
    data: result,
  };
};


