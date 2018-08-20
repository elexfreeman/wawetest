import React, {Component} from 'react';


class MainComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    // после рендеринго
    componentDidMount() {

    }

    render() {
        return ( <div>
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th>ФИО</th>
                    <th>Дата рождения</th>
                    <th>Адрес</th>
                    <th>Город</th>
                    <th>Телефон</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr className="active">
                    <td>The Shawshank Redemption</td>
                    <td>Crime, Drama</td>
                    <td>14 October 1994</td>
                    <td>14 October 1994</td>
                    <td>14 October 1994</td>
                    <td>14 October 1994</td>
                </tr>
                </tbody>
            </table>

        </div>)
    }
}

export default MainComponent;
