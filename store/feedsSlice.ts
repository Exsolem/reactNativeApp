import { createSlice } from '@reduxjs/toolkit'
import { AppDispatch} from "./store";

export interface IPictures{
    id: number;
    author: string;
    width: number;
    height: number;
    url: string;
    download_url: string;
}
interface FeedsState{
    pictures: IPictures[];
    isRefresh: boolean;
    page: number;
    fetching: boolean;
}

const initialState: FeedsState = {
    pictures: [],
    isRefresh: false,
    page: 1,
    fetching: false
}

export const feedsSlice = createSlice({
    name: 'feeds',
    initialState,
    reducers: {
        setPictures: (state, action) => {
            action.payload.forEach((picture: IPictures) => state.pictures.push({...picture, width: 300, height: 300}))
            state.page += 1
            state.isRefresh = false
        },
        setRefresh: (state, action) => {
            state.isRefresh = action.payload
            state.page = 1
        },
        resetPictures:(state) => {
          state.pictures = []
        },
        setFetching:(state, action) => {
            state.fetching = action.payload
        }
    }
})

export const { setPictures, setRefresh, setFetching, resetPictures } = feedsSlice.actions

export const getAsync = (page: Number) => (dispatch: AppDispatch) => {
        fetch(`https://picsum.photos/v2/list?page=${page}&limit=10`)
            .then(response => response.json())
            .then( (data: IPictures[]) => {
                dispatch(setPictures(data))
            })
            .finally(() => setFetching(false))
}

export default feedsSlice.reducer


