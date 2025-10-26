import { getAllRoutes, getListOfRegions, getListOfSeasons, getRoutesByRegionAndSeason } from '../../models/model.js';

export default async (req, res) => {
    const regions = await getListOfRegions();
    // const routes = await getAllRoutes();
    const seasons = await getListOfSeasons();
    
    const region = req.query.region;
    const season = req.query.season;


    const routes = await getRoutesByRegionAndSeason(region, season);
    
    
    res.render('routes/list', { 
        title: 'Scenic Train Routes',
        regions,
        routes,
        seasons
    });



    
};

