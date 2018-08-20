import React, {Component} from 'react';

import InputMask from 'react-input-mask';
import {updateClient, getClient} from "../../models/clients_model";

import {intToDay} from "../../pipes/date_pipe";

class EditComponent extends Component {
    constructor(props) {
        super(props);


        this.state = {
            name: ''
            , surname: ''
            , patronymic: ''
            , day: ''
            , month: ''
            , year: ''
            , city: ''
            , address: ''
            , phone: ''
            , id: 0

            , name_error: false
            , surname_error: false
            , patronymic_error: false
            , day_error: false
            , month_error: false
            , year_error: false
            , city_error: false
            , address_error: false
            , phone_error: false

            , onSend: false
        };

        this.onChangeInput = this.onChangeInput.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
        this.getClientInfo = this.getClientInfo.bind(this);
        this.beforeMaskedValueChange = this.beforeMaskedValueChange.bind(this);
    }

    getClientInfo() {
        let that = this;
        getClient(this.props.match.params.client_id).then(resp => {
            console.log(resp);
            this.setState({
                name: resp.client.name
                , surname: resp.client.surname
                , patronymic: resp.client.patronymic
                , day: resp.client.day
                , month: resp.client.month
                , year: resp.client.year
                , city: resp.client.city
                , address: resp.client.address
                , phone: resp.client.phone
                , id: resp.client.id
            }, () => {
                /*проставляем значения*/
                document.getElementById('name').value = that.state.name;
                document.getElementById('surname').value = that.state.surname;
                document.getElementById('patronymic').value = that.state.patronymic;
                document.getElementById('day').value = that.state.day;
                document.getElementById('month').value = that.state.month;
                document.getElementById('year').value = that.state.year;
                document.getElementById('city').value = that.state.city;
                document.getElementById('address').value = that.state.address;
                document.getElementById('phone').value = that.state.phone;

            })
        })
    }

    // после рендеринга
    componentDidMount() {
        this.getClientInfo();

    }

    /*событие изменения поля вводв*/
    onChangeInput(event) {
        event.preventDefault();

        if (event.target.name === 'day') {
            if ((parseInt(event.target.value) > 31) || (parseInt(event.target.value) < 0)) {
                /*не ставим если день невалидный*/
                document.getElementById('day').value = this.state.day;
                console.log('day err');
            } else {
                localStorage.setItem(event.target.name, event.target.value);
                this.setState({
                    [event.target.name]: event.target.value
                })
            }

        } else {
            localStorage.setItem(event.target.name, event.target.value);
            this.setState({
                [event.target.name]: event.target.value
            })
        }

    }


    onUpdate() {
        let that = this;
        let currentTime = new Date();
        let current_year = currentTime.getFullYear();

        /*проверка формы*/
        let error = false;
        if ((this.state.surname == null) || (this.state.surname.length < 3)) {
            this.setState({
                surname_error: true
            });
            error = true;
        } else {
            this.setState({
                surname_error: false
            });
        }
        if ((this.state.name == null) || (this.state.name.length < 3)) {
            this.setState({
                name_error: true
            });
            error = true;
        } else {
            this.setState({
                name_error: false
            });
        }
        if ((this.state.patronymic == null) || (this.state.patronymic.length < 3)) {
            this.setState({
                patronymic_error: true
            });
            error = true;
        } else {
            this.setState({
                patronymic_error: false
            });
        }
        if ((this.state.day == null) || (parseInt(this.state.day) > 31) || (parseInt(this.state.day) < 1)) {
            this.setState({
                day_error: true
            });
            error = true;
        } else {
            this.setState({
                day_error: false
            });
        }

        if ((this.state.month == null) || (parseInt(this.state.month) > 12) || (parseInt(this.state.month) < 1)) {
            this.setState({
                month_error: true
            });
            error = true;
        } else {
            this.setState({
                month_error: false
            });
        }
        if ((this.state.year == null) || (parseInt(this.state.year) > current_year) || (parseInt(this.state.year) < 1900)) {
            this.setState({
                year_error: true
            });
            error = true;
        } else {
            this.setState({
                year_error: false
            });
        }

        if ((this.state.city == null) || (this.state.city.length < 2)) {
            this.setState({
                city_error: true
            });
            error = true;
        } else {
            this.setState({
                city_error: false
            });
        }

        if ((this.state.address == null) || (this.state.address.length < 3)) {
            this.setState({
                address_error: true
            });
            error = true;
        } else {
            this.setState({
                address_error: false
            });
        }

        if ((this.state.phone == null) || (this.state.phone.length != 16)) {
            this.setState({
                phone_error: true
            });
            error = true;
        } else {
            this.setState({
                phone_error: false
            });
        }





        /*если нет ошибок отправляем данные*/
        if (!error) {
            this.setState({
                onSend: true
            });
            updateClient({
                name: this.state.name
                , surname: this.state.surname
                , patronymic: this.state.patronymic
                , birthday: this.state.year + '-' + this.state.month + '-' + intToDay(this.state.day)

                , city: this.state.city
                , address: this.state.address
                , phone: this.state.phone

                , id: this.state.id
            }).then(resp => {
                this.setState({
                    name: ''
                    , surname: ''
                    , patronymic: ''
                    , day: ''
                    , month: ''
                    , year: ''
                    , city: ''
                    , address: ''
                    , phone: ''

                    , name_error: false
                    , surname_error: false
                    , patronymic_error: false
                    , day_error: false
                    , month_error: false
                    , year_error: false
                    , city_error: false
                    , address_error: false
                    , phone_error: false

                    , onSend: false
                }, () => {
                    /*чистим localStorage*/
                    localStorage.removeItem('name');
                    localStorage.removeItem('surname');
                    localStorage.removeItem('patronymic');
                    localStorage.removeItem('day');
                    localStorage.removeItem('month');
                    localStorage.removeItem('year');
                    localStorage.removeItem('city');
                    localStorage.removeItem('address');
                    localStorage.removeItem('phone');
                    /*редирект на главную*/
                    that.props.history.push('/');
                });

            })

        }

    }


    /****************/
    beforeMaskedValueChange(newState, oldState, userInput){
        var { value } = newState;
        var selection = newState.selection;
        var cursorPosition = selection ? selection.start : null;

        return {
            value,
            selection
        };
    }
    /****************/

    render() {
        return (<div>
            <h3>Добавление клиента</h3>
            <div className="column col-6 col-xs-12">
                <div className="form-group">
                    <label className="form-label" htmlFor="surname">Фамилия</label>
                    <input onChange={this.onChangeInput}
                           className={this.state.surname_error ? ("form-input is-error") : ('form-input')}
                           id="surname" name="surname" type="text"
                           placeholder="...например Иванов"/>
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="name">Имя</label>
                    <input onChange={this.onChangeInput}
                           className={this.state.name_error ? ("form-input is-error") : ('form-input')}
                           id="name" name="name" type="text"
                           placeholder="...например Иван"/>
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="patronymic">Отчество</label>
                    <input onChange={this.onChangeInput}
                           className={this.state.patronymic_error ? ("form-input is-error") : ('form-input')}
                           id="patronymic" name="patronymic"
                           type="text"
                           placeholder="...например Михайлович"/>
                </div>

                <div className="column col-12">
                    <h5>Дата рождения</h5>
                    <div className="columns">
                        <div className="column col-3">
                            <div className="form-group">
                                <label className="form-label" htmlFor="day">День</label>
                                <input onChange={this.onChangeInput} name="day"
                                       className={this.state.day_error ? ("form-input is-error") : ('form-input')}
                                       id="day"
                                       type="text"/>

                            </div>
                        </div>
                        <div className="column col-6">
                            <div className="form-group">
                                <label className="form-label" htmlFor="month">Месяц</label>
                                <select onChange={this.onChangeInput} name="month"
                                        className={this.state.month_error ? ("form-input is-error") : ('form-input')}
                                        id='month'>
                                    <option value='0'>-</option>
                                    <option value='01'>Январь</option>
                                    <option value='02'>Февраль</option>
                                    <option value='03'>Март</option>
                                    <option value='04'>Апрель</option>
                                    <option value='05'>Май</option>
                                    <option value='06'>Июнь</option>
                                    <option value='07'>Июль</option>
                                    <option value='08'>Август</option>
                                    <option value='09'>Сентябрь</option>
                                    <option value='10'>Октябрь</option>
                                    <option value='11'>Ноябрь</option>
                                    <option value='12'>Декабрь</option>
                                </select>
                            </div>
                        </div>
                        <div className="column col-3">
                            <div className="form-group">
                                <label className="form-label" htmlFor="year">Год</label>

                                <InputMask onChange={this.onChangeInput}
                                           className={this.state.year_error ? ("form-input is-error") : ('form-input')}
                                           name="year"
                                           value={this.state.year}
                                           beforeMaskedValueChange={this.beforeMaskedValueChange}
                                           id="year" {...this.props} mask="9999" maskChar=" "/>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="form-group">
                    <label className="form-label" htmlFor="city">Город</label>
                    <input onChange={this.onChangeInput}
                           className={this.state.city_error ? ("form-input is-error") : ('form-input')}
                           name="city" id="city" type="text"
                           placeholder="...например Москва"/>
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="address">Адрес</label>
                    <input onChange={this.onChangeInput}
                           className={this.state.address_error ? ("form-input is-error") : ('form-input')}
                           name="address" id="address" type="text"
                           placeholder="...например Садовая 78"/>
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="phone">Телефон</label>
                    <InputMask onChange={this.onChangeInput}
                               className={this.state.phone_error ? ("form-input is-error") : ('form-input')}
                               name="phone"
                               value={this.state.phone}
                               beforeMaskedValueChange={this.beforeMaskedValueChange}
                               id="phone" {...this.props} mask="+7 999 999 99 99" maskChar=" "/>
                </div>

                {!this.state.onSend && (
                    <button onClick={this.onUpdate} className="btn btn-success">Сохранить</button>
                )}

            </div>

        </div>)
    }
}

export default EditComponent;
