import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Filter from "./Filter"

const url ="https://restcountries.com/v2/all";

const Countries = () => {

    const [countries, setCountries] = useState([])
    const [filtered, setFiltered] = useState([])
    const [searchInput, setSearchInput] = useState("")
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchCountries = async () => {
          const response = await fetch(url)
          const countries = await response.json()
          setCountries(countries)
          setIsLoading(false)
        }
        fetchCountries()
    }, [])

    return (
     <>
        <Filter
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        setFiltered={setFiltered}
        setCountries={setCountries}
        countries={countries}
        />
        {isLoading ? (
            <h1 className="loading">Loading...</h1>
        ) : searchInput.length > 1 ? (
            <section className="countries">
                {filtered.map((country) => {
                    return (
                        <Link to={`/countries/${country.name}`} key={country.name}>                    
                          <article>
                            <div className="flag">
                              <img src={country.flags[0]} alt={country.name} />
                            </div>
                            <div className="details">
                              <h4 className="country-name">
                                Name: <span>{country.name}</span>
                              </h4>
                              <h4>
                                Population: <span>{country.population.toLocaleString()}</span>
                              </h4>
                              <h4>
                                Region: <span>{country.region}</span>
                              </h4>
                              <h4>
                                Capital: <span>{country.capital}</span>
                              </h4>
                            </div>
                          </article>
                          </Link> 
                    )
                })}
            </section>
        ) : (
            <section className="countries">
                {countries.map((country) => {
                    return (
                        <Link to={`/countries/${country.name}`} key={country.name}> 
                          <article>
                            <div className="flag">
                              <img src={country.flags[0]} alt={country.name} />
                            </div>
                            <div className="details">
                              <h4 className="country-name">
                                Name: <span>{country.name}</span>
                              </h4>
                              <h4>
                                Population: <span>{country.population.toLocaleString()}</span>
                              </h4>
                              <h4>
                                Region: <span>{country.region}</span>
                              </h4>
                              <h4>
                                Capital: <span>{country.capital}</span>
                              </h4>
                            </div>
                          </article>
                        </Link>
                    )
                })}
            </section>
        )}
      </>
    )
}

export default Countries;