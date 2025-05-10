// utils/helper.ts

import { API_ROUTES, BASE_URL } from "../APIRoutes/APIRoutes";

// Helper function to fetch data
// Define the type for the metadata

// Create a reusable function to fetch metadata
// export const fetchMetaData = async (type: string) => {
//   const res = await fetch(
//     `${BASE_URL}/meta-tags/${API_ROUTES.GET_METATAG}?typeId=${type}`
//   );
//   const data = await res.json();
//   console.log("Meta Data =>", data)
//   return data?.data[0] || null;
// };

export const fetchMetaData = async (type: string) => {
  try {
    const res = await fetch(
      `${BASE_URL}/meta-tags/${API_ROUTES.GET_METATAG}?typeId=${type}`
    );

    const result = await res.json();
    console.log("ZERO Data =>", result?.data)
    if (result?.data && Array.isArray(result.data) && result.data.length > 0) {
      const data = result.data[0];

      return data;
    }
  } catch (error) {
    console.error('Failed to fetch meta tags:', error);
    throw error;
  }
};

export const fetchData = async (route: string) => {
  try {
    const response = await fetch(route);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};
export const fetchHomeData = async (lang: any) => {
  const response = await fetchData(
    `${BASE_URL}/home/${lang}/${API_ROUTES.GET_HOMESECTION}`
  );
  return response;
};
export const fetchTeamTitle = async (lang: any) => {
  const response = await fetchData(
    `${BASE_URL}/team/${API_ROUTES.GET_TEAM_TITLE}/${lang}`
  );
  return response;
};
export const fetchUiStore = async (lang: string, typeId: string | null = null) => {
  const url = typeId
    ? `${BASE_URL}/ui-store/${lang}/${API_ROUTES.GET_UISTORE}?typeId=${typeId}`
    : `${BASE_URL}/ui-store/${lang}/${API_ROUTES.GET_UISTORE}`;
  const response = await fetchData(url);
  console.log("TYPE DATA=>", response)
  return response;
};

export const fetchType = async () => {
  const response = await fetchData(
    `${BASE_URL}/types/${API_ROUTES.GET_TYPES}`
  );
  return response;
};

export const fetchTeam = async (lang: any) => {
  const response = await fetchData(
    `${BASE_URL}/team/${lang}/${API_ROUTES.GET_TEAM}`
  );
  return response;
};
export const fetchTestimonail = async (lang: any) => {
  const response = await fetchData(
    `${BASE_URL}/testimonials/${API_ROUTES.GET_TESTIMONAIL}`
  );
  return response;
};

export const fetchOurWork = async (lang: any) => {
  const response = await fetchData(
    `${BASE_URL}/our-work/${lang}/${API_ROUTES.GET_OURWORK}`
  );
  return response;
};

export const fetchAbout = async (lang: any) => {
  const response = await fetchData(
    `${BASE_URL}/about/${lang}/${API_ROUTES.GET_ABOUT}`
  );
  return response;
};

export const fetchServices = async (lang: any, type: string) => {
  const response = await fetchData(
    `${BASE_URL}/service/${lang}/${API_ROUTES.GET_SERVICES}?keyword=${type}`
  );
  console.log("Service Data=>", response);
  return response;
};

export const fetchFooterData = async (lang: any) => {
  const response = await fetchData(
    `${BASE_URL}/footer/${lang}/${API_ROUTES.GET_FOOTER}`
  );
  return response;
};

export const fetchWebsiteLogo = async () => {
  const response = await fetchData(`${BASE_URL}/home/${API_ROUTES.GET_LOGOS}`);
  return response;
};

export const fetchArticle = async (lang: any) => {
  const response = await fetchData(
    `${BASE_URL}/articles/${lang}/${API_ROUTES.GET_ARTICLE}`
  );
  return response;
};

export const fetchFaqs = async (lang: any, type: any) => {
  const response = await fetchData(
    `${BASE_URL}/faqs/${lang}/${API_ROUTES.GET_FAQS}?typeId=${type}`
  );
  return response;
};
export const fetchHeader = async (lang: any, type: any) => {
  const response = await fetchData(
    `${BASE_URL}/home/${lang}/${API_ROUTES.GET_HEADER}?type=${type}`
  );
  return response;
};

export const fetchServiceSliders = async (lang: any, type: any) => {
  const response = await fetchData(
    `${BASE_URL}/home/${lang}/${API_ROUTES.GET_SLIDERS}?typeId=${type}`
  );
  return response;
};

export const fetchPages = async (typeId?: any) => {
  const requestOptions: RequestInit = {
    method: 'GET',
    redirect: 'follow',
  };

  try {
    const response = await fetch(`${BASE_URL}/page/${API_ROUTES.GET_PAGES}${typeId ? typeId : ''}`, requestOptions);


    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error fetching pages:', error);
    throw error;
  }
};


