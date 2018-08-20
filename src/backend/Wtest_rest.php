<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/*rest сервер для личного кабинета*/

class Wtest_rest extends CI_Controller
{

    public function __construct()
    {
        parent::__construct();

        /*модель для поиска*/
        $this->load->model('wtest_model');
    }

    /*список клиентов*/
    public function getList()
    {
        /*возвр результат*/
        $res = [];

        $_POST = json_decode(file_get_contents('php://input'), TRUE);

        $res['post'] = $_POST;

        $res['list'] = $this->wtest_model->getList();

        echo json_encode($res);

    }

    /*удаляет клиента*/
    public function setDeleted()
    {
        /*возвр результат*/
        $res = [];

        $_POST = json_decode(file_get_contents('php://input'), TRUE);

        $res['post'] = $_POST;
        if ($_POST != null) {
            $this->wtest_model->setDeleted($_POST['client_id']);
        }

        echo json_encode($res);

    }

    /*добавляем клиента*/
    public function add()
    {
        /*возвр результат*/
        $res = [];

        $_POST = json_decode(file_get_contents('php://input'), TRUE);

        $res['post'] = $_POST;

        if ($_POST != null) {
            $res['client_id'] = $this->wtest_model->add($_POST);
        }

        echo json_encode($res);
    }

    /*обновляем клиента*/
    public function update()
    {
        /*возвр результат*/
        $res = [];

        $_POST = json_decode(file_get_contents('php://input'), TRUE);

        $res['post'] = $_POST;

        if ($_POST != null) {
            $this->wtest_model->update($_POST);
        }

        echo json_encode($res);
    }

    /*добавляем клиента*/
    public function getClient()
    {
        /*возвр результат*/
        $res = [];

        $_POST = json_decode(file_get_contents('php://input'), TRUE);

        $res['post'] = $_POST;

        if ($_POST != null) {
            $client = $this->wtest_model->getClient($_POST['client_id']);
            $b = explode('-', $client['birthday']);
            $client['day'] = $b[2];
            $client['month'] = $b[1];
            $client['year'] = $b[0];
            $res['client'] = $client;
        }

        echo json_encode($res);
    }


}
