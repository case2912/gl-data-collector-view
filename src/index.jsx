import React from "react"
import ReactDOM from "react-dom"
import {extensions, parameters} from "./target-data.js"
const parametersColumn = []
for (var i = 0; i < parameters.length; i++) {
    parametersColumn.push(
        <tr>
            <td>{parameters[i]}</td>
        </tr>
    )
}
const extensionsColumn = []
for (var i = 0; i < extensions.length; i++) {
    extensionsColumn.push(
        <tr>
            <td>{extensions[i]}</td>
        </tr>
    )
}
const ParametersTable = () => (
    <table>
        <tbody>
            <tr>
                <th>WebGL Extensions</th>
            </tr>
            {parametersColumn}
        </tbody>
    </table>
)
const ExtensionsTable = () => (
    <table>
        <tbody>
            <tr>
                <th>WebGL parameters</th>
            </tr>
            {extensionsColumn}
        </tbody>
    </table>
)
const App = () => (
    <div>
        <ParametersTable/>
        <ExtensionsTable/>
    </div>
)
ReactDOM.render(
    <App/>, document.getElementById('app'))
