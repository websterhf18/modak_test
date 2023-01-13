// @ts-ignore

jest.mock('react-native-safe-area-context', () => ({
    useSafeAreaInsets: () => ({}),
}));