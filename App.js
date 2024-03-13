import{ useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, Pressable } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Audio } from 'expo-av';

// components
import RecordingButton from './components/recordingButton';
import PlayButton from './components/playButton';
import ClearRecordingsButton from "./components/clearRecordingsButton";
import NoRecordings from './components/noRecordings';

export default function App() {
  const [recording, setRecording] = useState();
  const [recordings, setRecordings] = useState([]);

  // start recording
  const startRecording = async() => {
    try {
      const permission = await Audio.requestPermissionsAsync();

      if (permission.status === "granted") {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true,
        });

        const { recording } = await Audio.Recording.createAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
        setRecording(recording);
      }
    } catch (err) {

    }
  }

  // stop recording
  const stopRecording = async() => {
    setRecording(null);

    await recording.stopAndUnloadAsync();

    const { sound, status } = await recording.createNewLoadedSoundAsync();

    setRecordings([...recordings, { // Use the spread operator for arrays
      sound: sound,
      duration: getFormattedDuration(status.durationMillis),
      file: recording.getURI(),
    }]);

  }

  // get formatted duration in milliseconds
  const getFormattedDuration = (milliseconds) => {
    const minutes = milliseconds / 1000 / 60;
    const seconds = Math.round((minutes - Math.floor(minutes)) * 60);

    return seconds < 10 ? `${Math.floor(minutes)}:0${seconds}` : `${Math.floor(minutes)}:${seconds}`
  }

  // get recording lines
  const getRecordingLines = () => {
    return recordings.map((recordingLine, index) => {
      return (
        <View key={index} className="flex flex-row space-x-4 py-3 items-center justify-start">
          <PlayButton
            recordingLine={ recordingLine }
          />
          <Text className='text-gray-200'>
            Recording #{index + 1} | { recordingLine.duration }
          </Text>
        </View>
      )
    })
  }

  // clear recordings
  const clearRecordings = () => {
    setRecordings([]);
  }


  return (
    <SafeAreaProvider>
      <View className="flex-1 bg-gray-800 items-center justify-center">
        <View className="w-full h-fit px-10 flex flex-col space-y-2">
          <RecordingButton
            recording={ recording }
            startRecording={ startRecording }
            stopRecording={ stopRecording }
          />
          <View className="w-full h-fit border flex flex-col space-y-2 bg-gray-700 rounded-md px-4 py-5 border-gray-600">
            { recordings.length === 0 ? (
              <NoRecordings />
            ) : (
              <View className="mb-4 divide-y divide-gray-600">
                {getRecordingLines()}
              </View>
            )}
            <ClearRecordingsButton
              recordings={ recordings}
              clearRecordings={ clearRecordings }
            />
          </View>
        </View>
        <StatusBar style="light" />
      </View>
    </SafeAreaProvider>
  );
}
