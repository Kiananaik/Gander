import React, { Component } from "react";
import EmployeeList from "../EmployeeList/EmployeeList";
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
        this.displayEmployees();
    }

    displayEmployees = () => {
        API.getEmployees().then(results => {
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
        const employees = array.filter(employee =>
            employee.name.includes(value) ||
            (employee.name).includes(value) ||
            employee.original_release_date.includes(value) ||
            employee.description.includes(value)
            // employee.login.username.includes(value)
        );

        return employees;
    }

    applySort = (array) => {//deleted value of array... rememberrrrrrr*****************
        const employees = array;

        switch (value) {
        //     case "First Name":
        //         employees.sort((a, b) => {
        //             const firstNameA = a.name.first.toLowerCase();
        //             const firstNameB = b.name.first.toLowerCase();
        //             return (firstNameA < firstNameB) ? -1 : (firstNameA > firstNameB) ? 1 : 0;
        //         })
        //         break;

            case "original_release_date":
                employees.sort((a, b) => {
                    const original_release_dateA = a.original_release_date.toLowerCase();
                    const original_release_dateB = b.original_release_date.toLowerCase();
                    return (original_release_dateA < original_release_dateB) ? -1 : (original_release_dateA > original_release_dateB) ? 1 : 0;
                })
                break;

        //     case "Phone Number":
        //         employees.sort((a, b) => {
        //             const numberA = a.description.toLowerCase();
        //             const numberB = b.description.toLowerCase();
        //             return (numberA < numberB) ? -1 : (numberA > numberB) ? 1 : 0;
        //         })
        //         break;

        //     case "Username":
        //         employees.sort((a, b) => {
        //             const usernameA = a.login.username.toLowerCase();
        //             const usernameB = b.login.username.toLowerCase();
        //             return (usernameA < usernameB) ? -1 : (usernameA > usernameB) ? 1 : 0;
        //         })
        //         break;

            default:
                break;
        }

        return employees;
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
                <input className="input" placeholder="Search employees" name="searchTerm" onChange={this.handleInputChange}></input>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Sort By
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
                        {/* <option className="dropdown-item" name="sort" value="First Name" onClick={this.handleSortChange}>First Name</option>
                        <option className="dropdown-item" name="sort" value="Last Name" onClick={this.handleSortChange}>Last Name</option> */}
                        <option className="dropdown-item" name="sort" value="original_release_date" onClick={this.handleSortChange}>original_release_date</option>
                        {/* <option className="dropdown-item" name="sort" value="Phone Number" onClick={this.handleSortChange}>Phone Number</option>
                        <option className="dropdown-item" name="sort" value="Username" onClick={this.handleSortChange}>Username</option> */}
                        <option className="dropdown-item" name="sort" value="" onClick={this.handleSortChange}>None</option>
                    </div>
                </div>
                {
                    resultsArray.map(employee => 
                        <EmployeeList employee={employee} key={this.counter++}></EmployeeList>
                    )
                }
            </div>
        );
    }
}






export default Directory;