import { Pressable, Text } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const RecordingButton = ({ recording, startRecording, stopRecording }) => {
    return (
        <Pressable
            onPress={ recording ? stopRecording : startRecording } 
            className="group transition-all duration-500 ease-in-out flex flex-row items-center justify-center space-x-2 bg-white text-gray-600 px-6 py-4 rounded-lg"
        >
            <MaterialCommunityIcons name={ recording ? 'record' : 'record-circle'} size={24} color={ recording ? 'red' : 'black'} />
            <Text className="font-semibold tracking-tight text-lg">
                {recording? 'Stop Recording' : 'Start Recording'}
            </Text>
        </Pressable>
    )
}

export default RecordingButton;