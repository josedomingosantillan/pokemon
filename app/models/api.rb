class Api < ApplicationRecord
  attr_reader :uri

  def initialize(uri)
    @uri = uri
  end

  def PokemoAll
    begin
      datos = RestClient.get "#{uri}?offset=1000&limit=1000", { 'Content-Type': 'application/json', 'Accept': 'application/json' }
      return datos
    rescue RestClient::ExceptionWithResponse => e
      return JSON.parse(e.response).to_json
    rescue => e
      return (44).to_json
    end
  end

  def PokemoSearch(pokemon)
    begin
      datos = RestClient.get "#{uri}#{pokemon}", { 'Content-Type': 'application/json', 'Accept': 'application/json' }
      return datos
    rescue RestClient::ExceptionWithResponse => e
      return JSON.parse(e.response).to_json
    rescue => e
      return (44).to_json
    end
  end
end
