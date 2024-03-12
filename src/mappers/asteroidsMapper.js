export const asteroidsMapper = (asteroidsData) => {
    return {
        elementsCount: asteroidsData.element_count,
        meteors: Object.values(asteroidsData.near_earth_objects).flat().map(asteroid => {
            return {
                id: asteroid.id,
                name: asteroid.name,
                diameter_meters: asteroid.estimated_diameter.meters.estimated_diameter_min,
                is_potentially_hazardous_asteroid: asteroid.is_potentially_hazardous_asteroid,
                close_approach_date_full: asteroid.close_approach_data[0].close_approach_date_full,
                relative_velocity_kps: asteroid.close_approach_data[0].relative_velocity.kilometers_per_second
            }
        })
    };
};