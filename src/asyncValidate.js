const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const asyncValidate = (values) => {
  return sleep(2000).then(() => {
    if (values.lastName === 'Smith') {
      throw { lastName: 'Last name cannot be Smith' };
    }
  });
};

export default asyncValidate;