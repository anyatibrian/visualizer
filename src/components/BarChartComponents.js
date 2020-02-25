import React from 'react'
import { Row, Col, Typography } from 'antd'
import { HorizontalBar } from 'react-chartjs-2'

const { Title, Text, Paragraph } = Typography
export const BarChartComponent = ({ horizontalChart1, horizontalChart2 }) => {
    return (
        <div>
            <Row>
                <Col span={14}>
                </Col>
            </Row>
            <Row>
                <Col span={8}>
                    <HorizontalBar
                        data={horizontalChart1}
                        height={450}
                        width={300}
                        options={{
                            legend: {
                                display: true,
                                position: 'bottom',
                                align: 'end',
                                labels: {
                                    boxWidth: 10
                                }
                            },
                            scales: {
                                yAxes: [{
                                    gridLines: {
                                        display: false
                                    },
                                },
                                ],
                                xAxes: [
                                    {
                                        gridLines: {
                                            display: true
                                        }
                                    }
                                ]
                            }

                        }}
                    >
                    </HorizontalBar>
                </Col>
                <Col span={8}>
                    <HorizontalBar
                        data={horizontalChart2}
                        height={450}
                        width={300}
                        options={{
                            legend: {
                                display: true,
                                position: 'bottom',
                                width: '200px',
                                align: 'end',
                                labels: {
                                    boxWidth: 10
                                }
                            },

                            scales: {
                                yAxes: [{
                                    gridLines: {
                                        display: false
                                    },
                                },
                                ],
                                xAxes: [
                                    {
                                        gridLines: {
                                            display: true
                                        }
                                    }
                                ]
                            }
                        }}
                    >
                    </HorizontalBar>
                </Col>
                <Col span={8}>
                    <Typography>
                        <Text style={{ fontWeight: 'bold' }}>HEALTH ZONE OF KITORO</Text>
                    </Typography>
                    <table >
                        <thead>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Liquid diarrhea</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>Bloody diarrhea</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>Rougeole</td>
                                <td>7</td>
                            </tr>
                            <tr>
                                <td>Viral hemorrhagic fever</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>Yellow fever</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>chikungunya</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>Rage</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>Peste</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>Number of Households visited</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>Number of Households visited</td>
                                <td>2123</td>
                            </tr>
                            <tr>
                                <td>Volunteer Having notified</td>
                                <td>7229</td>
                            </tr>
                        </tbody>
                    </table>
                    <Typography>
                        <Text style={{ fontWeight: 'bold' }}>ABAITA  HEALTH ZONE</Text>
                    </Typography>
                    <table >
                        <thead>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Liquid diarrhea</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>Bloody diarrhea</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>Rougeole</td>
                                <td>7</td>
                            </tr>
                            <tr>
                                <td>Viral hemorrhagic fever</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>Yellow fever</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>chikungunya</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>Rage</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>Peste</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>Number of Households visited</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>Number of Households visited</td>
                                <td>2123</td>
                            </tr>
                            <tr>
                                <td>Volunteer Having notified</td>
                                <td>7229</td>
                            </tr>
                        </tbody>
                    </table>
                </Col>
            </Row>
        </div>
    )
}
