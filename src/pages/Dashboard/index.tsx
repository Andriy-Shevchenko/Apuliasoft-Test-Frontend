import React, {useEffect, useState} from "react";
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import * as DataService from '../../api/data.service';
import Table from "../../components/elements/Table";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const aggregationTypes = [
  'project',
  'employee',
  'date'
];

const Dashboard = () => {
  const [aggregations, setAggregations] = useState<string[]>([]);
  const [columns, setColumns] = useState<string[]>([]);
  const [activities, setActivities] = useState<any[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof aggregations>) => {
    const {
      target: { value },
    } = event;
    setAggregations(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleFetchData = async () => {
    await DataService.getActivities(aggregations)
      .then((res) => {
        setColumns(res.data.columns);
        setActivities(res.data.data);
      })
  };

  useEffect(() => {
    (async () => {
      await handleFetchData();
    })();
  }, [aggregations]);

  return (
    <div className="min-h-screen w-full pt-32">
      <h1 className="font-bold text-3xl text-black text-center">
        Test
      </h1>
      <div className="flex items-center">
        <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="demo-multiple-chip-label">Aggregations</InputLabel>
              <Select
                  labelId="demo-multiple-chip-label"
                  id="demo-multiple-chip"
                  multiple
                  value={aggregations}
                  onChange={handleChange}
                  input={<OutlinedInput id="select-multiple-chip" label="Aggregations" />}
                  renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                  MenuProps={MenuProps}
              >
                {aggregationTypes.map((aggregationType) => (
                  <MenuItem
                    key={aggregationType}
                    value={aggregationType}
                  >
                    {aggregationType}
                  </MenuItem>
                ))}
              </Select>
          </FormControl>
      </div>
      <div className="p-4">
        <Table
          columns={columns}
          tableData={activities}
        />
      </div>
    </div>
  );
}

export default Dashboard;