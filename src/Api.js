import axios from "axios";

const API_URL = "http://localhost:4500";

export const fetchClasses = async () => {
  const res = await axios.get(`${API_URL}/fetchClasses`);
  return res;
};

export const getBundleForClass = async (classId) => {
  const res = await axios.get(`${API_URL}/getBundleForClass/${classId}`);
  return res;
};

export const sendToAirPay = async () => {
  const res = await axios.post(`${API_URL}/sendtoairpay`, {
    email: "a@b.com",
    firstName: "a",
    lastName: "b",
    address: "Delhi",
    city: "Delhi",
    state: "Delhi",
    orderid: "sfdhsgf0dfhsf-shv",
    country: "India",
    amount: 8000,
  });
  return res;
};

export const responseFromAirPay = async () => {
  const res = await axios.post(`${API_URL}/responsefromairpay`, {});
  return res;
};

export const getSubjectDetailById = async (subjectId) => {
  const res = await axios.get(`${API_URL}/getSubjectById/${subjectId}`);
  return res;
};

export const checkEmailExists = async (emailId, phoneNumber) => {
  const res = await axios.get(
    `${API_URL}/checkEmailValidation/${emailId}/${phoneNumber}`
  );
  return res;
};

export const registerStudent = async (studentData) => {
  const res = await axios.post(`${API_URL}/signup`, studentData);
  return res;
};

export const loginStudent = async (loginCredentials) => {
  const res = await axios.post(`${API_URL}/signin`, loginCredentials);
  return res;
};

export const initiatePayment = async (paymentDetails) => {
  const res = await axios.post(`${API_URL}/initiatePayment`, paymentDetails);
  return res;
};
export const preOrderPayment = async (paymentDetails) => {
  const res = await axios.post(`${API_URL}/preOrderPayment`, paymentDetails);
  return res;
};
export const fetchStudentSession = async (studentId) => {
  const res = await axios.get(
    `${API_URL}/fetchStudentAvailableSession/${studentId}`
  );
  return res;
};

export const scheduleSessions = async (scheduleData) => {
  const res = await axios.put(`${API_URL}/checkAvailableBalance`, scheduleData);
  return res;
};

export const getUpcomingSessionsByStudentId = async (studentId) => {
  const res = await axios.get(`${API_URL}/fetchStudentSession/${studentId}`);
  return res;
};

export const getStudentLeftSessionByClass = async (studentId, classID) => {
  const res = await axios.get(
    `${API_URL}/getStudentLeftSessionByClass/${studentId}/${classID}`
  );
  return res;
};




export const forgotPasswordOTP = async (email) => {
  const res = await axios.get(`${API_URL}/forgotPassword/${email}`);
  return res;
};



export const resetPassword = async (data) => {
  const res = await axios.post(`${API_URL}/newPassword`,data);
  return res;
};
