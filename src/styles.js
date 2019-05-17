import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'orange',
	},
	mainContainer: {
		flex: 1,
		flexDirection: 'row'
	},
	subContainer: {
		width,
		height,
		alignItems: 'center',
		justifyContent: 'center'
	},
	screenNameText: {
		fontSize: 30,
		fontWeight: '500'
	}
});
