import React, { useState } from 'react';
import './Properties.css';
import skyline from '../assets/images/NBO.jpeg';

function PropertiesHeader() {
    return (
        <div className="properties-header" style={{ backgroundImage: `url(${skyline})` }}>
            <h1 className='property_header'>Properties</h1>
            <h2>Discover the most exciting properties in Kenya.</h2>
        </div>
    );
}

function PropertiesList() {
    const [showFilters, setShowFilters] = useState(false);

    const properties = [
        {
            id: 1,
            name: "Industrial Opportunity - 1",
            location: "Nairobi",
            status: "Open",
            irr: "13%",
            entryYield: "8.1%",
            value: "$3.20M",
            type: "Industrial",
            funded: "95%",
        },
        {
            id: 2,
            name: "Healthcare Growth Opportunity",
            location: "Kisumu",
            status: "Fully Funded",
            irr: "16-18%",
            entryYield: "0%",
            value: "$3.50M",
            type: "Healthcare",
            funded: "100%",
        },
        {
            id: 3,
            name: "Healthcare Opportunity",
            location: "Mombasa",
            status: "Fully Funded",
            irr: "13.4%",
            entryYield: "9.02%",
            value: "$4.50M",
            type: "Healthcare",
            funded: "100%",
        }
    ];

    const assetTypes = ["Office", "Retail", "Warehouse", "Industrial", "Healthcare"];
    const cities = ["Nairobi", "Nakuru", "Mombasa", "Kisumu", "Eldoret"];

    return (
        <div className="properties-list">
            <div className="filter-sort">
                <input type="text" placeholder="Search" className="search-bar" />
                <select className="sort-dropdown">
                    <option value="latest">Sort By: Latest</option>
                    <option value="funded">Sort By: Fully Funded</option>
                </select>
                <button className="filter-button" onClick={() => setShowFilters(!showFilters)}>Filters</button>
            </div>

            {showFilters && (
                <div className="filters-popup-overlay">
                    <div className="filters-popup">
                        <h3 className="filters-title">Filter By:</h3>
                        <div className="filter-section">
                            <h4 className="filter-section-title">Asset Type</h4>
                            {assetTypes.map(type => (
                                <div key={type} className="filter-item">
                                    <input type="checkbox" id={type} name="assetType" value={type} />
                                    <label htmlFor={type}>{type}</label>
                                </div>
                            ))}
                        </div>
                        <div className="filter-section">
                            <h4 className="filter-section-title">City</h4>
                            {cities.map(city => (
                                <div key={city} className="filter-item">
                                    <input type="checkbox" id={city} name="city" value={city} />
                                    <label htmlFor={city}>{city}</label>
                                </div>
                            ))}
                        </div>
                        <button className="apply-popup" onClick={() => setShowFilters(false)}>Apply</button>
                    </div>
                </div>
            )}

            <div className="property-grid">
                {properties.map(property => (
                    <div className="property-card" key={property.id}>
                        <div className={`status-label ${property.status.toLowerCase().replace(' ', '-')}`}>{property.status}</div>
                        <div className="property-details">
                            <h3>{property.name}</h3>
                            <p className="location">{property.location}</p>
                            <p className="info">Target IRR: {property.irr}</p>
                            <p className="info">Entry Yield: {property.entryYield}</p>
                            <p className="info">Asset Value: {property.value}</p>
                            <p className="info">Asset Type: {property.type}</p>
                            <div className="funding-bar">
                                <div className="funded" style={{ width: property.funded }}></div>
                            </div>
                            <p className="funded-text">{property.funded} Funded</p>
                        </div>
                        <div className="actions">
                            {property.status === "Open" ? (
                                <button className="action-button invest-now">Invest Now</button>
                            ) : (
                                <button className="action-button join-waitlist">Join Waitlist</button>
                            )}
                            <button className="action-button view-details">View Details</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function Properties() {
    return (
        <main>
            <PropertiesHeader />
            <PropertiesList />
        </main>
    );
}

export default Properties;



