import React, { Component } from 'react';
import { View } from 'react-native';
import Swiper from 'react-native-swiper';
import { CachedImage, ImageCache } from "react-native-img-cache";

const Banner = ({ bannerList=[] }: { bannerList: any }) => {
    return (
        <Swiper
            height={180}
            autoplay
            activeDotColor='green'
            dot={<View style={{
                backgroundColor: '#fff',
                width: 8,
                height: 8,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 3,
                marginBottom: 3,
                borderWidth: 1,
                borderColor: '#70a938'
            }} />}
        >
            {bannerList.map((item: any) => {
                return (
                    <View key={item.id}>
                        <CachedImage
                            style={{ height: 180 }}
                            resizeMode="cover"
                            source={{ uri: item.imgurl }}
                        />
                    </View>
                )
            })}
        </Swiper>
    );
}

export default Banner;