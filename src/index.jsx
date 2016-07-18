import React from "react"
import ReactDOM from "react-dom"

const Table = () => (
    <table>
        <tbody>
            <tr>
                <td>A</td>
                <td>B</td>
                <td>C</td>
            </tr>
            <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
            </tr>
            <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
            </tr>
        </tbody>
    </table>
)
const App = () => (
    <div>
        <Table/>
    </div>
)
ReactDOM.render(
    <App/>, document.getElementById('app'));
