import axios from "axios";
//function for call api
export const ApiHelper = ({
  url,
  method='get',
  params,
  headers,
  authorizationToken='',
}) => {
  if (!url) {
    throw new Error('"url" cannot be empty!');
  }
  // * Below is the custom headers logic for making API calls
  const customRequestHeaders = {
    //set header with authorizationToken for all api's
    ...(headers && { headers }),
    ...(
      authorizationToken && {
        'authorization': "Token " + JSON.stringify(authorizationToken),
      }
    )
  };
  //set api url for all api's
  const apiUrl = `https://conduit.productionready.io/api${url}`
  const axiosParams = {
    url: apiUrl,
    method,
    headers: customRequestHeaders,
    ...(params && { data: params }),
  };

  return axios(axiosParams);
};
