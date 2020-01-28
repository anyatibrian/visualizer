import React from 'react'
import { Row, Col, Typography } from 'antd'
import { Pie, Bar } from 'react-chartjs-2'
const { Title, Text } = Typography

export const PieandBarChartComponent = ({ pieData, pieChart2, bargraph1 }) => {
    return (
        <div style={{ marginTop: 50 }}>
            <Row>
                <Col span={4}>
                </Col>
                <Col span={16}>
                    <Typography>
                        <Text style={{ textAlign: 'justify', fontSize: '20px', paddingTop: '100px', fontStyle: 'italic' }}>
                            Source Population: extrapolation made from the count made in December 2016.
                            The total of the 2019 population for the CP3 program is made over the 5 areas of
                            targeted health.
                        </Text>
                    </Typography>
                    <table >
                        <thead>
                            <tr>
                                <td>S23</td>
                                <td>Baita-Ababiri</td>
                                <td>Kitoro</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Number of Households visited</td>
                                <td>539</td>
                                <td>549</td>
                            </tr>
                            <tr>
                                <td>Number of people visited</td>
                                <td>1687</td>
                                <td>2989</td>
                            </tr>
                            <tr>
                                <td>Volunteers Having notified</td>
                                <td>52</td>
                                <td>44</td>
                            </tr>
                        </tbody>
                    </table>
                </Col>
                <Col span={4}>
                </Col>
            </Row>
            <Row style={{ marginTop: '50px' }}>
                <Col span={7}>
                    <Typography>
                        <Title level={4} style={{ textAlign: 'center' }}>
                            Baita-Abairi
                        </Title>
                    </Typography>
                    <Pie data={pieData}
                        width={200}
                        options={{
                            responsive: true,
                            legend: {
                                display: true,
                                labels: {
                                    boxWidth: 10
                                }
                            },
                            plugins: {
                                datalables: {

                                }
                            }
                        }}
                    >
                    </Pie>
                </Col>
                <Col span={10}>

                    <p style={{ fontSize: '18px', fontStyle: 'italic', textAlign: 'center' }}>
                        Population 2019 for the 10 health areas, i.e. 5 health areas for Nsona-Pangu with 46,287 people,
                        i.e. 5 health areas for Kimpese with 42,191 people
                    </p>
                    <p style={{ marginTop: 50, textAlign: 'center', fontStyle: 'italic', fontSize: '18px' }}>
                        A total of 150 volunteers have been trained in surveillance, 75 in the Baita Abairi Health  health zone and 75 in the
                        Kitoro health zone.
                    </p>
                    <Row>
                        <Col span={12}>
                            <Bar
                                width={500}
                                height={500}
                                data={bargraph1}
                                options={{
                                    legend: {
                                        position: 'bottom',
                                        labels: {
                                            boxWidth: 10
                                        }
                                    }
                                }}
                            >

                            </Bar>
                        </Col>
                        <Col span={12}>
                            <Bar
                                width={500}
                                height={500}
                                data={bargraph1}
                                options={{
                                    legend: {
                                        position: 'bottom',
                                        labels: {
                                            boxWidth: 10
                                        }
                                    }
                                }}
                            >

                            </Bar>
                        </Col>
                    </Row>
                </Col>
                <Col span={7}>
                    <Typography>
                        <Title level={4} style={{ textAlign: 'center' }}>
                            Kitoro
                        </Title>
                    </Typography>
                    <Pie data={pieChart2}
                        width={200}
                        options={{
                            responsive: true,
                            legend: {
                                display: true,
                                labels: {
                                    boxWidth: 10
                                }
                            },
                            plugins: {
                                datalables: {

                                }
                            }
                        }}
                    >
                    </Pie>
                </Col>
            </Row>
        </div >
    )
}