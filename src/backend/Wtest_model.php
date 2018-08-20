<?php if (!defined('BASEPATH')) exit('No direct script access allowed');


class Wtest_model extends CI_Model
{

    public function __construct()
    {
        $this->load->database();

    }


    public function getList($limit = 10)
    {
        $res = [];
        $sql = "select * From w_clients c
        where c.deleted=0";

        $this->db->reset_query();
        $query = $this->db->query("select count(*) cc from (" . $sql . ") ccv");

        $res['total']  = $query->row_array();
        $res['total'] = $res['total']['cc'] ;

        $this->db->reset_query();
        $query = $this->db->query($sql . ' limit 0, ?', [$limit]);

        $res['row']  = $query->result_array();

        return $res;
    }

    public function setDeleted($client_id)
    {
        $this->db->reset_query();
        $this->db->query('update w_clients set `deleted` = 1 where id=?', [$client_id]);
    }

   public function add($data)
    {
        $this->db->reset_query();
        $this->db->insert('w_clients', $data);
        return $this->db->insert_id();
    }
   public function update($data)
    {
        $this->db->reset_query();
        $this->db->where('id', $data['id']);
        unset($data['id']);
        $this->db->update('w_clients', $data);
    }

    public function getClient($client_id)
    {
        $sql = "select * From w_clients where (id=?)and(deleted=0) limit 1";
        $query = $this->db->query($sql,[$client_id]);

        return $query->row_array();
    }



}
