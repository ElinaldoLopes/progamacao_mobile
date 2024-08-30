import { useState } from "react";
import { KeyboardAvoidingView, TextInput, TouchableOpacity, Text } from "react-native";
import { styles } from "../assets/styles/login";
import { Redirect } from "expo-router";

export default function App() {
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");

    const submit = () => {
        let data = {
            email: usuario,
            senha: senha
        }

        fetch(`http://localhost:9090/api/login`, {
            method: 'POST',
            body: JSON.stringify(data)
        }).then((response) => {
            let resposta = response.json();
            if (resposta.messagem == "error") {
                console.log("error");
            } else {
                console.log("Logado com sucesso")
                Redirect({ href: "/personagens" });
            }
        });
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <TextInput 
                placeholder="E-mail"
                keyboardType="default"
                textContentType="emailAddress"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect={false}
                onChangeText={(text) => setUsuario(text)}
                style={styles.input}
            />

            <TextInput 
                placeholder="Senha"
                textContentType="password"
                autoCapitalize="none"
                autoComplete="password"
                secureTextEntry={true}
                autoCorrect={false}
                onChangeText={(text) => setSenha(text)}
                style={styles.input}
            />

            <TouchableOpacity style={styles.button} onPress={submit}>
                <Text>Entrar</Text>
            </TouchableOpacity>

        </KeyboardAvoidingView>
    );
}