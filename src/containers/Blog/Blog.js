import React, { Component } from 'react';
// import axios from 'axios'
// import axios from '../../axios'
import './Blog.css';
import Posts from '../Blog/Posts/Posts'
import NewPost from './NewPost/NewPost'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'

class Blog extends Component {
    state = {
        auth: false
    }
    
    render () {
        
 
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts/" exact
                            activeClassName="my-active"
                            activeStyle={{
                                color:'#fa923f',
                                textDecoration: 'underline'
                            }}>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render = {() => <h1>Home</h1>} /> */}
                <Switch>
                    { this.state.auth ? <Route path="/new-post"  component={NewPost} /> : null }  
                    <Route path="/posts"  component={Posts} />  
                    <Redirect from="/" to="/posts"/>
                </Switch>
                                      
           
            </div>
        );
    }
}

export default Blog;