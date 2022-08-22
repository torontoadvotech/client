import API from '../../lib/API';

const setInitialOnboardFlag = async (token: string) => {

  const formData = new FormData();
  formData.append("initialOnboardFormCompleted", 'true');
  await API.editMyProfile(formData, token);
  return;
}

export default setInitialOnboardFlag;