import hawksImage from '../../assets/times/hawks.png';
import celticsImage from '../../assets/times/celtics.png';
import netsImage from '../../assets/times/nets.png';
import hornetsImage from '../../assets/times/hornets.png';
import bullsImage from '../../assets/times/bulls.png';
import cavaliersImage from '../../assets/times/cavaliers.png';
import mavericksImage from '../../assets/times/mavericks.png';
import nuggetsImage from '../../assets/times/nuggets.png';
import pistonsImage from '../../assets/times/pistons.png';
import warriorsImage from '../../assets/times/warriors.png';

const times = [
  {
    id: 1,
    name: 'Hawks',
    city: 'Atlanta',
    conference: 'Eastern',
    division: 'Southeast',
    championships: 1,
    arena: 'State Farm Arena',
    headCoach: 'Nate McMillan',
    founded: 1946,
    image: hawksImage,
  },
  {
    id: 2,
    name: 'Celtics',
    city: 'Boston',
    conference: 'Eastern',
    division: 'Atlantic',
    championships: 17,
    arena: 'TD Garden',
    headCoach: 'Ime Udoka',
    founded: 1946,
    image: celticsImage,
  },
  {
    id: 3,
    name: 'Nets',
    city: 'Brooklyn',
    conference: 'Eastern',
    division: 'Atlantic',
    championships: 0, // Update with actual championships
    arena: 'Barclays Center',
    headCoach: 'Steve Nash',
    founded: 1967, // Update with actual founding year
    image: netsImage,
  },
  {
    id: 4,
    name: 'Hornets',
    city: 'Charlotte',
    conference: 'Eastern',
    division: 'Southeast',
    championships: 0, // Update with actual championships
    arena: 'Spectrum Center',
    headCoach: 'James Borrego',
    founded: 1988, // Update with actual founding year
    image: hornetsImage,
  },
  {
    id: 5,
    name: 'Bulls',
    city: 'Chicago',
    conference: 'Eastern',
    division: 'Central',
    championships: 6, // Update with actual championships
    arena: 'United Center',
    headCoach: 'Billy Donovan',
    founded: 1966, // Update with actual founding year
    image: bullsImage,
  },
  {
    id: 6,
    name: 'Cavaliers',
    city: 'Cleveland',
    conference: 'Eastern',
    division: 'Central',
    championships: 1, // Update with actual championships
    arena: 'Rocket Mortgage FieldHouse',
    headCoach: 'J.B. Bickerstaff',
    founded: 1970, // Update with actual founding year
    image: cavaliersImage,
  },
  {
    id: 7,
    name: 'Mavericks',
    city: 'Dallas',
    conference: 'Western',
    division: 'Southwest',
    championships: 1, // Update with actual championships
    arena: 'American Airlines Center',
    headCoach: 'Jason Kidd',
    founded: 1980, // Update with actual founding year
    image: mavericksImage,
  },
  {
    id: 8,
    name: 'Nuggets',
    city: 'Denver',
    conference: 'Western',
    division: 'Northwest',
    championships: 0, // Update with actual championships
    arena: 'Ball Arena',
    headCoach: 'Michael Malone',
    founded: 1967, // Update with actual founding year
    image: nuggetsImage,
  },
  {
    id: 9,
    name: 'Pistons',
    city: 'Detroit',
    conference: 'Eastern',
    division: 'Central',
    championships: 3, // Update with actual championships
    arena: 'Little Caesars Arena',
    headCoach: 'Dwane Casey',
    founded: 1941, // Update with actual founding year
    image: pistonsImage,
  },
  {
    id: 10,
    name: 'Warriors',
    city: 'Golden State',
    conference: 'Western',
    division: 'Pacific',
    championships: 6, // Update with actual championships
    arena: 'Chase Center',
    headCoach: 'Steve Kerr',
    founded: 1946, // Update with actual founding year
    image: warriorsImage,
  },
];

export default times;
