import React from 'react';
import { useNextRace } from './api/get_next_race';
import { Box, Card, Divider, Typography } from '@mui/material';
import CircuitFlag from '../circuits/flags';


function NextRace() {
  const nextRaceQuery = useNextRace();

  if (nextRaceQuery.isSuccess) {
    const nextRace = nextRaceQuery.data.data.MRData.RaceTable.Races[0];

    if (nextRace) {
      const nextRaceName = nextRace.raceName;
      const nextRaceCircuit = nextRace.Circuit;
      const nextRaceDate = nextRace.date;
      const nextRaceTime = nextRace.time;

      const [nRyear, nRmonth, nRday] = nextRaceDate.split('-');
      const [nRhours, nRminutes] = nextRaceTime.split(':');

      const today = new Date();
      const timeZone = today.getTimezoneOffset() / -60;

      const nextRaceDateFormatted = new Date(
        +nRyear,
        +nRmonth - 1,
        +nRday,
        +nRhours + timeZone,
        +nRminutes
      );

      return (
        <Card className="max-w-lg mx-auto mt-32">
          <div className="text-center">
            <Box bgcolor="black">
              <Typography variant="h5" component="div" color={'white'}>
                Next Race
              </Typography>
            </Box>
            <Divider sx={{ my: 1 }} />
            <CircuitFlag circuitId={nextRaceCircuit.circuitId} />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="h6" component="div" sx={{ marginLeft: '0.5rem' }}>
                {nextRaceName}
              </Typography>
            </div>
            <Typography variant="body1" component="div">
              {nextRaceDateFormatted.toDateString()} at {nextRaceTime}
            </Typography>
          </div>
        </Card>
      );
    } else {
      return (
        <>
          <Typography variant="h4" component="div" sx={{ textAlign: 'center', marginTop: '8rem' }}>
            It's off season. See you in {new Date().getFullYear() + 1} !
          </Typography>
        </>
      );
    }
  } else {
    return (
      <Card className="max-w-lg mx-auto mt-32">
        <Typography variant="h2" component="div" sx={{ textAlign: 'center', marginBottom: '1rem' }}>
          It's off season. See you in {new Date().getFullYear() + 1} !
        </Typography>
      </Card>
    );
  }
}

export default NextRace;