import { Modal, View, Text, Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CustomModal = ({ isVisible, onClose, children, title, onAccept, onDecline, acceptLabel, declineLabel }) => {
    return (
        <View className="flex-1 items-center">
            <Modal
                animationType='slide'
                transparent={true}
                visible={isVisible}
                onRequestClose={onClose}
            >
                <View className="flex-1 flex items-center justify-center p-4 bg-black/70">
                    <View className="m-20 bg-white w-full rounded-xl border p-4 shadow-sm">
                        <View className="flex flex-col space-y-4 divide-y divide-gray-100">
                            <View className="flex flex-row justify-between items-center">
                                <View>
                                    <Text className="text-xl font-semibold tracking-tight">{title}</Text>
                                </View>
                                <View className="">
                                    <Pressable
                                        onPress={onClose}
                                    >
                                        <MaterialCommunityIcons name="close" size={24} color="black" />
                                    </Pressable>
                                </View>
                            </View>

                            <View className="w-full h-fit flex flex-col space-y-4 py-4">
                                {children}
                            </View>

                            <View className="w-full h-fit pt-4 flex flex-row space-x-2 justify-end">
                                {onDecline && (
                                    <View>
                                        <Pressable
                                            onPress={onDecline}
                                            className="px-3 py-2 border bg-transparent border-gray-900 rounded-md"
                                        >
                                            <Text
                                                className="text-sm text-gray-900 tracking-tight"
                                            >
                                                {declineLabel}
                                            </Text>
                                        </Pressable>
                                    </View>
                                )}

                                {onAccept && (
                                    <View>
                                        <Pressable
                                            onPress={onAccept}
                                            className="px-3 py-2 bg-gray-900 rounded-md"
                                        >
                                            <Text
                                                className="text-sm text-white tracking-tight"
                                            >
                                                {acceptLabel}
                                            </Text>
                                        </Pressable>
                                    </View>
                                )}
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default CustomModal;