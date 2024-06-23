// Importar todas as imagens dos jogadores
import lebron from '../../assets/jogadores/lebron.png';
import curry from '../../assets/jogadores/curry.png';
import durant from '../../assets/jogadores/durant.png';
import giannis from '../../assets/jogadores/giannis.png';
import harden from '../../assets/jogadores/harden.png';
import kawhi from '../../assets/jogadores/kawhi.png';
import davis from '../../assets/jogadores/davis.png';
import doncic from '../../assets/jogadores/doncic.png';
import lillard from '../../assets/jogadores/lillard.png';
import embiid from '../../assets/jogadores/embiid.png';

// Dados dos jogadores com as imagens importadas
const jogadores = [
    {
        id: 1,
        first_name: 'LeBron',
        last_name: 'James',
        position: 'SF',
        height: 6.9,
        weight: 250,
        jersey_number: 23,
        college: 'None',
        country: 'USA',
        draft_year: 2003,
        draft_round: 1,
        draft_number: 1,
        team: { name: 'Los Angeles Lakers' },
        image: lebron
    },
    {
        id: 2,
        first_name: 'Stephen',
        last_name: 'Curry',
        position: 'PG',
        height: 6.3,
        weight: 185,
        jersey_number: 30,
        college: 'Davidson',
        country: 'USA',
        draft_year: 2009,
        draft_round: 1,
        draft_number: 7,
        team: { name: 'Golden State Warriors' },
        image: curry
    },
    {
        id: 3,
        first_name: 'Kevin',
        last_name: 'Durant',
        position: 'SF',
        height: 6.10,
        weight: 240,
        jersey_number: 7,
        college: 'Texas',
        country: 'USA',
        draft_year: 2007,
        draft_round: 1,
        draft_number: 2,
        team: { name: 'Brooklyn Nets' },
        image: durant
    },
    {
        id: 4,
        first_name: 'Giannis',
        last_name: 'Antetokounmpo',
        position: 'PF',
        height: 6.11,
        weight: 242,
        jersey_number: 34,
        college: 'None',
        country: 'Greece',
        draft_year: 2013,
        draft_round: 1,
        draft_number: 15,
        team: { name: 'Milwaukee Bucks' },
        image: giannis
    },
    {
        id: 5,
        first_name: 'James',
        last_name: 'Harden',
        position: 'SG',
        height: 6.5,
        weight: 220,
        jersey_number: 13,
        college: 'Arizona State',
        country: 'USA',
        draft_year: 2009,
        draft_round: 1,
        draft_number: 3,
        team: { name: 'Philadelphia 76ers' },
        image: harden
    },
    {
        id: 6,
        first_name: 'Kawhi',
        last_name: 'Leonard',
        position: 'SF',
        height: 6.7,
        weight: 225,
        jersey_number: 2,
        college: 'San Diego State',
        country: 'USA',
        draft_year: 2011,
        draft_round: 1,
        draft_number: 15,
        team: { name: 'Los Angeles Clippers' },
        image: kawhi
    },
    {
        id: 7,
        first_name: 'Anthony',
        last_name: 'Davis',
        position: 'PF',
        height: 6.10,
        weight: 253,
        jersey_number: 3,
        college: 'Kentucky',
        country: 'USA',
        draft_year: 2012,
        draft_round: 1,
        draft_number: 1,
        team: { name: 'Los Angeles Lakers' },
        image: davis
    },
    {
        id: 8,
        first_name: 'Luka',
        last_name: 'Doncic',
        position: 'PG',
        height: 6.7,
        weight: 230,
        jersey_number: 77,
        college: 'None',
        country: 'Slovenia',
        draft_year: 2018,
        draft_round: 1,
        draft_number: 3,
        team: { name: 'Dallas Mavericks' },
        image: doncic
    },
    {
        id: 9,
        first_name: 'Damian',
        last_name: 'Lillard',
        position: 'PG',
        height: 6.2,
        weight: 195,
        jersey_number: 0,
        college: 'Weber State',
        country: 'USA',
        draft_year: 2012,
        draft_round: 1,
        draft_number: 6,
        team: { name: 'Portland Trail Blazers' },
        image: lillard
    },
    {
        id: 10,
        first_name: 'Joel',
        last_name: 'Embiid',
        position: 'C',
        height: 7.0,
        weight: 280,
        jersey_number: 21,
        college: 'Kansas',
        country: 'Cameroon',
        draft_year: 2014,
        draft_round: 1,
        draft_number: 3,
        team: { name: 'Philadelphia 76ers' },
        image: embiid
    }
];

export default jogadores;
