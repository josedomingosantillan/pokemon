class Api < ApplicationRecord

  def self.PokemoAll
    begin
      datos = RestClient.get 'https://pokeapi.co/api/v2/pokemon/?offset=1000&limit=1000', {'Content-Type': 'application/json', 'Accept': 'application/json'}
      return datos
    rescue RestClient::ExceptionWithResponse => e
      return JSON.parse(e.response).to_json
    rescue => e
      return (44).to_json
    end
  end

  def self.PokemoSearch(pokemon)
    begin
      datos = RestClient.get "https://pokeapi.co/api/v2/pokemon/#{pokemon}", {'Content-Type': 'application/json', 'Accept': 'application/json'}
      return datos
    rescue RestClient::ExceptionWithResponse => e
      return JSON.parse(e.response).to_json
    rescue => e
      return (44).to_json
    end
  end
end
