import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DataState {
  homeSection: any;
  uiStore: any;
  teamMember: any;
  testimonail: any;
  ourwork: any;
  about: any;
  service: any;
  footer: any;
  logo: any;
  article: any;
  selectedCard: any;
  faqs: any;
  slide: any;
  header: any;
  teamTitle: any;
  types: any;
}

const initialState: DataState = {
  homeSection: null,
  uiStore: null,
  teamMember: null,
  testimonail: null,
  ourwork: null,
  about: null,
  service: null,
  footer: null,
  logo: null,
  article: null,
  selectedCard: null,
  faqs: null,
  slide: null,
  header: null,
  teamTitle: null,
  types: null,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setHomeSection(state, action: PayloadAction<any>) {
      state.homeSection = action.payload;
    },
    setUiStore(state, action: PayloadAction<any>) {
      state.uiStore = action.payload;
    },
    setTeam(state, action: PayloadAction<any>) {
      state.teamMember = action.payload;
    },
    setTestimonail(state, action: PayloadAction<any>) {
      state.testimonail = action.payload;
    },
    setOurWork(state, action: PayloadAction<any>) {
      state.ourwork = action.payload;
    },
    setAbout(state, action: PayloadAction<any>) {
      state.about = action.payload;
    },

    setService(state, action: PayloadAction<any>) {
      state.service = action.payload;
    },

    setFooter(state, action: PayloadAction<any>) {
      state.footer = action.payload;
    },
    setLogo(state, action: PayloadAction<any>) {
      state.logo = action.payload;
    },
    setArticle(state, action: PayloadAction<any>) {
      state.article = action.payload;
    },
    selectCard(state, action: PayloadAction<any>) {
      state.selectedCard = action.payload;
    },
    setFaqs(state, action: PayloadAction<any>) {
      state.faqs = action.payload;
    },
    setHeader(state, action: PayloadAction<any>) {
      state.header = action.payload;
    },
    setSliders(state, action: PayloadAction<any>) {
      state.slide = action.payload;
    },
    setTeamTitles(state, action: PayloadAction<any>) {
      state.teamTitle = action.payload;
    },
    setTypes(state, action: PayloadAction<any>) {
      state.types = action.payload;
    },
  },
});

export const {
  setHomeSection,
  setUiStore,
  setTeam,
  setTestimonail,
  setOurWork,
  setAbout,
  setService,
  setFooter,
  setLogo,
  setArticle,
  setFaqs,
  setSliders,
  selectCard,
  setHeader,
  setTeamTitles,
  setTypes
} = dataSlice.actions;
export default dataSlice.reducer;
