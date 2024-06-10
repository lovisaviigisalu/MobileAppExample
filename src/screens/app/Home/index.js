import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import Header from '../../../components/header';
import { categories } from '../../../data/categories';
import CategoryBox from '../../../components/CategoryBox';
import { products } from '../../../data/products';
import ProductHomeItem from '../../../components/ProductHomeItem';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState();
  const [keyword, setKeyword] = useState();
  const [selectedProducts, setSelectedProducts] = useState(products);

  useEffect(() => {
    if (selectedCategory && !keyword) {
      const updatedSelectedProducts = products.filter((product) => product?.category === selectedCategory);
      setSelectedProducts(updatedSelectedProducts);
    } else if (selectedCategory && keyword) {
      const updatedSelectedProducts = products.filter((product) =>
        product?.category === selectedCategory && product?.title?.toLowerCase().includes(keyword.toLowerCase())
      );
      setSelectedProducts(updatedSelectedProducts);
    } else if (!selectedCategory && keyword) {
      const updatedSelectedProducts = products.filter((product) =>
        product?.title?.toLowerCase().includes(keyword?.toLowerCase())
      );
      setSelectedProducts(updatedSelectedProducts);
    } else if (!keyword && !selectedCategory) {
      setSelectedProducts(products);
    }
  }, [selectedCategory, keyword]);

  useEffect(() => {
    if (selectedCategory) {
      const updatedSelectedProducts = products.filter(
        (product) => product?.category === selectedCategory
      );
      setSelectedProducts(updatedSelectedProducts);
    } else {
      setSelectedProducts(products);
    }
  }, [selectedCategory]);

  const renderCategoryItems = ({ item }) => {
    return (
      <CategoryBox
        onPress={() => setSelectedCategory(item?.id)}
        isSelected={item.id === selectedCategory}
        title={item?.title}
        image={item?.image}
      />
    );
  };

  const renderProductItems = ({ item }) => {
    const onProductPress = (product) => {
      navigation.navigate('ProductDetails', { product });
    };

    return (
      <ProductHomeItem onPress={() => onProductPress(item)} {...item} />
    );
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header
          showSearch={true}
          onSearchKeyword={setKeyword}
          keyword={keyword}
          title={'Find all you need'}
        />
        <FlatList
          showsHorizontalScrollIndicator={false}
          style={styles.FlatList}
          horizontal
          data={categories}
          renderItem={renderCategoryItems}
          keyExtractor={(item, index) => String(index)}
        />
        <FlatList
          numColumns={2}
          data={selectedProducts}
          renderItem={renderProductItems}
          keyExtractor={(item) => String(item.id)}
          ListFooterComponent={<View style={{ height: 230 }} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Home);
