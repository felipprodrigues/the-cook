import { View, Text, ScrollView, Alert } from "react-native";
import {router} from 'expo-router'

import {styles} from './styles'

import { useState } from "react";
import { Selected } from "@/components/Selected";
import { Ingredient } from "@/components/Ingredient";

export default function Index() {
  const [selected, setSelected] = useState([])

  function handleToggleSelected(value: string) {
    if(selected.includes(value)) {
      return setSelected((state) => state.filter(item => item !== value))
    }

    setSelected((state) => [...state, value])
    console.log(selected)
  }

  function handleClearSelected() {
    Alert.alert("Clear", "Do you wish to clear all?", [
      { text: "No", style: "cancel" },
      { text: "Yes", onPress: () => setSelected([]) },
    ])
  }

  function handleSearch() {
    router.navigate("/recipes/")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Escolha {"\n"}
        <Text style={styles.subTitle}>
          os produtos
        </Text>
      </Text>

      <Text style={styles.message}>Descubra eceitas baseadas nos produtos que você escolheu.</Text>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.ingredients}>
        {Array.from({length: 50}).map((item, index) => (
          <Ingredient
            key={index}
            name="tomate"
            image=""
            selected={selected.includes(String(index))}
            onPress={() => handleToggleSelected(String(index))}
          />
        ))}

      </ScrollView>

      {selected.length > 0 && (
        <Selected
          quantity={selected.length}
          onClear={handleClearSelected}
          onSearch={handleSearch}
        />
      )}
    </View>
  )
}
