import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';


interface Count {
    count: number;
}

const initialState: Count = {
    count: 0
};


export const CountStore = signalStore(
    withState(initialState),
    withMethods((store) => ({
        incrementStore(): void {
            patchState(store, (state) => ({ count: state.count + 1 }));
        }
    }))
)