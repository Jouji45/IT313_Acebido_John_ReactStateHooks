import { Button, StyleSheet, Text, View } from 'react-native';

type PracticeTrackerProps = {
    solved: number;
    onSolve: () => void;
    onReset: () => void;
};

export default function PracticeTracker({
  solved,
  onSolve,
  onReset,
}: PracticeTrackerProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.countertext}>Solved: {solved}</Text>
      {solved >= 5 && <Text style={styles.congratsText}>Great job!</Text>}
      <View style={styles.buttonrow}>
        <Button title="Solve +1" onPress={onSolve} />
        <Button title="Reset" onPress={onReset} color="#d9534f" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#f8f9fa',
        padding: 20,
        margin: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 20,
        width: '90%',
    },
    countertext: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    congratsText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#28a745',
        marginVertical: 5
    },
    buttonrow: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 10,
    },
});