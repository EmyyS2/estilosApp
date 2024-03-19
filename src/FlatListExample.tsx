import React from 'react';
import { FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface item {
    id: string;
    nome: string;
    idade: string;
    email: string;
}

const dados: item[] = [
    { id: "1", nome: "Draculara", idade: "1600", email: "DracularaBat@gmail.com" },
    { id: "2", nome: "Abbie", idade: "16", email: "AbbieTheYet@gmail.com" },
    { id: '3', nome: "Vênus", idade: "16", email: "VenusVegan@gamil.com" },
    { id: "4", nome: "Draculara", idade: "1600", email: "DracularaBat@gmail.com" },
    { id: "5", nome: "Abbie", idade: "16", email: "AbbieTheYet@gmail.com" },
    { id: '6', nome: "Vênus", idade: "16", email: "VenusVegan@gamil.com" },
    { id: "7", nome: "Draculara", idade: "1600", email: "DracularaBat@gmail.com" },
    { id: "8", nome: "Abbie", idade: "16", email: "AbbieTheYet@gmail.com" },
    { id: '9', nome: "Vênus", idade: "16", email: "VenusVegan@gamil.com" },
    { id: "10", nome: "Draculara", idade: "1600", email: "DracularaBat@gmail.com" },
    { id: "11", nome: "Abbie", idade: "16", email: "AbbieTheYet@gmail.com" },
    { id: '12', nome: "Vênus", idade: "16", email: "VenusVegan@gamil.com" },
    { id: "13", nome: "Draculara", idade: "1600", email: "DracularaBat@gmail.com" },
    { id: "14", nome: "Abbie", idade: "16", email: "AbbieTheYet@gmail.com" },
    { id: '15', nome: "Vênus", idade: "16", email: "VenusVegan@gamil.com" },
];


const renderItem = ({ item }: { item: item }) => (
    <TouchableOpacity style={styles.item}>
        <Text>{item.nome}</Text>
        <Text>{item.idade}</Text>
        <Text>{item.email}</Text>
    </TouchableOpacity>
);


function FlatListExample(): React.JSX.Element {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#caf0f8' barStyle='light-content' />
            <View style={styles.header}>
                <Text style={styles.headerText}>Flat List</Text>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={dados}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />

            <View style={styles.footer}>
                <TouchableOpacity>
                    <Image source={require('./assets/images/home.png')} style={styles.footerIcon} />
                </TouchableOpacity>

                <TouchableOpacity>
                <Image source={require('./assets/images/orders.png')} style={styles.footerIcon}/>
                </TouchableOpacity>

                <TouchableOpacity>
                <Image source={require('./assets/images/profile.png')} style={styles.footerIcon}/>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: '#bbdefb',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 30,
        borderWidth: 3,
        borderColor: '#90caf9'

    },
    header: {
        backgroundColor: '#caf0f8',
        alignItems: 'center',
        paddingVertical: 50

    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    footer:{
        borderTopWidth:0.2,
        backgroundColor:'white',
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems:'center',
        paddingVertical:10

    },
    footerIcon:{
width:30,
height:30
    }
});

export default FlatListExample;