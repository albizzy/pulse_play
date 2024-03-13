import { View, Text } from "react-native";

const NoRecordings = () => {
    return (
        <View className="w-full h-fit flex flex-col items-center justify-center space-y-4">
            <Text className="text-md text-gray-500 tracking-tight">You have no recordings</Text>
        </View>
    )
}

export default NoRecordings;