import { Pressable, Text } from "react-native";
import { FontAwesome6 } from '@expo/vector-icons';

const PlayButton = ({ recordingLine }) => {
    return (
        <Pressable
            onPress={() => recordingLine.sound.replayAsync()}
            className="w-fit h-fit flex flex-row items-center justify-center space-x-1 px-3 py-2 rounded-full bg-white"
        >
            <FontAwesome6 name={'play'} size={12} color="black" />
            <Text className="text-xs capitalize">
                { 'play'}
            </Text>
        </Pressable>
    )
}

export default PlayButton;