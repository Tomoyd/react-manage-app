import React,{Component} from "react"
import { Table,Button } from 'antd';



const data = [];
for (let i = 0; i < 10; i++) {
    data.push({
        key: i,
        name: `小 ${i} 哥`,
        age: 32,
        address: `北京 海淀. ${i}号`,
    });
}

class TableComponent extends Component {

    deleteItem(index){
        let datas=this.state.data.slice()
        datas.splice(index,1)
        this.setState({
            data:datas
        })
    }
    state = {
        selectedRowKeys: [], // Check here to configure the default column
        data:data.slice(),
    };
    onSelectChange = selectedRowKeys => {
        this.setState({ selectedRowKeys });
    };
    columns = [
        {
            title: '姓名',
            dataIndex: 'name',
        },
        {
            title: '年龄',
            dataIndex: 'age',
        },
        {
            title: '地址',
            dataIndex: 'address',
        },
        {
            title: '操作',
            dataIndex: '',
            key: 'x',
            render: (text, record, index) => { return <Button onClick={ ()=>{this.deleteItem(index)}}>删除</Button>},
        },
    ];


    render() {
        const { selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
            hideDefaultSelections: true,
            selections: [
                Table.SELECTION_ALL,
                Table.SELECTION_INVERT,
                {
                    key: 'odd',
                    text: 'Select Odd Row',
                    onSelect: changableRowKeys => {
                        let newSelectedRowKeys = [];
                        newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                            if (index % 2 !== 0) {
                                return false;
                            }
                            return true;
                        });
                        this.setState({ selectedRowKeys: newSelectedRowKeys });
                    },
                },
                {
                    key: 'even',
                    text: 'Select Even Row',
                    onSelect: changableRowKeys => {
                        let newSelectedRowKeys = [];
                        newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                            if (index % 2 !== 0) {
                                return true;
                            }
                            return false;
                        });
                        this.setState({ selectedRowKeys: newSelectedRowKeys });
                    },
                },
            ],
        };
        return <Table rowSelection={rowSelection} columns={this.columns} dataSource={this.state.data} />;
    }
}
export default TableComponent;
