import { StyleSheet, View, Pressable, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Button({ label, theme, onPress }) {
    if (theme === "primary") {
        return (
            <View style={[styles.buttonContainer, { borderWidth: 4, borderColor: '#333', borderRadius: 18 }]}>
                <Pressable
                    style={[styles.button, { backgroundColor: '#ddd' }]}
                    onPress={onPress}
                >
                    <FontAwesome
                        name="picture-o"
                        size={18}
                        color="#733"
                        style={styles.buttonIcon}
                    />
                    <Text style={[styles.buttonLabel, { color: '#113' }]}>{label}</Text>
                </Pressable>
            </View>
        )
    }
    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 60,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3',
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonIcon: {
        paddingRight: 8,
    },
    buttonLabel: {
        color: '#fff',
        fontSize: 16,
    },
})