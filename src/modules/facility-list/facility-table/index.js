import React from 'react';
import Table from 'components/table';
import { useHistory } from 'react-router';

import InfinitePagination from 'components/infinite-pagination';

const columns = [
  {
    dataIndex: 'name',
    title: 'Name of the Facility',
    width: '30%'
  },
  {
    dataIndex: 'covidFacilityType',
    title: 'Type'
  },
  {
    dataIndex: 'facilityStatus',
    title: 'Status'
  },
  {
    dataIndex: 'jurisdiction',
    title: 'Jurisdiction'
  },
  {
    dataIndex: 'area',
    title: 'Area'
  }
];

export default function FacilityTable({
  loading,
  data,
  current,
  hasNext,
  hasPrev,
  handleNextClick,
  handlePrevClick
}) {
  const history = useHistory();
  const onRow = (record, rowIndex) => {
    return {
      onClick: event => {
        history.push(`/facility/edit/${record.facilityId}`);
      }
    };
  };

  return (
    <div>
      <Table
        stripped
        loading={loading}
        onRow={onRow}
        columns={columns}
        dataSource={data}
        pagination={false}
      />
      <div className='d--f fd--rr mt2'>
        <InfinitePagination
          current={current}
          hasNext={hasNext}
          hasPrev={hasPrev}
          handleNextClick={handleNextClick}
          handlePrevClick={handlePrevClick}
        />
      </div>
    </div>
  );
}
