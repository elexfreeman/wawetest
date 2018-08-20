import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {getList, setDeleted} from "../../models/clients_model";
import {mysqlDatePipe} from "../../pipes/date_pipe";


class MainComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clients: []
            , client_total: 0
            , offset: 0
            , deletedClient: 0
        };

        this.onGetList = this.onGetList.bind(this);
        this.onDeleted = this.onDeleted.bind(this);
        this.deleteClient = this.deleteClient.bind(this);
        this.onCloseDeleteModal = this.onCloseDeleteModal.bind(this);
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

    /*модалка поддтверждения удаления*/
    onDeleted(client_id) {
        this.setState({
            deletedClient: parseInt(client_id)
        })
    }

    /*удаление клиента*/
    deleteClient() {
        /*скрываем модалку*/
        this.onCloseDeleteModal();
        if (this.state.deletedClient > 0) {
            setDeleted(this.state.deletedClient).then(resp => {
                this.onGetList();
            });
        }
    }

    onCloseDeleteModal() {
        this.setState({
            deletedClient: 0
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
                            <button
                                onClick={() => this.onDeleted(item.id)}
                                className="btn btn-action"><i className="icon icon-delete"></i></button>
                        </td>
                    </tr>
                )}

                </tbody>
            </table>

            <div className={
                (this.state.deletedClient > 0) ? ("modal modal-sm active") : ("modal modal-sm")}>
                <button className="modal-overlay" onClick={this.onCloseDeleteModal} aria-label="Close"></button>
                <div className="modal-container" role="document">
                    <div className="modal-header">
                        <button className="btn btn-clear float-right" onClick={this.onCloseDeleteModal}></button>
                        <div className="modal-title h5">Удаление клиента</div>
                    </div>
                    <div className="modal-body">
                        <div className="content">
                            Удалить
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-primary" onClick={this.deleteClient}>Да</button>
                        <button className="btn" onClick={this.onCloseDeleteModal}>Отмена</button>
                    </div>
                </div>
            </div>

        </div>)
    }
}

export default MainComponent;
