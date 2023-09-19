import React, { Component } from "react";
import { FlatList, RefreshControl, SafeAreaView, Text } from "react-native";
import axios from "axios";
import { ItemsScroll } from "../components/ItemsScroll";
import EmptyItems from "../components/EmptyItems";
import HeaderItem from "../components/HeaderItem";
import FooterItem from "../components/FooterItem";
import { View } from "react-native";

class ScrollRefresh extends Component {

  constructor() {
    super();

    this.state = {
      data: [],
      loading: false,
      isRefresh: false,
      page: 1
    }
  }

  componentDidMount() {
    this.fetchUser(1);
  }

  fetchUser = (page = 1, isLoadMore = false) => {
    const url = `https://api.stackexchange.com/2.2/users?page=${page}&order=desc&sort=reputation&site=stackoverflow`;
    setTimeout(() => {
      axios.get(url).then(res => {
        const {data} = this.state;
        let newData = (isLoadMore) ? data.concat(res.data.items) : res.data.items;
        this.setState({data:newData, loading: true, isRefresh: false, page: page});
      }).catch(err => {
        console.log(err);
      })
    }, 3000);
  }

  onRefresh = () => {
    this.setState({isRefresh: true});
    this.fetchUser();
  }

  loadMore = () => {
    const {page} = this.state;
    let newPage = page + 1;
    this.fetchUser(newPage, true);
  }

  _renderItem = ({item}) => {
    return <ItemsScroll item={item} />
  }

  _emptyRenderItem = () => {
    return <EmptyItems />
  }

  _headerItem = () => {
    return <HeaderItem />
  }

  _footerItem = () => {
    return <FooterItem />
  }

  _itemSeperator = () => {
    return <View style={{width: '95%', backgroundColor: 'darkgrey', height: 10, marginBottom: 10, marginHorizontal: 10, borderRadius: 10}}></View>
  }

  render() {
    const  {data, loading, isRefresh} = this.state;
    return (
      <SafeAreaView>
        {(!loading) ? <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 100}}><Text>Yükleniyor</Text></View> : <FlatList
          data={data}
          renderItem={this._renderItem}
          refreshControl={
          <RefreshControl
            refreshing={isRefresh}
            onRefresh={this.onRefresh}
          />
          }
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          ListEmptyComponent={this._emptyRenderItem}
          ListHeaderComponent={this._headerItem}
          ListHeaderComponentStyle={{backgroundColor: '#E9E9E9', marginBottom: 10}}
          ListFooterComponent={this._footerItem}
          // ListFooterComponentStyle={{backgroundColor: '#E9E9E9', marginTop: 5}}
          onEndReachedThreshold={0.4}
          onEndReached={this.loadMore}
          // ItemSeparatorComponent={this._itemSeperator}
        />}
      </SafeAreaView>
    );
  }
}

export default ScrollRefresh;
