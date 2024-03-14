import { useState } from 'react';
import { Pressable, View, Text, TextInput } from "react-native";
import { Feather  } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// components
import CustomModal from "./modal";

const RenameButton = ({ index, onRename }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [newName, setNewName] = useState("");

    const onOpen = () => {
        setModalVisible(true);
    }

    const onClose = () => {
        setModalVisible(false);
    }

    const handleRename = () => {
        onRename(index, newName);
        setModalVisible(false);
        setNewName("");
    }

    return (
        <>
            <CustomModal
                isVisible={modalVisible}
                onClose={ onClose}
                title={"Rename recording"}
                onAccept={handleRename}
                acceptLabel={"Rename"}
            >
                <View>
                    <TextInput
                        placeholder="Enter a new name..."
                        value={newName}
                        onChangeText={setNewName}
                        className="block border py-2 px-3 border-gray-500 rounded-md"
                    />
                </View>
            </CustomModal>

            <Pressable
                className="w-fit border border-gray-100 rounded-md flex flex-row ml-4 py-3 px-3 items-center"
                onPress={onOpen}
            >
                <Feather name="edit-2" size={16} color="white" />
            </Pressable>
        </>
    )
}

export default RenameButton;