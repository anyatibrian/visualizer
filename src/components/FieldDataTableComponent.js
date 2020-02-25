import React from 'react'
import { Table } from 'antd'

export const FieldDataTableComponent = ({ observationData }) => {
    const columns = [
        {
            title: 'Households',
            dataIndex: 'HouseholdsVisited',
            key: 'HouseholdsVisited',
        },
        {
            title: 'Voluteers',
            dataIndex: 'NumberOFVoluteers',
            key: 'NumberOFVoluteers',
        },
        {
            title: 'PeopleVisited',
            dataIndex: 'PeopleVisited',
            key: 'PeopleVisited',
        },
        {
            title: 'DiseaseInHumans',
            dataIndex: 'UnusualDeathOrDiseaseInHumans',
            key: 'UnusualDeathOrDiseaseInHumans',
        },
        {
            title: 'DiseaseInAnimals',
            dataIndex: 'unusualDeathOrDiseaseInAnimals',
            key: 'unusualDeathOrDiseaseInAnimals',
        },
        {
            title: 'Diarrhea',
            dataIndex: 'acuteWateryDiarrhea',
            key: 'acuteWateryDiarrhea',
        },
        {
            title: 'chikungunya',
            dataIndex: 'chikungunya',
            key: 'chikungunya',
        },
        {
            title: 'Ebola',
            dataIndex: 'ebola',
            key: 'ebola',
        },
        {
            title: 'Measles',
            dataIndex: 'measles',
            key: 'measles',
        },
        {
            title: 'PFA',
            dataIndex: 'pfa',
            key: 'pfa',
        },
        {
            title: 'YellowFever',
            dataIndex: 'yellowFever',
            key: 'yellowFever',
        },
        {
            title: 'Rage',
            dataIndex: 'rage',
            key: 'rage',
        },
        {
            title: 'HealthArea',
            dataIndex: 'healthArea',
            key: 'healthArea',
        },
        {
            title: 'HealthZone',
            dataIndex: 'healthZone',
            key: 'healthZone',
        },
        
    ];
    return (
        <div>
            <Table dataSource={observationData} columns={columns} />
        </div>
    )
}
