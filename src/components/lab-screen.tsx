import {useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import PracticeTracker from '@/components/practice-tracker';
import Stopwatch from '@/components/stopwatch';
import useStopwatch from '@/hooks/use-stopwatch';

export default function LabScreen() {
  const [solved, setSolved] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const seconds = useStopwatch(isRunning);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lab Practice &amp; Timer</Text>
            <PracticeTracker
                solved={solved}
                onSolve={() => setSolved((count) => count + 1)}
                onReset={() => setSolved(0)}
            />
            <Stopwatch seconds={seconds} isRunning={isRunning} />
            <View style={styles.controlRow}>
                <Button
                    title="Start Timer"
                    onPress={() => setIsRunning(true)}
                    disabled={isRunning}
                />
                <Button
                    title="Pause Timer"
                    onPress={() => setIsRunning(false)}
                    disabled={!isRunning}
                />
                <Button
                    title="Reset Timer"
                    onPress={() => {
                        setIsRunning(false);
                        setSolved(0);
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e9ecef',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    controlRow: {
        flexDirection: 'row',
        gap: 15,
        marginTop: 20,
    },
});