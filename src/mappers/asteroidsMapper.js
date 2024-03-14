export const asteroidsMapper = (asteroidsData, count, hasDangerousMeteors) => {
    let asteroids = Object.values(asteroidsData.near_earth_objects).flat();
    let mappedData = {};
    if (count) {
        mappedData.elementsCount = asteroidsData.element_count;
    }
    if (hasDangerousMeteors) {
        asteroids = asteroids.filter(asteroid => asteroid.is_potentially_hazardous_asteroid);
    }
    if (hasDangerousMeteors && count) {
        mappedData.elementsCount = asteroids.length;
    }
    mappedData.meteors = mapAsteroids(asteroids);
    return mappedData;
};

const mapAsteroids = (asteroids) => {
    return asteroids.map(asteroid => {
        return {
            id: asteroid.id,
            name: asteroid.name,
            diameter_meters: asteroid.estimated_diameter.meters.estimated_diameter_min,
            is_potentially_hazardous_asteroid: asteroid.is_potentially_hazardous_asteroid,
            close_approach_date_full: asteroid.close_approach_data[0].close_approach_date_full,
            relative_velocity_kps: asteroid.close_approach_data[0].relative_velocity.kilometers_per_second
        }
    });
}