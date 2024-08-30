import { Text, View, Image, ScrollView, ActivityIndicator } from "react-native";
import { useState, useEffect } from "react";
import { md5 } from "md5";
import { styles } from "../../assets/styles/index";
import { SafeAreaView } from "react-native-safe-area-context";

const PUBLIC_KEY = "0da8afab071136080a2af66222d82907";
const PRIVATE_KEY = "41d4392a23e2ed5b8f7c43a94f9eccb2c48be222";

export default function Index() {
    const [personagens, setPersonagens] = useState([]);
    const [loading, setLoading] = useState(true);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const timestamp = Number(new Date());
        const hash = md5.create();
        hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY);

        fetch(`https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&orderBy=name&offset=${offset}&limit=20&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`)
        .then((response) => response.json())
        .then((data) => {
            setPersonagens(data.data.results);
            setLoading(false);
        });

    });

    const handleLoadMore = () => {
        if (!loading) {
            setOffset(offset + 20);
            setLoading(true);
        }
    }

    const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
        const paddingToBottom = 10;
        return layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom;
    }
    
    return (
        <SafeAreaView>
            <ScrollView onScroll={({ nativeEvent }) => {
                if (isCloseToBottom((nativeEvent))) {
                    handleLoadMore();
            }
            }}>
                {loading && <ActivityIndicator size="large" color="#0000ff" />}

                <View style={styles.container}>
                    {personagens.map((personagem) => (
                        <View style={styles.card}>
                            <Image source={{ uri: `${personagem.thumbnail.path}.${personagem.thumbnail.extension}` }} style={{ width: 100, height: 100 }} />
                            <Text style={styles.text}>{personagem.name}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}