import React, {Component} from 'react';
// import qs from 'qs';

// mock 数据
const details = [
    {id: '01', content: '消息 1 详情'},
    {id: '02', content: '消息 2 详情'},
    {id: '03', content: '消息 3 详情'},
]

class Detail extends Component {
    render() {
        // 接收 params 参数
        // const {id, title} = this.props.match.params;

        // 接收 search 参数，是一个 querystring 形式
        // const {search} = this.props.location;
        // const {id, title} = qs.parse(search.slice(1));  // 从?后面开始截取字符串

        // 接收 state 参数（为了防止清除缓存后在地址栏直接输入 .../detail，state 为 undefined，使用空对象代替）
        const {id, title} = this.props.location.state || {};

        const findDetail = details.find((detail) => {
            return detail.id === id;
        }) || {};

        return (
            <div>
                <ul>
                    <li>title: {title}</li>
                    <li>content: {findDetail.content}</li>
                </ul>
            </div>
        );
    }
}

export default Detail;