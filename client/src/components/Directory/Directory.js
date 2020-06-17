import React, { Component } from "react";
import GameList from "../GameList/GameList";
import API from "../../utils/API";
import "./DirectoryStyle.css";



class Directory extends Component {
    state = {
        results: [],
        queryResults: [],
        searchTerm: "",
        sort: ""
    }

    counter = 0;

    componentDidMount = () => {
        this.displayGames();
    }

    displayGames = () => {
        API.getGames().then(results => {
            this.setState({
                results: results.data.results,
                queryResults: results.data.results
            })
        });
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        let searchedArray;
        if(this.state.sort.length){
            searchedArray = this.applySort([...this.state.results], this.state.sort);
        }
        else{
            searchedArray = [...this.state.results];
        }
        const results = this.applySearch(searchedArray, value.toLowerCase());
        this.setState({
            queryResults: results,
            [name]: value.toLowerCase()
        })
    }

    handleSortChange = event => {
        const { value } = event.target;
        let sortedArray;
        if(this.state.searchTerm.length){
            sortedArray = this.applySearch([...this.state.results], this.state.searchTerm);
        }
        else{
            sortedArray = [...this.state.results];
        }
        const results = this.applySort(sortedArray, value);
        this.setState({
            queryResults: results,
            sort: value
        })
    }

    applySearch = (array, value) => {
        const games = array.filter(game =>
            game.name.includes(value) ||
            (game.name).includes(value) ||
            game.original_release_date.includes(value) ||
            game.deck.includes(value)
        );

        return games;
    }

    applySort = (array, value) => {//undeleted value of array... rememberrrrrrr*****************
        const games = array;
        // return games;

        switch (value) {
            case "Name":
                games.sort((a, b) => {
                    const nameA = a.name.toLowerCase();
                    const nameB = b.name.toLowerCase();
                    return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
                })
                break;

            case "Release Date":
                games.sort((a, b) => {
                    const original_release_dateA = a.original_release_date.toLowerCase();
                    const original_release_dateB = b.original_release_date.toLowerCase();
                    return (original_release_dateA < original_release_dateB) ? -1 : (original_release_dateA > original_release_dateB) ? 1 : 0;
                })
                break;

            case "Descriptive Word":
                games.sort((a, b) => {
                    const deckA = a.deck.toLowerCase();
                    const deckB = b.deck.toLowerCase();
                    return (deckA < deckB) ? -1 : (deckA > deckB) ? 1 : 0; 
                })
                break;

            default:
                break;
        }

        return games;
    }

    render() {
        console.log(this.state);

        let resultsArray;

        if(!this.state.searchTerm.length && !this.state.sort.length){
            resultsArray = this.state.results;
        }
        else{
            resultsArray = this.state.queryResults;
        }

        return(
            <div className="container">
                <input className="input" placeholder="Search Games" name="searchTerm" onChange={this.handleInputChange}></input>
                <div className="dropdown"> 
                {/* !!!!!!! THIS IS DA BUTTON TO FUCK WIT !!!!!!!!!!!!!!!!!!!!!!!!!!!!*/}
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Sort By...
                    </button>
                    {
                        this.state.sort.length
                        ?
                        <div>
                            <br/>
                            <p>Sorted By {this.state.sort}</p>
                        </div>
                        :
                        null
                    }
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <option className="dropdown-item" name="sort" value="Name" onClick={this.handleSortChange}>Name</option>
                        <option className="dropdown-item" name="sort" value="Release Date" onClick={this.handleSortChange}>Release Date</option>
                        <option className="dropdown-item" name="sort" value="Descriptive Word" onClick={this.handleSortChange}>Descriptive Word</option>
                        <option className="dropdown-item" name="sort" value="" onClick={this.handleSortChange}>None</option>
                    </div>
                </div>
                {
                    resultsArray.map(game => 
                        <GameList game={game} key={this.counter++}></GameList>
                    )
                }
            </div>
        );
    }
}






export default Directory;