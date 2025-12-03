"use client";

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '100%'
};

const defaultCenter = {
    lat: 25.1856, // Business Bay approx
    lng: 55.2666
};

// Locations
const locations = {
    "prime-tower": { lat: 25.1865, lng: 55.2645 }, // Approx
};

interface MapComponentProps {
    location?: "prime-tower";
}

export function MapComponent({ location }: MapComponentProps) {
    const center = location ? locations[location] : defaultCenter;
    const zoom = location ? 16 : 14;

    // If no API key is provided, show a placeholder
    if (!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY) {
        return (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                <div className="text-center p-6">
                    <p className="font-bold mb-2">Google Maps Integration</p>
                    <p className="text-sm">Add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to .env.local to enable maps.</p>
                </div>
            </div>
        );
    }

    return (
        <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={zoom}
            >
                {location ? (
                    <Marker position={locations[location]} />
                ) : (
                    <Marker position={locations["prime-tower"]} title="Prime Tower" />
                )}
            </GoogleMap>
        </LoadScript>
    );
}
