import axios from 'axios';

const API_BASE_URL = process.env.VUE_APP_API_BASE_URL || '';

export const AiModel = {
  predict: async (data:any) => {
    try {
      const response = await axios.post(API_BASE_URL, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      console.error('Prediction failed:', error);
      return { error: 'Prediction failed' };
    }
  },
};
