import { StyleSheet, Text, View } from 'react-native';

type StopwatchProps = {
    seconds: number;
    isRunning: boolean;
};

export default function Stopwatch({ seconds, isRunning }: StopwatchProps) {
    const minutes = Math.floor(seconds / 60);
    const remainder = seconds % 60;
    const formattedTime = `${minutes.toString().padStart(2, '0')}:${remainder
        .toString()
        .padStart(2, '0')}`;

    return (
        <View style={styles.card}>
            <Text style={styles.timerText}>{formattedTime}</Text>
            <Text style={[styles.statusText, isRunning ? styles.running : styles.paused]}>
                {isRunning ? 'Running' : 'Paused'}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#f8f9fa',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 10,
        width: '90%',
    },
    timerText: {
        fontSize: 36,
        fontWeight: 'bold',
        fontFamily: 'monospace',
    },
    statusText: {
        fontSize: 16,
        fontWeight: '600',
        marginTop: 5,
    },
    running: {
        color: '#007bff',
    },
    paused: {
        color: '#6c757d',
    },
});