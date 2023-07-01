import React from 'react'
import { Select, Space } from 'antd';
import { useState } from 'react';
const provinceData = ['Zhejiang', 'Jiangsu'];
const cityData = {
  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
};
const Filter = () => {
  const [cities, setCities] = useState(cityData[provinceData[0]]);
  const [secondCity, setSecondCity] = useState(cityData[provinceData[0]][0]);
  const handleProvinceChange = (value) => {
    setCities(cityData[value]);
    setSecondCity(cityData[value][0]);
  };
  const onSecondCityChange = (value) => {
    setSecondCity(value);
  };
  return (
    <Space wrap>
      <Select
        defaultValue={provinceData[0]}
        style={{
          width: 120,
        }}
        onChange={handleProvinceChange}
        options={provinceData.map((province) => ({
          label: province,
          value: province,
        }))}
      /> 
    </Space>
  );
};
export default Filter;