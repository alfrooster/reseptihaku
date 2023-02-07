import { useState } from 'react';
import { View, Text, Button, TextInput, FlatList, ActivityIndicator, Image } from 'react-native';

export default function Recipes() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    
    const fetchMeals = () => {
        setLoading(true);
        fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=' + search)
        .then(response => response.json())
        .then(data => {
            setData(data.meals);
            setLoading(false)
        })
        .catch(err => console.error(err))
    }

    const itemSeparator = () => {
        return (
            <View style={{ height: 1, backgroundColor: 'gray' }} />
        )
    }

    return (
        <View style={{ marginTop: 40 }}>
            <FlatList
                data={data}
                ItemSeparatorComponent={itemSeparator}
                renderItem={({ item }) =>
                    <View>
                        <Text style={{ fontSize: 22 }}>{item.strMeal}</Text>
                        <Image style={{ width: 150, height: 150, }} source={{ uri: item.strMealThumb, }} />
                    </View>}
            />
            <ActivityIndicator animating={loading} />
            <View style={{ alignItems: 'center', marginTop: 5 }}>
            <TextInput
                value={search}
                placeholder='Search ingredient'
                onChangeText={text => setSearch(text)}
                style={{ width: 250, borderColor: 'gray', borderWidth: 1 }}
            />
            <View style={{ width: 80, marginBottom: 20 }}><Button title='Search' onPress={fetchMeals} /></View>
            </View>
        </View>
    )
}