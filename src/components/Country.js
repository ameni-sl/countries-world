import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/country.css";

const Country = () => {
    const [country, setCountry] = useState([])
    const { name } = useParams()
    
    useEffect(() => {
        const fetchCountryData = async () => {
          const response = await fetch(
            `https://restcountries.com/v2/name/${name}`
          )
          const country = await response.json()
          setCountry(country)
        }   
        fetchCountryData()
    }, [name])

    return (
        <>
            <section className="country">
                <Link to="/" className="btn btn-light">
                <i className="fas fa-arrow-left"></i> Back
                </Link>
                {country.map((c) => {
                    return (
                        <article key={c.name}>
                            <div className="country-inner">
                                <div className="flag">
                                    <img src={c.flags[0]} alt={c.name} />
                                </div>
                                <div className="country-details">
                                    <div>
                                        <h2>{c.name}</h2>
                                        <h5>
                                            Native Name: <span>{c.nativeName}</span>
                                        </h5>
                                        <h5>
                                            Population: <span>{c.population.toLocaleString()}</span>
                                        </h5>
                                        <h5>
                                            Region: <span>{c.continent}</span>
                                        </h5>
                                        <h5>
                                            Sub Region: <span>{c.region}</span>
                                        </h5>
                                        <h5>
                                            Capital: <span>{c.capital}</span>{" "}
                                        </h5>
                                    </div>

                                    <div>
                                        <h5>
                                            Top Level Domain: <span>{c.topLevelDomain}</span>
                                        </h5>
                                        <h5>
                                            Currencies: <span>{c.currencies[0].name}</span>
                                        </h5>
                                        <h5>
                                            Languages: <span>{c.languages[0].name}</span>
                                        </h5>
                                    </div>
                                    <div>
                                        <h3>Border Countries: </h3>
                                        <div className="borders">
                                            {c.borders.map((border) => {
                                                return (
                                                    <ul key={border}>
                                                        <li>{border}</li>
                                                    </ul>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    )
                })}
            </section>           
        </>
    );
};

export default Country;