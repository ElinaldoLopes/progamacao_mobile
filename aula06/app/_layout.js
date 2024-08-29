import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <stack>
            <stack.screen name="index" component={HomeScreen} />
            <stack.screen name="about" component={AboutScreen} />
        </stack>
    );
}