import React, {useEffect, useState} from 'react'
import { Select } from 'antd';

const SearchBar = ({ handleChange, defaultValue}) => {

  // useEffect(() => {
  //   fetchData()
  // }, [])

    return (
      <Select
        defaultValue={defaultValue}
        style={{
          width: 200,
        }}
        onChange={handleChange}
        
        //options={titleArray}
        options={[
          {
            value: '1',
            label: 'Match 1',
          },
          {
            value: '2',
            label: 'Match 2',
          },
          {
            value: '3',
            label: 'Match 3',
          },
        ]}
      />
    );
  }
export default SearchBar;
