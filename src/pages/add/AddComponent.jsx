import React, {Component} from 'react';


class AddComponent extends Component {
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
            <h3>Добавление клиента</h3>
            <div className="column col-6 col-xs-12">
                <div className="form-group">
                    <label className="form-label" htmlFor="surname">Фамилия</label>
                    <input className="form-input" id="surname" type="text" placeholder="...например Иванов" />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="name">Имя</label>
                    <input className="form-input" id="name" type="text" placeholder="...например Иван" />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="patronymic">Отчество</label>
                    <input className="form-input" id="patronymic" type="text" placeholder="...например Михайлович" />
                </div>

                <div className="column col-12">
                    <h5>Дата рождения</h5>
                    <div className="columns">
                        <div className="column col-3">
                            <div className="form-group">
                                <label className="form-label" htmlFor="day">День</label>
                                <input className="form-input" id="day" type="text" />
                            </div>
                        </div>
                        <div className="column col-6">
                            <div className="form-group">
                                <label className="form-label" htmlFor="month">Месяц</label>
                                <input className="form-input" id="month" type="text" />
                            </div>
                        </div>
                        <div className="column col-3">
                            <div className="form-group">
                                <label className="form-label" htmlFor="year">Год</label>
                                <input className="form-input" id="year" type="text" />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="form-group">
                    <label className="form-label" htmlFor="city">Город</label>
                    <input className="form-input" id="city" type="text" placeholder="...например Москва" />
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="address">Адрес</label>
                    <input className="form-input" id="address" type="text" placeholder="...например Садовая 78" />
                </div>



                <div className="form-group">
                    <label className="form-label" htmlFor="phone">Телефон</label>
                    <input className="form-input" id="phone" type="text" placeholder="...например +7 333 333 33 33" />
                </div>

            </div>

        </div>)
    }
}

export default AddComponent;
