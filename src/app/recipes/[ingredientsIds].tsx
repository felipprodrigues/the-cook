import { MaterialIcons } from "@expo/vector-icons";
import { Text, View, FlatList } from "react-native";
import { styles } from "./styles";
import { router, useLocalSearchParams } from "expo-router";
import { Recipe } from "@/components/Recipe";
import { useEffect, useState } from "react";
import { services } from "@/services";
import { Ingredients } from "@/components/Ingredients";


export default function Recipes() {
  const [ingredients, setIngredients] = useState<IngredientResponse[]>([])
  const [recipes, setRecipes] = useState<RecipeResponse[]>([])
  const params = useLocalSearchParams<{ingredientsIds: string}>()

  const ingredientsIds = params.ingredientsIds.split(',')

  useEffect(() => {
    services.ingredientes.findByIds(ingredientsIds).then(setIngredients)
  }, [])

  useEffect(() => {
    services.recipes.findByIngredientsIds(ingredientsIds).then(setRecipes)
  }, [])

  console.log(recipes, 'aqui a lista de receitas')

  return <View style={styles.container}>
    <View style={styles.header}>
      <MaterialIcons name="arrow-back" size={32} onPress={() => router.back()} />

      <Text style={styles.title}>Ingredients</Text>
      <Ingredients ingredients={ingredients}/>


      <FlatList
        // style={styles.recipes}
        // contentContainerStyle={styles.recipesContent}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{gap: 16}}
        numColumns={2}
        data={recipes}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <Recipe recipe={item}
            onPress={() => router.navigate("/recipe/" + item.id)}
        />)}
      />

    </View>
  </View>
}
