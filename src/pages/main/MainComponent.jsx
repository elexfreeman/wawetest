import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {getList} from "../../models/clients_model";
import {mysqlDatePipe} from "../../pipes/date_pipe";


class MainComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clients: []
            , client_total: 0
            , offset: 0
        };

        this.onGetList = this.onGetList.bind(this);
    }

    // после рендеринго
    componentDidMount() {
        this.onGetList();
    }

    /*список клиентов*/
    onGetList() {

        getList(this.state.offset).then(resp => {
            console.log(resp);
            this.setState({
                clients: resp.list.row
                , client_total: parseInt(resp.list.total)
            });

        })

    }

    render() {
        return (<div>
            <Link className="btn btn-primary" to={'/add'}>Добавить</Link>

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
                {this.state.clients.map((item, key) =>
                    <tr key={key}>
                        <td>
                            <Link to={"/edit/" + item.id}>
                                {item.surname} {item.name} {item.patronymic}
                            </Link>
                        </td>
                        <td>{mysqlDatePipe(item.birthday)}</td>
                        <td>{item.address}</td>
                        <td>{item.city}</td>
                        <td>{item.phone}</td>
                        <td>
                            <button className="btn btn-action"><i className="icon icon-delete"></i></button>
                        </td>
                    </tr>
                )}

                </tbody>
            </table>

        </div>)
    }
}

export default MainComponent;
