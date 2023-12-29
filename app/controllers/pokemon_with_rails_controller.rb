class PokemonWithRailsController < ApplicationController
  def index
    @uri = "https://pokeapi.co/api/v2/pokemon/"
    api = Api.new(@uri)
    if params[:search].present?
      @dtos = api.PokemoSearch(params[:search])
      result = JSON.parse @dtos.to_str
      @pokemons = Kaminari.paginate_array(result['results']).page(params[:page]).per(12)
      if @pokemons.empty?
        @error = 1
      end
    else
      @dtos = api.PokemoAll
      result = JSON.parse @dtos.to_str
      @pokemons = Kaminari.paginate_array(result['results']).page(params[:page]).per(12)
    end

  end
end
