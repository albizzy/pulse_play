import { Pressable, Text } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ClearRecordingsButton = ({recordings, clearRecordings }) => {
    const recordingsLength = recordings.length;

    return (
        <>
            <Pressable
                className={`w-1/4 flex flex-row py-2 px-3 items-center justify-center ${ recordingsLength > 0 ? 'border border-gray-600 rounded' : ''}`}
                onPress={clearRecordings}
            >
                { recordingsLength > 0 && (
                    <MaterialCommunityIcons name="trash-can-outline" size={16} color="white" />
                )}

                <Text className="text-gray-100">
                    { recordingsLength > 0 ? 'Clear' : ''}
                </Text>
            </Pressable>
        </>
    )
}

export default ClearRecordingsButton;