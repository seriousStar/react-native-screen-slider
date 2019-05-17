import React, { Component } from 'react';
import { View, SafeAreaView, FlatList, Text, Dimensions } from 'react-native';
import { styles } from './styles';

const ITEMS = [
	{ index: 0, name: 'Screen 1' },
	{ index: 1, name: 'Screen 2' },
	{ index: 2, name: 'Screen 3' }
];

const { width, height } = Dimensions.get('window');


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeIndex: 0
		};
		this.flatList = null;
		this.offset = 0;
		this.direction = null;
	}


	goToSlide = pageNum => {
		this.setState({ activeIndex: pageNum });
		this.flatList.scrollToOffset({
			offset: pageNum * width
		});
	};

	onScroll = (event) => {

		const currentOffset = event.nativeEvent.contentOffset.x;
		if (currentOffset === this.offset) {
			return;
		}
		const direction = currentOffset > this.offset ? 'right' : 'left';
		this.offset = currentOffset;
		this.direction = direction;
		if (this.direction === null) {
		}
	};

	onScrollEndDrag = () => {
		const { activeIndex } = this.state;
		if (this.direction === 'left')  {
			this.goToSlide(activeIndex !== 0 ? activeIndex - 1 : 0);
		} else if (this.direction === 'right') {
			this.goToSlide(activeIndex !== 2 ? activeIndex + 1 : 2);
		}
		this.direction = null;
	};

	renderItem = ({ index, item }) => {
		return (
			<View style={styles.subContainer}>
				<Text style={styles.screenNameText}>
					{item.name}
				</Text>
			</View>
		);
	};

	render() {
		return (
			<SafeAreaView style={styles.container}>
				<FlatList
					ref={ref => this.flatList = ref}
					data={ITEMS}
					renderItem={this.renderItem}
					keyExtractor={(item, index) => `key - ${index}`}
					horizontal
					style={styles.mainContainer}
					onScrollEndDrag={this.onScrollEndDrag}
					onScroll={this.onScroll}
					bounces={false}
				/>
			</SafeAreaView>
		);
	}
}

export default App;
