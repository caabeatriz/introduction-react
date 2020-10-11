import React from 'react';
import Post from './Post'
export default class App extends React.Component {
    render(){
        return (
            <div>            
                <h1>Teste</h1>
                <Post  title="Aprendendo react"/>
                <Post title="React é td"/>
                <Post title="Teste de react"/>
            </div>
        );
    }
}