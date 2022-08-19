import react,{Component} from 'react'
import { Button, View, FlatList, Text } from 'react-native';

class TodoList extends Component{

    //propriedade estática simulando lista
    static defaultProps = {
        list:[],
        onRemove: () => {

        }
    }

    //função que trata as linhas dentro da lista
    //o index é a posição
    handleRow = ({item, index}) =>{
        return(
            <View style={{flexDirection: 'row', margin: 15}}>
                <Text style={{flex:1}}>
                    {/* o index vem formatado com dois dígitos a posição */}
                    {this.formatListNumber(index)} - {item.text}
                </Text>
                {/* estilizando o botão de excluir */}
                <Button title="delete" color="purple" onPress={() => this.props.onRemove(item)}/>
            </View>
        )
    }
 
    //formatando a posição para que fique com dois dígitos
    //formatando número de acordo com a posição do array
    formatListNumber(number){
        const digito = 2;
        //pega a posição e adiciona mais um
        //o slice corta a posição dos dígitos
       return ('0'.repeat(digito) + (number + 1)).slice(-digito);
        
    }

    render(){

        //propriedade que retorna o item dentro da lista
        const {props} = this;

        //extraindo id da lista a partir da posição do meu array
        const keyExtractor = item => item.id;
        return(
            <View>
                {/* lista */}
                <FlatList
                    data={props.list}
                    keyExtractor={keyExtractor}
                    renderItem={this.handleRow}
                />
            </View>
        )
    }
}
//exportando TodoList
export default TodoList;