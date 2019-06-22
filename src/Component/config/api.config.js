let apiUrls = {
  createRecord() {
    return {
      url: `http://localhost:6060/api/create`
    };
  },
  editRecord({ pId }) {
    return {
      url: `http://localhost:6060/api/${pId}`
    };
  },
  updateRecord({ pId }) {
    return {
      url: `http://localhost:6060/api/${pId}`
    };
  }
};

export default apiUrls;
