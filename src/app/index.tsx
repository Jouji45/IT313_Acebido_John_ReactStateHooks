import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import LabScreen from '@/components/lab-screen';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';

export default function Homescreen() {
    return (
        <ThemedView style={styles.safeArea}>
            <SafeAreaView style={styles.safeArea}>
                <LabScreen />
            </SafeAreaView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    safeArea: {
        flex: 1,
        width: '100%',
        paddingHorizontal: Spacing.four,
        paddingBottom: BottomTabInset + Spacing.three,
        maxWidth: MaxContentWidth,
        alignSelf: 'center',
    },
})