# Style
The style in a program is so important. You can development powerful proccess but if your interface is hard to use, the app fail.

React Native use JavaScript to implements styles but the names are same to CSS. The difference is React Native use Camel Case for names.

For create Style do you need define this way.

```
const styles = StyleSheet.create({
  property1: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  property2: {
    color: 'red',
  },
});
```

You can called this styles in your elements. Example:

```
<Text style={styles.property1}>Property1</Text>
```

In this example, I create two Person elements. I defined styles inside the component and I create style for men or woman.

Now, I'm try to undertand this element, The styles always are hard to manipulate. They have a unpredictable behaivor. More adelant, I'm fix this excersice.



