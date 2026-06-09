import React from 'react';
import TextModal from "../modal/TextModal"

const Tables = ({data_list}) => {
    return (
        <div>
            <table class="table">
            <thead>
                <tr>
                    <th scope="col">Category</th>
                    <th scope="col">Name</th>
                    <th scope="col">Current Position</th>
                    <th scope="col">Graduate Date</th>
                    <th scope="col">Homepage</th>
                </tr>
            </thead>
            <tbody>
                {data_list.map((item) => {
                    return (
                        <tr>
                            <td>{item.grduate}</td>
                            {item.plylist !== "" ? (
                                <td><TextModal
                                    title = {item.title}
                                    ko_name = {item.ko_name}
                                    en_name = {item.en_name}
                                    plylist = {item.plylist}
                                    background = {item.background_color}
                                    font_color = {item.font_color}
                                /></td>
                            ) : <td>{item.title}</td>}
                            <td>{item.position}</td>
                            <td>{item.end}</td>
                            <td>
                            {item.website !== "#" ? (
                                <a href={item.website}>
                                    <p><b>Link</b></p>
                                </a>
                                ) : null
                            }
                            </td>
                        </tr>
                    );
                })}
            </tbody>
            </table>
        </div>
    );
};

export default Tables;
