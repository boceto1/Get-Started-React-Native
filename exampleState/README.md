# STATES

In the last excersice we created a component called Person that has 3 properties: __Id,Name,Photo__.

"Id and Name" had a immutable behaivor so we definided this elements how Props but what happend whit Photo property.

A photo is not a immutable nor unchangeable property. In fact, There are a lot people who change their photo twice a week, so in this case you should use __States__.

The official site said _"For data that is going to change, we have to use state"_

you should initialize state in the constructor, inside the property state.

`
 constructor(props) {
    super(props);
    this.state = {state1: value, state2:value};
  }
`

If you need change the state, you must call setState. Don't change directely!!!

` 
updateImage = () =>{
      this.state.pic===1 ? this.setState({ pic:2}) : this.setState({ pic:1})  
}
`

In this example,we switched the property __pick__ (refer Photo) from props to state and add one button for simulate action to change between 2 photos. 