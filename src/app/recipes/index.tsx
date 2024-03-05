import { MaterialIcons } from "@expo/vector-icons";
import { Text, View, FlatList } from "react-native";
import { styles } from "./styles";
import { router } from "expo-router";
import { Recipe } from "@/components/Recipe";
import { Ingredients } from "@/components/Ingredients";

export default function Recipes() {
  return <View style={styles.container}>
    <View style={styles.header}>
      <MaterialIcons name="arrow-back" size={32} onPress={() => router.back()} />

      <Text style={styles.title}>Ingredients</Text>
      {/* <Ingredients ingredients={[]}/> */}

      <FlatList
        data={['1']}
        keyExtractor={item => item}
        renderItem={() => <Recipe recipe={{name: 'Omelete', image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kitano.com.br%2Freceitas%2Fomelete-de-pizza-mussarela-oregano-e-tomate%2F&psig=AOvVaw36Q_qNaPjRUw04G_Np3Ck3&ust=1709689253766000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMDZ9vb-24QDFQAAAAAdAAAAABAE", minutes: 10}}
        />}
      />

    </View>
  </View>
}
