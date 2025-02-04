import { Image, Text, View } from "react-native";
import { s } from "./style"

export function Welcome(){
    return (
        <View>
            <Image source={require("@/assets/logo.png")} style={s.logo} />
 
            <Text style={s.title}>Boas vindas ao Nerby!</Text>

            <Text style={s.subTitle}>Tenha cupons de vantagens para usar em {"\n"} 
                seus estabelecimentos favoritos.
            </Text>        
        </View>
    )
}