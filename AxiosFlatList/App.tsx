import React, { Component } from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";
import axios from "axios";
import { Items } from "./components/Items";
import EmptyItems from "./components/EmptyItems";
import FooterItem from "./components/FooterItem";
import HeaderItem from "./components/HeaderItem";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }


  // _renderItem = ({item}) => {
  //   return (
  //     <View style={{padding: 10, backgroundColor: '#E9E9E9', marginBottom: 10, overflow: 'hidden'}}>
  //       <View style={{width: '100%', borderRadius: 1, borderBottomWidth: 1, borderColor: 'black', borderStyle: 'solid', padding: 5}}><Text style={{fontWeight: '700'}}>*{item.title}</Text></View>
  //       <Text style={{fontSize: 15,padding: 5}}>{item.body}</Text>
  //     </View>
  //   )
  // }

  _renderItem = ({item}) => {
    return <Items2 item={item} />
  }

  _emptyRenderItem = () => {
    return <EmptyItems />
  }

  _flatListFooterItem = () => {
    return <FooterItem />
  }

  _flatListHeaderItem = () => {
    return <HeaderItem />
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        this.setState({
          data: res.data
        });
        // res.data.map((d) => {
        //   console.log(d.title)
        // })
      })
      .catch((e) => {
        console.log(e);
      })
  }

  render() {
    const {data} = this.state;
    return (
      <SafeAreaView>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2} // Her veriyi Yan yana 2 tane olcak şekilde yazar. default değeri 1'dir
          renderItem={this._renderItem }
          ListEmptyComponent={this._emptyRenderItem} // Eğer data yoksa yani boşsa bu alan çalışır ve component render edilir
          ListFooterComponent={this._flatListFooterItem}
          ListFooterComponentStyle={{backgroundColor: '#E9E9E9', marginTop: 5}}
          ListHeaderComponent={this._flatListHeaderItem}
          ListHeaderComponentStyle={{backgroundColor: '#E9E9E9', marginBottom: 10}}
        />
      </SafeAreaView>
    );
  }
}

export default App;
