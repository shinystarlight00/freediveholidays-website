/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { BACKEND_URL } from "./constants";

const API_URL = BACKEND_URL || "http://localhost:5000/api";

const axiosAPI = axios.create({ baseURL: API_URL });

type RequestMethod = "get" | "post" | "put" | "delete";

interface ApiResponse<> {
  response?: any;
  error?: string;
}

const apiRequest = async <T = any>(
  method: RequestMethod,
  url: string,
  requestData?: any,
  customHeaders: Record<string, string> = {}
): Promise<ApiResponse> => {
  try {
    const token = localStorage.getItem("access_token");
    const headers: Record<string, string> = {
      ...customHeaders,
    };

    if (token) {
      headers["Authorization"] = token;
    }

    const config: AxiosRequestConfig = {
      method,
      url,
      headers,
      data: requestData,
    };

    const response: AxiosResponse<T> = await axiosAPI(config);

    return { response: response.data };
  } catch (error) {
    const axiosError = error as AxiosError;

    return { response: axiosError?.response?.data };
  }
};

// API Methods
const get = <T = any>(url: string, headers?: Record<string, string>) =>
  apiRequest<T>("get", url, undefined, headers);
const post = <T = any>(
  url: string,
  data?: any,
  headers?: Record<string, string>
) => apiRequest<T>("post", url, data, headers);
const put = <T = any>(
  url: string,
  data?: any,
  headers?: Record<string, string>
) => apiRequest<T>("put", url, data, headers);
const deleteRequest = <T = any>(
  url: string,
  headers?: Record<string, string>
) => apiRequest<T>("delete", url, undefined, headers);

const MarketAPI = { get, post, put, delete: deleteRequest };

export default MarketAPI;
