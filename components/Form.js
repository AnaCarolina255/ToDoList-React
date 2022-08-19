import react, { Component } from "react";
import { Button, TextInput, View } from "react-native";

class Form extends Component {

    static defaultProps = {
        onAdd: () => {

        }
    }

    state = {
        text: ''
    }

    add = () => {
        const { state } = this;
        /* retornar o campo vazio */
        if (state.text) {
            this.props.onAdd(state.text)
            this.handleChange('')
        }
    }

    handleChange = (text) => {
        /* alterar o próprio texto */
        this.setState({ text });
    }

    render() {
        const { state } = this;
        return (
            <View>
                <TextInput value={state.text} onChangeText={this.handleChange} />
                <Button title="Adicionar" color="pink" onPress={this.add} />
            </View>
        )
    }
}
 
export default Form;